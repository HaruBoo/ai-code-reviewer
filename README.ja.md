[English](README.md)

# AI Code Reviewer（日本語）

> Claude APIを活用したAIコードレビューツール + 学習ログ機能

🔗 **デモ**: [ai-code-reviewer-alpha-khaki.vercel.app](https://ai-code-reviewer-alpha-khaki.vercel.app)

## 概要

コードを貼り付けるだけで、AIが即座にレビューを行い、学びを記録できるフルスタックWebアプリです。

コードを貼る → AIがレビュー → 学びをメモ → ナレッジが蓄積される

## 機能

- **AIコードレビュー** — Claude APIによる可読性・バグ・パフォーマンス・ベストプラクティスの詳細フィードバック
- **TIL候補の自動提案** — レビュー結果をもとにAIが学びを1〜2文で自動要約
- **TIL学習ログ** — Supabaseと連携した個人ナレッジベースへの保存
- **マークダウンレンダリング** — react-markdownによる見やすい結果表示
- **モダンUI** — 開発者向けのクリーンなライトテーマ

## 技術スタック

| レイヤー | 技術 |
|---------|------|
| フロントエンド | React 19 + TypeScript + Vite |
| バックエンド | Node.js + Express + TypeScript |
| AI | Claude API (Anthropic) |
| データベース | Supabase (PostgreSQL) |
| デプロイ (フロント) | Vercel |
| デプロイ (バック) | Railway |

## 開発の背景

JavaのCLIツールとしてコードレビューツールを作成した後、WebアプリとしてリビルドしTypeScriptで型安全に実装。さらにTIL学習ログ機能を統合することで、レビューを受けながら学びを記録できるツールに進化させました。

## 作者

[HaruBoo](https://github.com/HaruBoo) — 東京在住、AIエンジニア志望。Claude APIを使った開発ツールを作っています。