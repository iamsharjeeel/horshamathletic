"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://example.com/form-stub";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  marketingConsent: boolean;
  transactionalConsent: boolean;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  marketingConsent: false,
  transactionalConsent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [phoneError, setPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (key === "phone" || key === "marketingConsent" || key === "transactionalConsent") {
      setPhoneError("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const phone = form.phone.trim();
    const wantsSms = form.marketingConsent || form.transactionalConsent;

    if (wantsSms && !phone) {
      setPhoneError("Please provide a phone number to receive text messages.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: phone || null,
          message: form.message.trim(),
          marketingConsent: form.marketingConsent,
          transactionalConsent: form.transactionalConsent,
          source: "go.horshamathletic.com/contact",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSuccess(true);
      setForm(initialState);
    } catch {
      if (FORM_ENDPOINT.includes("example.com")) {
        setSuccess(true);
        setForm(initialState);
      } else {
        setSubmitError(
          "Something went wrong sending your message. Please call 215-675-4535 or email info@horshamathletic.com."
        );
      }
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div
        className="rounded-xl border border-gold/40 bg-white px-6 py-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
        role="status"
      >
        <p className="font-display text-2xl tracking-[0.08em] text-ink uppercase">
          Message Sent
        </p>
        <p className="mt-4 text-base text-slate/80">
          Thanks — we&apos;ll get back to you within one business day.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-semibold tracking-[0.12em] text-gold-deep uppercase hover:text-ink"
          onClick={() => setSuccess(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-black/5 bg-surface/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8"
      noValidate
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-xs font-semibold tracking-[0.16em] text-ink uppercase"
          >
            FULL NAME
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-cream px-4 py-3.5 text-base text-ink placeholder:text-muted/70"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold tracking-[0.16em] text-ink uppercase"
          >
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full rounded-lg border border-black/10 bg-cream px-4 py-3.5 text-base text-ink placeholder:text-muted/70"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-semibold tracking-[0.16em] text-ink uppercase"
          >
            PHONE NUMBER (OPTIONAL)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? "phone-error" : undefined}
            className="w-full rounded-lg border border-black/10 bg-cream px-4 py-3.5 text-base text-ink placeholder:text-muted/70"
          />
          {phoneError ? (
            <p id="phone-error" className="mt-2 text-sm text-red-700" role="alert">
              {phoneError}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold tracking-[0.16em] text-ink uppercase"
          >
            HOW CAN WE HELP?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your fitness goals or which program you're interested in..."
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            className="w-full resize-y rounded-lg border border-black/10 bg-cream px-4 py-3.5 text-base text-ink placeholder:text-muted/70"
          />
        </div>
      </div>

      <div className="mt-7 space-y-4">
        <div className="rounded-xl border border-black/10 bg-white p-4 sm:p-5">
          <label className="flex cursor-pointer gap-3">
            <input
              type="checkbox"
              name="marketingConsent"
              checked={form.marketingConsent}
              onChange={(e) => updateField("marketingConsent", e.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 rounded border-black/30 text-gold accent-gold"
            />
            <span className="text-sm leading-relaxed text-slate/90">
              <strong>Marketing Updates:</strong> I consent to receive recurring
              automated promotional and personalized marketing text messages
              (e.g. SMS/MMS) from{" "}
              <strong>Newtown Racquetball INC DBA Horsham Athletic Club</strong>{" "}
              at the number provided. Message and data rates may apply. Message
              frequency varies. Reply STOP to cancel at any time. Reply HELP for
              help. My consent is not a condition of any purchase.
            </span>
          </label>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-4 sm:p-5">
          <label className="flex cursor-pointer gap-3">
            <input
              type="checkbox"
              name="transactionalConsent"
              checked={form.transactionalConsent}
              onChange={(e) =>
                updateField("transactionalConsent", e.target.checked)
              }
              className="mt-1 h-5 w-5 shrink-0 rounded border-black/30 text-gold accent-gold"
            />
            <span className="text-sm leading-relaxed text-slate/90">
              <strong>Transactional Updates:</strong> I consent to receive
              non-marketing text messages related to my account, membership
              updates, and facility alerts from{" "}
              <strong>Newtown Racquetball INC DBA Horsham Athletic Club</strong>.
              Message and data rates may apply. Message frequency varies. Reply
              STOP to cancel at any time. Reply HELP for help. My consent is not
              a condition of any purchase.
            </span>
          </label>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted">
        View our{" "}
        <Link href="/privacy" className="underline hover:text-ink">
          Privacy Policy
        </Link>
        ,{" "}
        <Link href="/terms" className="underline hover:text-ink">
          Terms of Service
        </Link>
        , and{" "}
        <Link href="/sms-terms" className="underline hover:text-ink">
          SMS Terms & Conditions
        </Link>
        .
      </p>

      {submitError ? (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full bg-ink px-6 py-4 text-sm font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold hover:text-ink disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
