import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Horsham Athletic Club in Horsham, PA to ask about memberships, classes, personal training, Parisi Speed School, or a free trial.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-black/5 bg-cream px-4 py-16 text-ink sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
            Contact
          </p>
          <h1 className="section-title mt-3 max-w-3xl text-4xl sm:text-5xl">
            Start Your Free Trial or Ask a Question
          </h1>
          <p className="mt-5 max-w-2xl text-base text-ink/70 sm:text-lg">
            Reach Horsham Athletic Club about memberships, group fitness,
            personal training, or Parisi Speed School. We serve Horsham and
            surrounding communities across Montgomery County and Bucks County.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.2fr] lg:px-8">
          <aside className="space-y-8">
            <div>
              <h2 className="section-title text-2xl text-ink">Visit Us</h2>
              <address className="mt-4 space-y-2 text-base leading-relaxed text-slate/85 not-italic">
                <p>Horsham Athletic Club</p>
                <p>400 Horsham Road</p>
                <p>Horsham, PA 19044</p>
              </address>
            </div>

            <div>
              <h2 className="section-title text-2xl text-ink">Call or Email</h2>
              <ul className="mt-4 space-y-2 text-base text-slate/85">
                <li>
                  <a href="tel:2156754535" className="hover:text-gold-deep">
                    215-675-4535
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@horshamathletic.com"
                    className="hover:text-gold-deep"
                  >
                    info@horshamathletic.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="section-title text-2xl text-ink">Hours</h2>
              <ul className="mt-4 space-y-2 text-base text-slate/85">
                <li>Monday–Thursday: 5:00 AM–10:00 PM</li>
                <li>Friday: 5:00 AM–8:00 PM</li>
                <li>Saturday & Sunday: 6:00 AM–8:00 PM</li>
              </ul>
            </div>
          </aside>

          <div>
            <h2 className="section-title mb-6 text-2xl text-ink">
              Send a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
