import { useState, useEffect } from 'react'

type Til = {
  id: string
  content: string
  code: string
  created_at: string
}

function TilLog() {
  const [tils, setTils] = useState<Til[]>([])  // TILの一覧を入れるstate

  useEffect(() => {
    fetchTils()  // コンポーネントが表示された時にTILを取得
  }, [])

  const fetchTils = async () => {
    const res = await fetch('http://localhost:3001/api/til')  //エンドポイント
    const data = await res.json()
    setTils(data.tils)  // stateに保存
  }
  
  return (
  <div style={{
    background: '#fff',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  }}>
    <h2 style={{ fontSize: '16px', fontWeight: '600', color: '#1a1a2e', marginBottom: '20px' }}>
      TILログ
    </h2>
    {tils.length === 0 ? (
      <p style={{ color: '#9ca3af', fontSize: '14px' }}>まだ学びが記録されていません</p>
    ) : (
      tils.map((til) => (
        <div key={til.id} style={{
          borderLeft: '3px solid #4f46e5',
          paddingLeft: '16px',
          marginBottom: '20px',
        }}>
          <p style={{ fontSize: '14px', fontWeight: '600', color: '#1a1a2e', marginBottom: '4px' }}>
            {til.content}
          </p>
          <p style={{ fontSize: '12px', color: '#9ca3af' }}>
            {new Date(til.created_at).toLocaleDateString('ja-JP')}
          </p>
        </div>
      ))
    )}
  </div>
)
}

export default TilLog