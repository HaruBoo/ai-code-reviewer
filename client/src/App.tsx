import { useState } from 'react'

function App() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)
  const [tilContent, setTilContent] = useState('') // TILのメモを入力するstate
  const [saving, setSaving] = useState(false)      // TIL保存中のローディングstate

  const handleReview = async () => {
    setLoading(true)
    const res = await fetch('http://localhost:3001/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    })
    const data = await res.json()
    setReview(data.review)
    setLoading(false)
  }

  const handleSaveTil = async () => {
    setSaving(true)  // ローディング開始
    await fetch('http://localhost:3001/api/til', {
      method: 'POST',  // データを送る
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        content: tilContent ,  // TILのメモ内容
        code: code      // レビューしたコード
      })
    })
    setSaving(false)  // ローディング終了
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>AI Code Reviewer</h1>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="レビューしたいコードを貼り付けてください"
        rows={10}
        style={{ width: '100%', fontSize: '14px' }}
      />
      <br />
      <button onClick={handleReview} disabled={loading}>
        {loading ? 'レビュー中...' : 'レビューする'}
      </button>
      {review && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
          <h2>レビュー結果</h2>
          {review}

          <h3>TILメモ</h3>
          <textarea
            value={tilContent}
            onChange={(e) => setTilContent(e.target.value)}
            placeholder="学んだことをメモしよう"
            rows={4}
            style={{ width: '100%', fontSize: '14px' }}
          />
          <button onClick={handleSaveTil} disabled={saving}>
            {saving ? '保存中...' : 'TILに保存'}
      </button>
        </div>
      )}
    </div>
  )
}

export default App