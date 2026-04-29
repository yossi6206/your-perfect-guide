import { useState } from "react";
import { Check } from "lucide-react";

type Workload = "perWorkload" | "perVM" | "perServer";

const workloads: { id: Workload; label: string }[] = [
  { id: "perWorkload", label: "Per Workload" },
  { id: "perVM", label: "Per VM" },
  { id: "perServer", label: "Per Server" },
];

type Plan = {
  name: string;
  storage: string;
  tagline: string;
  price: number;
  popular?: boolean;
  features: { label: string; bold?: string }[];
};

const plansByWorkload: Record<Workload, Plan[]> = {
  perWorkload: [
    {
      name: "Veeam Backup",
      storage: "1,500GB",
      tagline: "חודשי מתחדש",
      price: 153,
      popular: true,
      features: [
        { label: "נפח גיבוי", bold: "1,500GB" },
        { label: "מחשבים", bold: "עד 8" },
        { label: "שרתים וירטואליים", bold: "עד 2" },
        { label: "ללא מובייל" },
        { label: "ללא מיקרוסופט 365" },
        { label: "Veeam Cloud Storage" },
      ],
    },
    {
      name: "Veeam Backup",
      storage: "1000GB",
      tagline: "חודשי מתחדש",
      price: 82,
      features: [
        { label: "נפח גיבוי", bold: "1,000GB" },
        { label: "מחשבים", bold: "עד 4" },
        { label: "ללא שרתים" },
        { label: "ללא מובייל" },
        { label: "ללא מיקרוסופט 365" },
        { label: "Veeam Cloud Storage" },
      ],
    },
    {
      name: "Veeam Backup",
      storage: "500GB",
      tagline: "חודשי מתחדש",
      price: 44,
      features: [
        { label: "נפח גיבוי", bold: "500GB" },
        { label: "מחשבים", bold: "עד 2" },
        { label: "ללא שרתים" },
        { label: "ללא מובייל" },
        { label: "ללא מיקרוסופט 365" },
        { label: "Veeam Cloud Storage" },
      ],
    },
  ],
  perVM: [
    {
      name: "Veeam Backup VM",
      storage: "1,500GB",
      tagline: "חודשי מתחדש",
      price: 175,
      popular: true,
      features: [
        { label: "נפח גיבוי", bold: "1,500GB" },
        { label: "VMs", bold: "עד 5" },
        { label: "Image-Level Backup" },
        { label: "Instant VM Recovery" },
        { label: "Veeam Cloud Storage" },
        { label: "תמיכה 24/7" },
      ],
    },
    {
      name: "Veeam Backup VM",
      storage: "1000GB",
      tagline: "חודשי מתחדש",
      price: 99,
      features: [
        { label: "נפח גיבוי", bold: "1,000GB" },
        { label: "VMs", bold: "עד 3" },
        { label: "Image-Level Backup" },
        { label: "Instant VM Recovery" },
        { label: "Veeam Cloud Storage" },
      ],
    },
    {
      name: "Veeam Backup VM",
      storage: "500GB",
      tagline: "חודשי מתחדש",
      price: 55,
      features: [
        { label: "נפח גיבוי", bold: "500GB" },
        { label: "VMs", bold: "עד 1" },
        { label: "Image-Level Backup" },
        { label: "File-Level Recovery" },
        { label: "Veeam Cloud Storage" },
      ],
    },
  ],
  perServer: [
    {
      name: "Veeam Server",
      storage: "1,500GB",
      tagline: "חודשי מתחדש",
      price: 210,
      popular: true,
      features: [
        { label: "נפח גיבוי", bold: "1,500GB" },
        { label: "שרתים פיזיים", bold: "עד 3" },
        { label: "Application-Aware Backup" },
        { label: "Bare-Metal Recovery" },
        { label: "Veeam Cloud Storage" },
        { label: "תמיכה 24/7" },
      ],
    },
    {
      name: "Veeam Server",
      storage: "1000GB",
      tagline: "חודשי מתחדש",
      price: 125,
      features: [
        { label: "נפח גיבוי", bold: "1,000GB" },
        { label: "שרתים פיזיים", bold: "עד 2" },
        { label: "Application-Aware Backup" },
        { label: "Bare-Metal Recovery" },
        { label: "Veeam Cloud Storage" },
      ],
    },
    {
      name: "Veeam Server",
      storage: "500GB",
      tagline: "חודשי מתחדש",
      price: 70,
      features: [
        { label: "נפח גיבוי", bold: "500GB" },
        { label: "שרתים פיזיים", bold: "עד 1" },
        { label: "File-Level Recovery" },
        { label: "Daily Backup" },
        { label: "Veeam Cloud Storage" },
      ],
    },
  ],
};

export function BackupPricingSection() {
  const [workload, setWorkload] = useState<Workload>("perWorkload");
  const plans = plansByWorkload[workload];

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
            גיבוי בענן
          </span>
          <span className="h-px w-16 bg-header-brand" />
        </div>

        {/* Headline */}
        <h2 className="mt-6 text-center text-4xl font-light leading-tight text-foreground/80 md:text-5xl">
          גיבויי Veeam לעסקים
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-muted-foreground">
          בחר/י את התוכנית שמתאימה לך. ללא עלויות נסתרות, אפשר לשנות בכל רגע.
        </p>

        {/* Workload toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            {workloads.map((w) => (
              <button
                key={w.id}
                onClick={() => setWorkload(w.id)}
                className={`relative rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  workload === w.id
                    ? "bg-header-brand text-background shadow-md"
                    : "text-muted-foreground hover:text-header-brand"
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={`${workload}-${idx}`}
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
                  {plan.name} {plan.storage}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mt-8 flex items-baseline gap-2 text-right">
                <span className="text-5xl font-bold tracking-tight text-foreground">
                  ${plan.price}
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
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          כל המחירים הנקובים לפני מע"מ · התחייבות בהתאם לתקופת ההזמנה
        </p>
      </div>
    </section>
  );
}
