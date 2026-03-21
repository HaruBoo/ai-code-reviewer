import { Router } from 'express'
import { createClient } from '@supabase/supabase-js'

const router = Router()



router.post('/til', async (req, res) => {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )
  const { content, code } = req.body
  const { data, error } = await supabase
    .from('tils')
    .insert([{ content, code }])
    .select()

  if (error) {
    res.status(500).json({ error: error.message })
    return
  }

  res.json({ til: data[0] })
})

router.get('/til', async (req, res) => {
  
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  )

  const { data, error } = await supabase
    .from('tils')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    res.status(500).json({ error: error.message })
    return
  }

  res.json({ tils: data })
})

export { router as tilRouter }