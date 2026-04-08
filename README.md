# LetsCode Portfolio Hub (Next.js)

This repository now includes a scalable Next.js implementation for managing multiple personal portfolios from one shared codebase.

## What this setup gives you

- Reusable UI components for hero, about, services, and contact sections.
- One data source file for all profiles: `data/portfolios.js`.
- One route per person: `/{slug}`.
- Fast updates: edit profile content in one place without duplicating HTML files.

## Profiles included

- Bright Adu Kwarteng Snr
- Owusu Kenneth
- Success Adzorze
- Abhisumat Kundu
- Martin Okantey Jairus Nii Okaitey
- Enock Asante
- Felix Owusu

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Editing content

Update profile details in `data/portfolios.js`:

- `name`, `headline`, `intro`
- `about` paragraphs
- `services`
- `skills`
- `projects`
- image links

## Image paths

All profile and cover images are now expected in:

- `public/images/profiles`
- `public/images/covers`

Replace those files with final person images while keeping the same names, or update the paths in `data/portfolios.js`.