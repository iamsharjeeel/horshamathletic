import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Horsham Athletic Club programs: gym membership, group fitness classes, personal training, and Parisi Speed School sports performance training in Horsham, PA.",
};

const programs = [
  {
    title: "Gym Membership",
    body: [
      "A Horsham Athletic Club membership is built around full facility access — the strength floor, cardio equipment, open training space, and the locker room amenities that make daily training feel premium.",
      "Members use the club for everything from early-morning lifts to evening conditioning, with sauna and steam room access available as part of the facility experience. Whether you prefer independent workouts or staff-guided introductions to equipment, membership gives you a consistent home base for training in Horsham.",
      "Membership is designed for residents across Montgomery County and Bucks County who want a polished club environment without driving into a crowded city facility.",
    ],
  },
  {
    title: "Group Fitness Classes",
    body: [
      "Group fitness at HAC turns training into a shared experience. Classes are programmed to keep members accountable, introduce new movement patterns, and deliver a complete workout in a set block of time.",
      "Signature formats include Spin for high-energy cardio, Zumba for dance-driven conditioning, Pilates for core strength and control, Yoga for mobility and recovery, and HIIT for efficient full-body work. HAC also offers 65+ included classes, giving members a deep weekly schedule without stacking extra fees for every session.",
      "Class programming supports beginners building consistency as well as experienced members who want intensity with coaching cues and community energy. [VERIFY: current weekly class schedule and booking process]",
    ],
  },
  {
    title: "Personal Training",
    body: [
      "Personal training at Horsham Athletic Club pairs members with certified trainers for focused coaching — either one-on-one or in small groups. Sessions are tailored around strength, conditioning, mobility, body composition goals, and sustainable habit building.",
      "Trainers help members move safely, progress intelligently, and stay accountable when self-directed workouts stall. Personal training is especially valuable for members returning from a layoff, preparing for an event, or looking for a customized plan that fits real life in Horsham and the surrounding suburbs.",
      "Ask the membership team about current trainer availability and package options when you visit or contact the club. [VERIFY: trainer roster and package pricing]",
    ],
  },
  {
    title: "Sports Performance / Parisi Speed School",
    body: [
      "HAC’s sports performance offering includes Parisi Speed School — a specialized program for youth athletes and competitors who want measurable gains in speed, agility, power, and athletic movement quality.",
      "Parisi training emphasizes mechanics, acceleration, change of direction, and strength foundations that transfer to field and court sports. Athletes train in a performance-focused environment with coaching designed for long-term development, not just short-term fatigue.",
      "Families across Montgomery County and Bucks County use Parisi Speed School to prepare for seasons, improve recruiting readiness, and build durable athletic habits. [VERIFY: age groups, session schedules, and enrollment process]",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="border-b border-black/5 bg-white px-4 py-16 text-ink sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.18em] text-gold-deep uppercase">
            Programs & Services
          </p>
          <h1 className="section-title mt-3 max-w-3xl text-4xl sm:text-5xl">
            Training Built for Horsham and Beyond
          </h1>
          <p className="mt-5 max-w-3xl text-base text-ink/70 sm:text-lg">
            Horsham Athletic Club is a full-service fitness center at 400
            Horsham Road in Horsham, PA. Members come from Horsham, Hatboro,
            North Wales, Warrington, Hatfield, Doylestown, and communities
            across Montgomery County and Bucks County for gym access, classes,
            coaching, and sports performance training.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="section-title text-3xl text-ink">
              What Members Can Expect
            </h2>
            <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-slate/85">
              <p>
                Walking into HAC means stepping into a club environment designed
                for serious training and everyday wellness. Members train on a
                spacious floor with strength and cardio equipment, then recover
                in locker rooms that include sauna and steam room amenities —
                the kind of details that make a membership feel worth returning
                to day after day.
              </p>
              <p>
                Beyond equipment, members receive personalized guidance from
                staff who understand how to match goals with the right path:
                independent gym use, group fitness, personal training, or sports
                performance. The club’s affiliation with Newtown Athletic Club
                (NAC) also gives HAC members complimentary limited access to NAC
                at select times, with Camp NAC and other NAC-based youth and
                family programs available through the sister club relationship.
                [VERIFY: current NAC visit allowances and Camp NAC enrollment
                details for HAC members]
              </p>
              <p>
                Whether you live five minutes from Horsham Road or commute from
                Bucks County, HAC is built to be a reliable training home —
                open early and late on weekdays, with weekend hours that support
                real schedules.
              </p>
            </div>
          </div>

          <div className="mt-14 space-y-8">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-9"
              >
                <h2 className="section-title text-2xl text-ink sm:text-3xl">
                  {program.title}
                </h2>
                <div className="mt-5 space-y-4 text-[1.01rem] leading-relaxed text-slate/85">
                  {program.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-black/8 bg-surface px-7 py-10 text-ink sm:px-10">
            <h2 className="section-title text-2xl sm:text-3xl">
              Find the Right Program
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">
              Not sure whether to start with membership, classes, personal
              training, or Parisi Speed School? Reach out and we will help you
              choose based on your goals, schedule, and experience level.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center bg-ink px-7 py-3.5 text-sm font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-gold hover:text-ink"
            >
              Contact HAC
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
