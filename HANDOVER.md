# Handover — HAC A2P Site

## What changed

- Replaced header/footer text brand with HAC logo image (`public/hac-logo.png`).
- Switched header/footer (and adjacent page intros) to light backgrounds so the logo contrasts.
- Built full Next.js App Router site for Horsham Athletic Club A2P / 10DLC verification.
- Six routes: `/`, `/programs`, `/contact`, `/privacy`, `/terms`, `/sms-terms`.
- Shared header + footer (legal links on every page).
- Compliance contact form with optional phone, two separate unchecked SMS consent checkboxes, phone-required-when-consent validation, and configurable `FORM_ENDPOINT`.
- Legal pages rendered with verbatim carrier-mandated copy and bold no-sharing clauses.

## Why

Carrier reviewers need a live, legitimate business site with clear SMS consent collection and privacy/SMS terms before approving the messaging campaign.

## Files touched

- `src/app/*` — layout, home, programs, contact, privacy, terms, sms-terms, globals
- `src/components/Header.tsx`, `Footer.tsx`, `ContactForm.tsx`
- `public/hac-logo.png`, `public/hero.jpg`
- `README.md`, `HANDOVER.md`, `CHANGELOG.md`
- Next.js scaffold (`package.json`, configs, etc.)

## Pending

- Replace `FORM_ENDPOINT` stub in `src/components/ContactForm.tsx` with the live GHL webhook.
- Point `go.horshamathletic.com` DNS to the Vercel deployment.
- Resolve `[VERIFY]` markers (class schedule, trainer roster/pricing, Parisi enrollment details, current NAC visit allowances / Camp NAC enrollment).
- Optional: swap stock hero image for an owned HAC facility photo.
