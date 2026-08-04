# Horsham Athletic Club — A2P Verification Site

Marketing site for **Horsham Athletic Club (HAC)** used for A2P 10DLC / toll-free SMS campaign verification. Deployed at `go.horshamathletic.com`.

Legal entity: **Newtown Racquetball INC DBA Horsham Athletic Club**

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static-friendly; zero-config Vercel deploy
- No CMS, database, or auth

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/programs` | Programs / services |
| `/contact` | Contact + SMS consent form |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/sms-terms` | SMS Terms & Conditions |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

```bash
npm run lint
```

## Contact form endpoint

The contact form posts to `FORM_ENDPOINT` at the top of:

`src/components/ContactForm.tsx`

Default value is a stub (`https://example.com/form-stub`). Replace it with your Go High Level (or other) webhook URL before production lead capture.

While the stub is set, failed network posts still show the success confirmation so local review of the form UX works without a live webhook.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No special build settings required.
4. Set the production domain to `go.horshamathletic.com`.
5. Update `FORM_ENDPOINT` in `ContactForm.tsx` (or wire an env-driven constant) to your webhook URL and redeploy.

## Business info

- **Address:** 400 Horsham Road, Horsham, PA 19044
- **Phone:** 215-675-4535
- **Email:** info@horshamathletic.com
- **Hours:** Mon–Thu 5:00 AM–10:00 PM · Fri 5:00 AM–8:00 PM · Sat–Sun 6:00 AM–8:00 PM
