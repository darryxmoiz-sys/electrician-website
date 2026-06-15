# PowerPro Electrical – Next.js 14 Website

Production-ready website for a UK electrician business built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/services` | Full services listing |
| `/about` | About the business & team |
| `/gallery` | Project gallery with lightbox |
| `/contact` | Contact form & details |
| `/emergency` | 24/7 Emergency call-out page |
| `/ev-charger-installation` | EV charger service page |

## Customisation

1. Replace `[BUSINESS NAME]` and `[CITY]` references throughout
2. Update phone number `0161 123 4567` in all files
3. Update email `info@powerpro-electrical.co.uk`
4. Replace placeholder gallery images with real project photos
5. Update Google Analytics ID in `.env.local`
6. Update Schema markup in `src/app/layout.tsx`

## Build

```bash
npm run build
npm start
```

## Deployment

Ready to deploy to Vercel, Netlify, or any Node.js host.

```bash
npm install -g vercel
vercel
```
