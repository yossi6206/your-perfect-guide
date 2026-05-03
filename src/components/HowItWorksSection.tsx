import { MonitorCheck, Users, Globe, Settings2, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  position: "down" | "up";
};

const steps: Step[] = [
  {
    number: "01",
    icon: MonitorCheck,
    title: "בחירת שירות מתאים",
    description:
      "בחר/י ממגוון השירותים המקצועיים שיש לנו להציע לעסקים.",
    position: "down",
  },
  {
    number: "02",
    icon: Users,
    title: "שיחה עם נציג",
    description:
      "שוחח/י עם נציג מומחה ללא עלות לאפיון הצרכים שלך.",
    position: "up",
  },
  {
    number: "03",
    icon: Globe,
    title: "קבלת הצעה מצוינת",
    description:
      "נכין עבורך הצעת מחיר אישית והוגנת התפורה בדיוק עבורך.",
    position: "down",
  },
  {
    number: "04",
    icon: Settings2,
    title: "נגרום לזה לקרות",
    description:
      "צוות המקצוענים שלנו יספק לך את השירות באדיבות יתרה.",
    position: "up",
  },
];

export function HowItWorksSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-gradient-to-b from-background to-header-brand/[0.04] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-header-brand" />
          <span className="text-base font-medium text-header-brand">
            איך זה עובד
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl">
          מתודולוגית העבודה שלנו
          <br />
          מוכיחה את עצמה
        </h2>

        {/* Steps timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl">
          {/* Decorative wavy dashed line - desktop only */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-40 w-full -translate-y-1/2 lg:block"
            viewBox="0 0 1200 200"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 50 100 Q 200 20, 350 100 T 650 100 T 950 100 T 1150 100"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 8"
              className="text-header-brand/30"
              fill="none"
            />
          </svg>

          {/* Steps grid - rendered LTR (1->4) so RTL flips to (4->1 visual: 04 left, 01 right) */}
          <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ number, icon: Icon, title, description, position }) => (
              <div
                key={number}
                className={`flex flex-col items-center text-center lg:${
                  position === "up" ? "mt-0" : "mt-32"
                }`}
              >
                {/* Circle with icon and number badge */}
                <div className="relative">
                  {/* Soft outer halo */}
                  <span className="absolute inset-0 -m-3 rounded-full bg-header-brand/10 blur-xl" />

                  {/* Main circle */}
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-header-brand/15 to-header-brand/5 ring-1 ring-header-brand/20 transition-transform duration-500 hover:scale-105">
                    <Icon className="h-12 w-12 text-header-brand" strokeWidth={1.5} />
                  </div>

                  {/* Number badge top-left */}
                  <span className="absolute -top-2 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-background text-sm font-bold text-header-brand shadow-md ring-1 ring-header-brand/15">
                    {number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="mt-10 text-2xl font-medium text-foreground/85">
                  {title}
                </h3>
                <p className="mt-5 max-w-xs text-base leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
