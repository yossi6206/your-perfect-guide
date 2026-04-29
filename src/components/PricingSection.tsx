import { useState } from "react";
import { Check } from "lucide-react";

type Period = "monthly" | "yearly" | "biennial" | "triennial";

const periods: { id: Period; label: string; multiplier: number }[] = [
  { id: "monthly", label: "חודשי", multiplier: 1 },
  { id: "yearly", label: "שנתי", multiplier: 0.85 },
  { id: "biennial", label: "דו-שנתי", multiplier: 0.75 },
  { id: "triennial", label: "תלת-שנתי", multiplier: 0.65 },
];

type Plan = {
  name: string;
  tagline: string;
  basePrice: number;
  popular?: boolean;
  features: { label: string; bold?: string }[];
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "מושלם לפרויקטים אישיים ואתרי תדמית",
    basePrice: 36,
    features: [
      { label: "פריסה אוטומטית", bold: "מ-Git" },
      { label: "פרויקט אחד פעיל" },
      { label: "פריסות חודש", bold: "100" },
      { label: "Edge Network עולמי", bold: "CDN -" },
      { label: "מנוהל אוטומטי", bold: "SSL/HTTPS" },
      { label: "תעבורה חודשית", bold: "100GB" },
      { label: "Build Minutes חודשי", bold: "300" },
      { label: "תמיכה בקהילה" },
      { label: "Preview Deployments לכל PR" },
      { label: "Rollback בלחיצה" },
    ],
  },
  {
    name: "Pro",
    tagline: "לצוותי פיתוח ועסקים שצומחים",
    basePrice: 52,
    popular: true,
    features: [
      { label: "פריסה אוטומטית", bold: "מ-Git" },
      { label: "פרויקטים פעילים", bold: "10" },
      { label: "פריסות", bold: "ללא הגבלה" },
      { label: "Edge Functions + ISR" },
      { label: "Custom Domains", bold: "ללא הגבלה" },
      { label: "תעבורה חודשית", bold: "1TB" },
      { label: "Build Minutes חודשי", bold: "3000" },
      { label: "Analytics & Web Vitals" },
      { label: "Password Protection לסביבות" },
      { label: "תמיכה במייל בעדיפות" },
    ],
  },
  {
    name: "Business",
    tagline: "לארגונים עם עומסי תנועה גבוהים",
    basePrice: 65,
    features: [
      { label: "כל מה שב-Pro, ובנוסף:" },
      { label: "פרויקטים", bold: "ללא הגבלה" },
      { label: "Concurrent Builds", bold: "20" },
      { label: "תעבורה חודשית", bold: "5TB" },
      { label: "Build Minutes חודשי", bold: "10,000" },
      { label: "DDoS Protection מתקדם" },
      { label: "SSO & SAML Authentication" },
      { label: "Audit Logs ו-Compliance" },
      { label: "SLA של 99.99% זמינות" },
      { label: "תמיכת Premium 24/7" },
    ],
  },
];

export function PricingSection() {
  const [period, setPeriod] = useState<Period>("monthly");
  const multiplier = periods.find((p) => p.id === period)?.multiplier ?? 1;

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
            התוכניות שלנו
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl">
          תוכניות אחסון אתרים
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          בחר/י את התוכנית שמתאימה לך. ללא עלויות נסתרות, אפשר לשנות בכל רגע.
        </p>

        {/* Period toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            {periods.map((p) => (
              <button
                key={p.id}
                onClick={() => setPeriod(p.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  period === p.id
                    ? "bg-header-brand text-background shadow-md"
                    : "text-muted-foreground hover:text-header-brand"
                }`}
              >
                {p.label}
                {p.id !== "monthly" && period !== p.id && (
                  <span className="mr-2 text-[10px] font-semibold text-header-brand">
                    -{Math.round((1 - p.multiplier) * 100)}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const price = Math.round(plan.basePrice * multiplier);
            return (
              <div
                key={plan.name}
                className={`group relative rounded-2xl border p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-header-brand/60 bg-card shadow-[0_24px_50px_-12px_rgba(37,99,235,0.25)] md:-translate-y-3"
                    : "border-header-brand/15 bg-card shadow-[0_4px_20px_-8px_rgba(37,99,235,0.15)] hover:-translate-y-1 hover:border-header-brand/40 hover:shadow-[0_24px_50px_-12px_rgba(37,99,235,0.2)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-header-brand px-3 py-1 text-xs font-semibold text-background shadow-md">
                    הכי פופולרי
                  </span>
                )}

                {/* Header */}
                <div className="text-right">
                  <h3 className="text-2xl font-semibold tracking-tight text-header-brand">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price */}
                <div className="mt-8 flex items-baseline gap-2 text-right">
                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    ₪{price}
                  </span>
                  <span className="text-sm text-muted-foreground">/ חודש</span>
                </div>

                {/* CTA */}
                <button
                  className={`mt-6 w-full rounded-lg py-3 text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-header-brand text-background hover:opacity-90"
                      : "border border-header-brand/40 bg-background text-header-brand hover:bg-header-brand hover:text-background"
                  }`}
                >
                  הזמן/י כעת
                </button>

                {/* Divider */}
                <div className="my-7 h-px bg-border" />

                {/* Features */}
                <ul className="space-y-3 text-right text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-header-brand"
                        strokeWidth={2.5}
                      />
                      <span className="text-foreground/80">
                        {feature.bold && (
                          <strong className="font-semibold text-foreground">
                            {feature.bold}{" "}
                          </strong>
                        )}
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          כל המחירים הנקובים לפני מע"מ · התחייבות בהתאם לתקופת ההזמנה
        </p>
      </div>
    </section>
  );
}
