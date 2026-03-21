import express from 'express'           // expressをインポート
import cors from 'cors'                 // corsをインポート
import dotenv from 'dotenv'             // dotenvをインポート
import { reviewRouter } from './review' // コードレビューのreviewRouterをインポート
import { tilRouter } from './til'       // TILのtilRouterをインポート

dotenv.config() // .envを読み込む
const app = express()
const PORT = 3001

app.use(cors())         // 別ポート（フロント）からのアクセスを許可
app.use(express.json()) // リクエストのJSONを読み込めるようにする

app.use('/api', reviewRouter) // /api以下のリクエストをreviewRouterに任せる
app.use('/api', tilRouter)    // /api以下のリクエストをtilRouterに任せる

app.listen(PORT, () => { //ポートでサーバーを起動
  console.log(`Server running on http://localhost:${PORT}`)
})