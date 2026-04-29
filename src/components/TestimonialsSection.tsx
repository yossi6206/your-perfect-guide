import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  initial: string;
  text: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "תומר דורי",
    initial: "ת",
    color: "#c46cf2",
    text: "אם הייתה אפשרות, הייתי מסמן גם 10 כוכבים. אני עובד איתם צמוד מאוד ובצורה שוטפת. שירות מהיר, אדיב והכי חשוב מאוד מקצועי. כל בקשה קטנה מקבלת יחס. ממליץ בחום ומכל הלב.",
  },
  {
    name: "Ran Green",
    initial: "R",
    color: "#28c4f0",
    text: "מקצוענים מספר 1 בארץ , מקבל מהם שירות יוצא מן הכלל. גיבויים והכל לאחר שפרצו לי למחשב, לרמה שלא יכולתי לעבוד איתו. והיום איזה יופי הכל חזר, גם פייסבוק שלי. תודה לכם.",
  },
  {
    name: "ליאורה זכאי",
    initial: "ל",
    color: "#f4632a",
    text: "יותר מ 20 שנה אני אתכם, מעולם לא איכזבתם, מעולם לא ניתקלתי בחוסר נכונות לעזור - שמרתם על איכות ושירות ברמה בינלאומית !!! אין לכם דומה כאן בארץ. תודה על הכל.",
  },
  {
    name: "אדי סוברי",
    initial: "א",
    color: "#ec3b7e",
    text: "אני מאוד מרוצה מההחלטה לעבוד עם LIVEDNS - ויש לי ניסיון בעבודה עם הרבה חוות שרתים. אני מקבל שירות מהיר, מענה מקצועי ולא אחת - הרבה מעבר למה שאני משלם עבורו או מצפה לקבל.",
  },
];

export function TestimonialsSection() {
  return (
    <section
      dir="rtl"
      className="relative w-full overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-header-brand" />
          <span className="text-base font-medium text-header-brand">
            המלצות
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl">
          המלצות אמיתיות מהלקוחות שלנו
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative flex gap-5 rounded-2xl border border-header-brand/15 bg-card p-8 shadow-[0_4px_20px_-8px_rgba(37,99,235,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-header-brand/40 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.2)]"
            >
              {/* Avatar circle */}
              <div className="relative flex-shrink-0">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white shadow-lg"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initial}
                </div>
                {/* Quote bubble */}
                <div
                  className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-white shadow-md"
                  style={{ backgroundColor: t.color }}
                >
                  <Quote className="h-3 w-3 rotate-180" fill="currentColor" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-right">
                <h3 className="text-xl font-semibold text-foreground">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>

                {/* Stars */}
                <div className="mt-5 flex justify-start gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
