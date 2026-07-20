# Qhamani Twaku Portfolio

A single-page portfolio built with Next.js, TypeScript and Tailwind CSS. The
interface combines a readable professional profile with a dark pixel-art theme,
an Origel terminal, rotating roles and a scroll-linked project-road traveller.

## Requirements

- Node.js 20.9 or newer
- npm

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm run start
```

## Project Structure

- `app/` contains the App Router page, global design system and metadata.
- `components/` contains layout, section, effect and reusable UI components.
- `data/portfolio.ts` is the source of portfolio content.
- `types/portfolio.ts` defines the content contracts.
- `public/` contains the CV and approved image assets.

The static sections remain Server Components. Client Components are limited to
the rotating role, terminal boot sequence and scroll-linked road traveller.

## Deployment

The project is compatible with a standard Next.js deployment on Vercel. Social
metadata uses `VERCEL_PROJECT_PRODUCTION_URL` when Vercel provides it and falls
back to `http://localhost:3000` during local development.
