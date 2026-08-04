import Image from "next/image";
import Link from "next/link";

const offerings = [
  {
    title: "Gym Membership",
    body: "Full facility access with spacious training floors, free weights, cardio, luxury locker rooms, and sauna/steam amenities built for everyday training.",
  },
  {
    title: "Group Fitness Classes",
    body: "Energizing classes including Spin, Zumba, Pilates, Yoga, HIIT, and 65+ included classes so members can move with structure and community.",
  },
  {
    title: "Personal Training",
    body: "Certified trainers deliver 1-on-1 and small-group coaching tailored to strength, conditioning, mobility, and long-term fitness goals.",
  },
  {
    title: "Sports Performance",
    body: "Parisi Speed School develops speed, agility, and athleticism for youth and competitive athletes who want measurable performance gains.",
  },
];

const benefits = [
  {
    title: "Luxury Locker Rooms",
    body: "Premium locker room amenities with sauna and steam room access help members recover and reset between sessions.",
  },
  {
    title: "Spacious Training Floor",
    body: "Room to train without crowding — strength equipment, open floor space, and cardio options for every training style.",
  },
  {
    title: "Expert Staff",
    body: "Coaches and membership staff who know the facility and help members choose programs that fit their goals and schedule.",
  },
  {
    title: "65+ Included Classes",
    body: "A deep weekly class offering means members can train consistently without paying à la carte for every session.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-white">
        <Image
          src="/hero.jpg"
          alt="Athletes training with free weights in a modern gym"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24">
          <p className="animate-fade-up font-display text-3xl tracking-[0.14em] text-gold uppercase sm:text-4xl md:text-5xl lg:text-6xl">
            Horsham Athletic Club
          </p>
          <div className="accent-line mt-4 h-1 w-24 bg-gold" />
          <h1 className="animate-fade-up animate-delay-1 mt-6 max-w-3xl font-display text-3xl tracking-[0.04em] uppercase sm:text-4xl md:text-5xl">
            Customized Programs for Every Stage of Your Fitness Journey
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            A community fitness center in Horsham, PA — built for members who
            want premium facilities, expert coaching, and programs that meet them
            where they are.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gold px-7 py-3.5 text-sm font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:bg-gold-soft"
            >
              Start Your Free Trial
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-gold hover:text-gold"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
              What We Offer
            </p>
            <h2 className="section-title mt-3 text-3xl text-ink sm:text-4xl">
              Four Paths. One Club.
            </h2>
            <p className="mt-4 text-base text-slate/80 sm:text-lg">
              Whether you are rebuilding consistency, chasing performance, or
              looking for a welcoming place to train, HAC has a clear starting
              point.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="section-title text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate/80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.18em] text-gold uppercase">
              Why HAC
            </p>
            <h2 className="section-title mt-3 text-3xl sm:text-4xl">
              Member Benefits That Show Up Daily
            </h2>
            <p className="mt-4 text-base text-white/75 sm:text-lg">
              Horsham Athletic Club is designed for people who value a polished
              training environment and real support — not just equipment in a
              warehouse.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="border-t border-gold/50 pt-5"
              >
                <h3 className="font-display text-lg tracking-[0.08em] uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <h2 className="section-title text-3xl text-ink sm:text-4xl">
              Ready to Train at HAC?
            </h2>
            <p className="mt-4 text-base text-slate/80 sm:text-lg">
              Tell us your goals and the program you are curious about. Our team
              will help you find the right membership or training path in
              Horsham, PA.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold hover:text-ink"
          >
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
