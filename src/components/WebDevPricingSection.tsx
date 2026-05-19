import { useState } from "react";
import { Check } from "lucide-react";
import webDevImage from "@/assets/web-development.png";

type PackageType = "landing" | "business" | "ecommerce";

const packages: { id: PackageType; label: string }[] = [
  { id: "landing", label: "דף נחיתה" },
  { id: "business", label: "אתר תדמית" },
  { id: "ecommerce", label: "חנות אונליין" },
];

type Plan = {
  name: string;
  scope: string;
  tagline: string;
  price: number;
  popular?: boolean;
  features: { label: string; bold?: string }[];
};

const plansByPackage: Record<PackageType, Plan[]> = {
  landing: [
    {
      name: "Landing Pro",
      scope: "דף נחיתה מתקדם",
      tagline: "חד פעמי",
      price: 2900,
      popular: true,
      features: [
        { label: "עמודים", bold: "עד 3" },
        { label: "עיצוב מותאם אישית" },
        { label: "טופס לידים מתקדם" },
        { label: "מותאם למובייל ו-SEO" },
        { label: "חיבור ל-Analytics" },
        { label: "תמיכה לשנה" },
      ],
    },
    {
      name: "Landing Plus",
      scope: "דף נחיתה איכותי",
      tagline: "חד פעמי",
      price: 1900,
      features: [
        { label: "עמוד", bold: "1" },
        { label: "עיצוב על בסיס תבנית" },
        { label: "טופס יצירת קשר" },
        { label: "מותאם למובייל" },
        { label: "חיבור ל-Analytics" },
      ],
    },
    {
      name: "Landing Basic",
      scope: "דף נחיתה בסיסי",
      tagline: "חד פעמי",
      price: 990,
      features: [
        { label: "עמוד", bold: "1" },
        { label: "תבנית מוכנה" },
        { label: "טופס יצירת קשר" },
        { label: "מותאם למובייל" },
      ],
    },
  ],
  business: [
    {
      name: "Business Pro",
      scope: "אתר תדמית פרימיום",
      tagline: "חד פעמי",
      price: 7900,
      popular: true,
      features: [
        { label: "עמודים", bold: "עד 12" },
        { label: "עיצוב ייחודי מותאם אישית" },
        { label: "מערכת ניהול תוכן (CMS)" },
        { label: "אנימציות ואינטראקציות" },
        { label: "SEO מתקדם" },
        { label: "תמיכה לשנה" },
      ],
    },
    {
      name: "Business Plus",
      scope: "אתר תדמית סטנדרטי",
      tagline: "חד פעמי",
      price: 4900,
      features: [
        { label: "עמודים", bold: "עד 7" },
        { label: "עיצוב מותאם" },
        { label: "מערכת ניהול תוכן" },
        { label: "טופס יצירת קשר" },
        { label: "SEO בסיסי" },
      ],
    },
    {
      name: "Business Basic",
      scope: "אתר תדמית בסיסי",
      tagline: "חד פעמי",
      price: 2900,
      features: [
        { label: "עמודים", bold: "עד 4" },
        { label: "עיצוב על בסיס תבנית" },
        { label: "מערכת ניהול תוכן" },
        { label: "מותאם למובייל" },
      ],
    },
  ],
  ecommerce: [
    {
      name: "Shop Pro",
      scope: "חנות אונליין מתקדמת",
      tagline: "חד פעמי",
      price: 14900,
      popular: true,
      features: [
        { label: "מוצרים", bold: "ללא הגבלה" },
        { label: "עיצוב ייחודי מותאם אישית" },
        { label: "סליקה + חיבור לסולקים" },
        { label: "אינטגרציה למחסן ושילוח" },
        { label: "SEO ו-Analytics מתקדם" },
        { label: "תמיכה לשנה" },
      ],
    },
    {
      name: "Shop Plus",
      scope: "חנות סטנדרטית",
      tagline: "חד פעמי",
      price: 8900,
      features: [
        { label: "מוצרים", bold: "עד 200" },
        { label: "עיצוב מותאם" },
        { label: "סליקה מאובטחת" },
        { label: "ניהול הזמנות" },
        { label: "מותאם למובייל" },
      ],
    },
    {
      name: "Shop Basic",
      scope: "חנות התחלתית",
      tagline: "חד פעמי",
      price: 4900,
      features: [
        { label: "מוצרים", bold: "עד 50" },
        { label: "תבנית מוכנה" },
        { label: "סליקה מאובטחת" },
        { label: "ניהול הזמנות בסיסי" },
      ],
    },
  ],
};

export function WebDevPricingSection() {
  const [pkg, setPkg] = useState<PackageType>("business");
  const plans = plansByPackage[pkg];

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
            פיתוח אתרים
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl">
          פיתוח אתרים לעסקים
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          לאתר האינטרנט שלך מגיע רק הטוב ביותר. אנו חברת אחסון האתרים המובילה
          בארץ המאחסנת בהצלחה רבה עשרות אלפי אתרים באמינות ובמקצועיות גבוהה.
        </p>

        {/* Illustration */}
        <div className="mt-10 flex justify-center">
          <img
            src={webDevImage}
            alt="פיתוח אתרים"
            loading="lazy"
            width={1280}
            height={1024}
            className="h-auto w-full max-w-md"
          />
        </div>

        {/* Package toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            {packages.map((p) => (
              <button
                key={p.id}
                onClick={() => setPkg(p.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  pkg === p.id
                    ? "bg-header-brand text-background shadow-md"
                    : "text-muted-foreground hover:text-header-brand"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={`${pkg}-${idx}`}
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
                  {plan.scope} · {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-2 text-right">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  ₪{plan.price.toLocaleString()}
                </span>
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
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          כל המחירים הנקובים לפני מע"מ · המחיר הסופי בהתאם לאפיון הפרויקט
        </p>
      </div>
    </section>
  );
}
