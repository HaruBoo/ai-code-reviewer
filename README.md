[日本語版はこちら](README.ja.md)

# AI Code Reviewer

> AI-powered code review tool with integrated learning log — Built with Claude API, React, TypeScript, and Supabase.

🔗 **Live Demo**: [ai-code-reviewer-alpha-khaki.vercel.app](https://ai-code-reviewer-alpha-khaki.vercel.app)

## Overview

AI Code Reviewer is a full-stack web application that combines AI-powered code review with a personal learning journal (TIL — Today I Learned).

Paste your code → Get an instant AI review → Save what you learned → Build your knowledge base.

## Features

- **AI Code Review** — Paste any code and receive detailed feedback on readability, bugs, performance, and best practices powered by Claude API
- **AI-Generated TIL Suggestions** — After each review, Claude automatically suggests a concise learning note based on the review results
- **TIL Learning Log** — Save your learnings to a personal knowledge base backed by Supabase
- **Markdown Rendering** — Review results are beautifully rendered with full markdown support
- **Modern UI** — Clean, responsive design with a light theme optimized for developers

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + TypeScript + Vite |
| Backend | Node.js + Express + TypeScript |
| AI | Claude API (Anthropic) |
| Database | Supabase (PostgreSQL) |
| Deploy (Frontend) | Vercel |
| Deploy (Backend) | Railway |

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

## Getting Started

### Prerequisites

- Node.js v18+
- Anthropic API Key
- Supabase project

### Installation
```bash
git clone https://github.com/HaruBoo/ai-code-reviewer.git
cd ai-code-reviewer

cd client && npm install
cd ../server && npm install
```

### Environment Variables

Create `server/.env`:
```env
ANTHROPIC_API_KEY=your_anthropic_api_key
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally
```bash
# Terminal 1 — Start backend
cd server && npm run dev

# Terminal 2 — Start frontend
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Author

[HaruBoo](https://github.com/HaruBoo) — Aspiring AI engineer based in Tokyo. Building developer tools with Claude API.