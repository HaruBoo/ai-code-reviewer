import { Router } from 'express'
import Anthropic from '@anthropic-ai/sdk'

const router = Router()
const client = new Anthropic()

router.post('/review', async (req, res) => {
  const { code } = req.body

  const message = await client.messages.create({
    model: 'claude-opus-4-5',
    max_tokens: 1024,
    messages: [
      {
        role: 'user',
        content: `以下のコードをレビューしてください：\n\n${code}`
      }
    ]
  })

  const result = message.content[0]
  if (result.type === 'text') {
    const reviewText = result.text

    // TIL候補を生成
    const tilMessage = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1000,  // 短めでOK
      messages: [
        {
          role: 'user',
          content: `以下のコードレビューから、学びを1〜2文で簡潔にまとめてください：\n\n${reviewText}`
        }
      ]
    })

    const tilResult = tilMessage.content[0]
    if (tilResult.type === 'text') {
      res.json({ 
        review: reviewText,
        tilSuggestion: tilResult.text
      })
    }
  }
})

export { router as reviewRouter }