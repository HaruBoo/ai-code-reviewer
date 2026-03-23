import { useState } from 'react'
import TilLog from './TilLog'
import ReactMarkdown from 'react-markdown'

function App() {
  const [code, setCode] = useState('')
  const [review, setReview] = useState('')
  const [loading, setLoading] = useState(false)
  const [tilContent, setTilContent] = useState('')        // TILのメモを入力するstate
  const [saving, setSaving] = useState(false)             // TIL保存中のローディングstate
  const [tilSuggestion, setTilSuggestion] = useState('')  // AIが提案したTIL候補

  const handleReview = async () => {
    setLoading(true)
    const res = await fetch('https://ai-code-reviewer-production-6a22.up.railway.app/api/review'
, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code })
    })
    const data = await res.json()
    setReview(data.review)
    setTilSuggestion(data.tilSuggestion)
    setLoading(false)
  }

  const handleSaveTil = async () => {
    setSaving(true)  // ローディング開始
    await fetch('https://ai-code-reviewer-production-6a22.up.railway.app/api/review'
, {
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
  <div>
    <header style={{ marginBottom: '40px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1a1a2e' }}>
        AI Code Reviewer
      </h1>
      <p style={{ color: '#6b7280', marginTop: '6px', fontSize: '15px' }}>
        コードをレビューして、学びを記録しよう!
      </p>
    </header>

    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '28px',
      boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
      marginBottom: '24px'
    }}>
      <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px' }}>
        コードを入力
      </label>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="レビューしたいコードを貼り付けてください"
        rows={10}
        style={{
          width: '100%',
          fontSize: '13px',
          fontFamily: 'monospace',
          background: '#f8f9fb',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          padding: '14px',
          resize: 'vertical',
          outline: 'none',
        }}
      />
      <button
        onClick={handleReview}
        disabled={loading}
        style={{
          marginTop: '14px',
          padding: '10px 24px',
          background: loading ? '#9ca3af' : '#4f46e5',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'レビュー中...' : 'レビューする'}
      </button>
    </div>

    {review && (
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#1a1a2e' }}>
          レビュー結果
        </h2>
        <div style={{
          background: '#f8f9fb',
          borderRadius: '10px',
          padding: '16px',
          fontSize: '14px',
          lineHeight: '1.8',
          color: '#374151'
        }}>
          <ReactMarkdown>{review}</ReactMarkdown>
        </div>

        <div style={{ marginTop: '24px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#374151', display: 'block', marginBottom: '8px' }}>
            学びをメモする
          </label>

        {tilSuggestion && (
            <div style={{
              background: '#f0f9ff',
              border: '1px solid #bae6fd',
              borderRadius: '10px',
              padding: '12px',
              marginBottom: '12px',
              fontSize: '13px',
              color: '#0369a1',
          }}>
            <p style={{ fontWeight: '600', marginBottom: '4px' }}>AIの提案</p>
            <ReactMarkdown>{tilSuggestion}</ReactMarkdown>
         </div>
        )}

          <textarea
            value={tilContent}
            onChange={(e) => setTilContent(e.target.value)}
            placeholder="今日学んだことをメモしよう..."
            rows={3}
            style={{
              width: '100%',
              fontSize: '14px',
              background: '#f8f9fb',
              border: '1px solid #e5e7eb',
              borderRadius: '10px',
              padding: '12px',
              resize: 'vertical',
              outline: 'none',
            }}
          />
          <button
            onClick={handleSaveTil}
            disabled={saving}
            style={{
              marginTop: '10px',
              padding: '10px 24px',
              background: saving ? '#9ca3af' : '#10b981',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? '保存中...' : 'TILに保存'}
          </button>
        </div>
      </div>
    )}

    <TilLog />
  </div>
)
}

export default App