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
    <div>
      <h2>TILログ</h2>
      {tils.map((til) => (
        <div key={til.id}>
          <p>{til.content}</p>
          <p>{til.created_at}</p>
        </div>
      ))}
    </div>
  )
}

export default TilLog