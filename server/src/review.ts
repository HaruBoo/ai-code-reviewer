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
    res.json({ review: result.text })
  }
})

export { router as reviewRouter }