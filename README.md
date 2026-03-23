[English](#english) | [日本語](#japanese)

---

<a id="english"></a>

# AI Code Reviewer

> AI-powered code review tool with integrated learning log — Built with Claude API, React, TypeScript, and Supabase.

🔗 **Live Demo**: [ai-code-reviewer-alpha-khaki.vercel.app](https://ai-code-reviewer-alpha-khaki.vercel.app)

---

## Overview

AI Code Reviewer is a full-stack web application that combines AI-powered code review with a personal learning journal (TIL — Today I Learned).

Paste your code → Get an instant AI review → Save what you learned → Build your knowledge base.

---

## Features

- **AI Code Review** — Paste any code and receive detailed feedback on readability, bugs, performance, and best practices powered by Claude API
- **AI-Generated TIL Suggestions** — After each review, Claude automatically suggests a concise learning note based on the review results
- **TIL Learning Log** — Save your learnings to a personal knowledge base backed by Supabase
- **Markdown Rendering** — Review results are beautifully rendered with full markdown support
- **Modern UI** — Clean, responsive design with a light theme optimized for developers

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite |
| Backend | Node.js + Express + TypeScript |
| AI | Claude API (Anthropic) |
| Database | Supabase (PostgreSQL) |
| Deploy (Frontend) | Vercel |
| Deploy (Backend) | Railway |

---

## Architecture

```
Browser (React + TypeScript)
    ↓ fetch POST /api/review
Express Server (Railway)
    ↓ Anthropic SDK
Claude API → Review + TIL Suggestion
    ↓ @supabase/supabase-js
Supabase → TIL data saved
    ↓ res.json()
Browser → Rendered with react-markdown
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- Anthropic API Key
- Supabase project

### Installation

```bash
# Clone the repository
git clone https://github.com/HaruBoo/ai-code-reviewer.git
cd ai-code-reviewer

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### Environment Variables

Create `server/.env`:

```env
ANTHROPIC_API_KEY=your_anthropic_api_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Database Setup

Create a `tils` table in Supabase:

| Column | Type | Default |
|--------|------|---------|
| id | uuid | gen_random_uuid() |
| content | text | — |
| code | text | — |
| created_at | timestamptz | now() |

### Run Locally

```bash
# Terminal 1 — Start backend
cd server && npm run dev

# Terminal 2 — Start frontend
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Future Improvements

- [ ] Review perspective selection (Security / Performance / Readability)
- [ ] TIL search and tag filtering
- [ ] User authentication
- [ ] Review history

---

## Author

**HaruBoo** — 20 y/o Software Engineer / Interested in AI × Developer Tools

GitHub: [@HaruBoo](https://github.com/HaruBoo)

---

---

<a id="japanese"></a>

# AI Code Reviewer（日本語）

> Claude APIを活用したAIコードレビューツール + 学習ログ機能

🔗 **デモ**: [ai-code-reviewer-alpha-khaki.vercel.app](https://ai-code-reviewer-alpha-khaki.vercel.app)

[English](#english) | [日本語](#japanese)

---

## 概要

コードを貼り付けるだけで、AIが即座にレビューを行い、学びを記録できるフルスタックWebアプリです。

コードを貼る → AIがレビュー → 学びをメモ → ナレッジが蓄積される

---

## 機能

- **AIコードレビュー** — Claude APIによる可読性・バグ・パフォーマンス・ベストプラクティスの詳細フィードバック
- **TIL候補の自動提案** — レビュー結果をもとにAIが学びを1〜2文で自動要約
- **TIL学習ログ** — Supabaseと連携した個人ナレッジベースへの保存
- **マークダウンレンダリング** — react-markdownによる見やすい結果表示
- **モダンUI** — 開発者向けのクリーンなライトテーマ

---

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| フロントエンド | React 19 + TypeScript + Vite |
| バックエンド | Node.js + Express + TypeScript |
| AI | Claude API (Anthropic) |
| データベース | Supabase (PostgreSQL) |
| デプロイ (フロント) | Vercel |
| デプロイ (バック) | Railway |

---

## 開発の背景

JavaのCLIツールとしてコードレビューツールを作成した後、WebアプリとしてリビルドしTypeScriptで型安全に実装。さらにTIL学習ログ機能を統合することで、レビューを受けながら学びを記録できるツールに進化させました。

---

## 今後の改善予定

- [ ] レビュー観点の選択（セキュリティ / パフォーマンス / 可読性）
- [ ] TIL検索・タグ絞り込み
- [ ] ユーザー認証
- [ ] レビュー履歴

---

## 作者

**HaruBoo** — 20歳 / SESエンジニア / AI×開発ツールに興味あり

GitHub: [@HaruBoo](https://github.com/HaruBoo)
