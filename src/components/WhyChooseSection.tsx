import { MessagesSquare, Award, Lightbulb, Search } from "lucide-react";

const features = [
  {
    icon: MessagesSquare,
    title: "ניסיון רב שנים",
    description:
      "חברה יציבה ואמינה עם למעלה מ-22 שנות ניסיון ומתן שירות לעשרות אלפי לקוחות מרוצים.",
  },
  {
    icon: Award,
    title: "תקנים מחמירים",
    description:
      "חברת LiveDNS בעלת תקן ISO 27001 לאבטחת מידע ותקני ISO נוספים.",
  },
  {
    icon: Lightbulb,
    title: "פתרון כולל",
    description:
      "One Stop Shop החל מדומיין, דרך אחסון אתר ושרת וירטואלי ועד לאבטחת מידע ושירותי מומחה.",
  },
  {
    icon: Search,
    title: "צוות מקצועי",
    description:
      "איתור וגיוס העובדים שלנו קפדני ביותר ואנו מעסיקים רק את המומחים ביותר בתחום.",
  },
];

export function WhyChooseSection() {
  return (
    <section dir="rtl" className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Eyebrow centered */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-header-brand" />
          <span className="text-base font-medium text-header-brand">
            למה לבחור בנו
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline centered */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl lg:text-6xl">
          אנחנו פשוט יודעים לספק תוצאות!
          <br />
          פועלים מהר, באחריות ובמחיר הוגן.
        </h2>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-card px-8 pb-10 pt-14 text-center shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] ring-1 ring-border/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.25)] hover:ring-header-brand/30"
            >
              {/* Decorative corner curve */}
              <span className="pointer-events-none absolute -top-20 right-[-30px] h-40 w-40 rounded-full bg-gradient-to-br from-header-brand/10 to-header-brand/0 transition-all duration-500 group-hover:scale-125 group-hover:from-header-brand/20" />
              <span className="pointer-events-none absolute -bottom-24 left-[-40px] h-44 w-44 rounded-full bg-header-brand/[0.04] transition-all duration-500 group-hover:bg-header-brand/[0.08]" />

              {/* Icon with glow */}
              <div className="relative mx-auto flex h-[72px] w-[72px] items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-header-brand/30 blur-xl transition-all duration-500 group-hover:bg-header-brand/50" />
                <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-gradient-to-br from-header-brand to-header-brand/80 text-background shadow-lg shadow-header-brand/40 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8" strokeWidth={2} />
                </div>
              </div>

              <h3 className="relative mt-6 text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-header-brand">
                {title}
              </h3>

              {/* Animated underline */}
              <span className="relative mx-auto mt-3 block h-px w-10 bg-header-brand/40 transition-all duration-500 group-hover:w-20 group-hover:bg-header-brand" />

              <p className="relative mt-5 text-base leading-loose text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
