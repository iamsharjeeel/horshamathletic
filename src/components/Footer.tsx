import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/8 bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Image
            src="/hac-logo.png"
            alt="Horsham Athletic Club"
            width={250}
            height={94}
            className="h-14 w-auto"
          />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/65">
            A full-service fitness center in Horsham, PA — gym memberships,
            group fitness, personal training, and sports performance for
            Montgomery County and Bucks County.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-gold-deep uppercase">
            Visit & Contact
          </p>
          <address className="mt-3 space-y-2 text-sm leading-relaxed text-ink/75 not-italic">
            <p>400 Horsham Road</p>
            <p>Horsham, PA 19044</p>
            <p>
              <a href="tel:2156754535" className="hover:text-gold-deep">
                215-675-4535
              </a>
            </p>
            <p>
              <a
                href="mailto:info@horshamathletic.com"
                className="hover:text-gold-deep"
              >
                info@horshamathletic.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <p className="text-xs tracking-[0.16em] text-gold-deep uppercase">
            Hours
          </p>
          <ul className="mt-3 space-y-2 text-sm text-ink/75">
            <li>Mon–Thu: 5:00 AM–10:00 PM</li>
            <li>Friday: 5:00 AM–8:00 PM</li>
            <li>Sat–Sun: 6:00 AM–8:00 PM</li>
          </ul>
          <nav className="mt-6 flex flex-col gap-2 text-sm" aria-label="Legal">
            <Link href="/privacy" className="text-ink/75 hover:text-gold-deep">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-ink/75 hover:text-gold-deep">
              Terms of Service
            </Link>
            <Link
              href="/sms-terms"
              className="text-ink/75 hover:text-gold-deep"
            >
              SMS Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-black/8">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink/45 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Newtown Racquetball INC DBA Horsham
          Athletic Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
