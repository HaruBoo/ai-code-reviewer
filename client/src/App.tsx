import { useState } from 'react'

function App() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)

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
        </div>
      )}
    </div>
  )
}

export default App