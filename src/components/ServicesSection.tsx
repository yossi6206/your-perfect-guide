import {
  MessageSquare,
  ShieldCheck,
  Gauge,
  MousePointerClick,
  CircleDot,
  Settings,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: MessageSquare,
    title: "דומיינים",
    description:
      "כרשם הדומיינים המוסמך הגדול בישראל נספק לך שירותי רישום, חידוש וניהול דומיינים במאות סיומות.",
  },
  {
    icon: ShieldCheck,
    title: "שרתים וירטואליים",
    description:
      "סביבת הענן שלנו בישראל תבטיח לך שרידות וזמינות מקסימלית והכל בתצורה מנוהלת על ידי מומחים.",
  },
  {
    icon: Gauge,
    title: "אחסון אתרים",
    description:
      "חברת אחסון אתרים ישראלית מובילה המאחסנת עשרות אלפי אתרים בזמינות גבוהה במיוחד ובמקצועיות.",
  },
  {
    icon: MousePointerClick,
    title: "שירותי מומחה",
    description:
      "צוותי הסיסטם ומומחי אבטחת המידע שלנו עומדים לשירותך לכל נושאי ה-IT להם נדרש הארגון שלך.",
  },
  {
    icon: CircleDot,
    title: "פיתוח תכונה",
    description:
      "צוות הפיתוח שלנו בונה עבורך תכונות מותאמות אישית לאתר ולמערכת — מאפיון ועיצוב ועד פיתוח, בדיקות והעלאה לאוויר.",
  },
  {
    icon: Settings,
    title: "גיבוי בענן",
    description:
      "המידע שלך יקר. באמצעות Acronis העסק ייהנה מיכולות גיבוי משופרות עם הגנת סייבר לכל הדאטה.",
  },
];

export function ServicesSection() {
  return (
    <section
      dir="rtl"
      className="w-full bg-gradient-to-b from-header-brand/[0.04] to-background py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-header-brand" />
          <span className="text-base font-medium text-header-brand">
            השירותים שלנו
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl lg:text-[3.25rem]">
          הכיסוי המלא ביותר לאחסון אתרים,
          <br />
          שרת וירטואלי, גיבוי בענן ושירותי מומחה
        </h2>

        {/* Cards grid */}
        <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-header-brand/15 bg-card px-8 pb-10 pt-16 text-center shadow-[0_4px_20px_-8px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-header-brand/40 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.25)]"
            >
              {/* Icon with ring */}
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                {/* Outer ring (3/4 circle) */}
                <svg
                  viewBox="0 0 80 80"
                  className="absolute inset-0 h-full w-full text-header-brand/40 transition-transform duration-700 group-hover:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M 40 4 A 36 36 0 1 1 14 65" />
                </svg>

                {/* Inner solid circle with icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-header-brand to-header-brand/85 text-background shadow-md shadow-header-brand/40 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-header-brand">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
