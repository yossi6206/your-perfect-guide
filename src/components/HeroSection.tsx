import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-expert.png";
import wordpressImg from "@/assets/hosting-wordpress.png";
import codeImg from "@/assets/hosting-code.png";
import securityImg from "@/assets/security.png";
import featureDevImg from "@/assets/feature-development.png";
import webDevHeroImg from "@/assets/hero-webdev.png";
import { ContactDialog } from "@/components/ContactDialog";

type Slide = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    title: "שירותי מומחה",
    description:
      "צוות מומחי ה-System שלו עומדים לרשות לקוחותינו למתן ייעוץ,\nיישום ותחזוקת פתרונות IT כוללים להם נדרשים העסקים\nבפעילותם השוטפת והכל בהתאמה אישית.",
    image: heroImage,
    alt: "שירותי מומחה - צוות System",
  },
  {
    title: "גיבוי",
    description:
      "לאתר האינטרנט שלך מגיע רק הטוב ביותר. אנו חברת אחסון\nהאתרים המובילה בארץ המאחסנת בהצלחה רבה עשרות אלפי\nאתרים באמינות ובמקצועיות גבוהה.",
    image: wordpressImg,
    alt: "גיבוי",
  },
  {
    title: "אחסון אתרים בקוד",
    description:
      "פריסה ישירה מ-Git, סביבת Edge מהירה ו-SSL מנוהל אוטומטית.\nPreview Deployments לכל PR ו-Rollback בלחיצה אחת —\nכל מה שצריך כדי להעלות את האתר לאוויר ללא דאגות.",
    image: codeImg,
    alt: "אחסון אתרים בקוד",
  },
  {
    title: "אבטחת מידע",
    description:
      "צוותי אבטחת המידע שלנו עומדים לרשותך עם פתרונות מתקדמים\nלהגנה על האתר והדאטה. מבדקי חדירות, EDR, אנטי וירוס\nוניטור 24/7 שמבטיחים שקט נפשי מלא לעסק.",
    image: securityImg,
    alt: "אבטחת מידע",
  },
  {
    title: "פיתוח אתרים",
    description:
      "צוות הפיתוח שלנו בונה אתרים מותאמים אישית לעסק שלך —\nמדפי נחיתה ואתרי תדמית ועד חנויות אונליין מתקדמות.\nעיצוב ייחודי, ביצועים מהירים והתאמה מלאה למובייל.",
    image: webDevHeroImg,
    alt: "פיתוח אתרים",
  },
  {
    title: "פיתוח תכונה",
    description:
      "צוות הפיתוח שלנו בונה עבורך תכונות מותאמות אישית לאתר\nולמערכת הניהול. מאפיון ועיצוב ועד פיתוח, בדיקות והעלאה\nלאוויר — בליווי מקצועי לאורך כל שלבי הפרויקט.",
    image: featureDevImg,
    alt: "פיתוח תכונה",
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [active]);

  const next = () => setActive((p) => (p + 1) % slides.length);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const current = slides[active];

  return (
    <section dir="rtl" className="relative w-full bg-background py-12 md:py-20">
      <div className="mx-auto flex max-w-[1400px] items-center gap-10 px-6">
        {/* Right arrow (previous in RTL) */}
        <button
          onClick={prev}
          aria-label="הקודם"
          className="hidden flex-shrink-0 text-header-brand/40 transition-colors hover:text-header-brand md:block"
        >
          <ChevronRight className="h-10 w-10" strokeWidth={1.5} />
        </button>

        <div className="flex flex-1 flex-col items-center gap-8 md:flex-row md:gap-12">
          {/* Text - right (first in RTL DOM) */}
          <div className="flex-1 text-right">
            <div key={`text-${active}`} className="animate-in fade-in slide-in-from-right-6 duration-500">
              <h1 className="text-5xl font-light text-header-brand md:text-6xl lg:text-7xl">
                {current.title}
              </h1>

              <p className="mt-6 whitespace-pre-line text-lg leading-loose text-foreground/80 md:text-xl">
                {current.description}
              </p>
            </div>

            <div className="mt-10 flex justify-start gap-4">
              <ContactDialog>
                <button className="group inline-flex items-center gap-3 rounded-full border border-header-brand px-8 py-3 text-base font-medium text-header-brand transition-colors hover:bg-header-brand hover:text-background">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  <span>יצירת קשר</span>
                </button>
              </ContactDialog>
              <button className="group inline-flex items-center gap-3 rounded-full border border-header-brand px-8 py-3 text-base font-medium text-header-brand transition-colors hover:bg-header-brand hover:text-background">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span>קרא/י עוד</span>
              </button>
            </div>

            {/* Dots */}
            <div className="mt-8 flex items-center gap-3">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={s.title}
                  className={`h-2 rounded-full transition-all ${
                    i === active
                      ? "w-10 bg-header-brand"
                      : "w-2 bg-header-brand/30 hover:bg-header-brand/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Illustration - left (second in RTL DOM) */}
          <div className="flex-1">
            <img
              key={`img-${active}`}
              src={current.image}
              alt={current.alt}
              className="h-auto w-full max-w-[920px] animate-in fade-in zoom-in-95 duration-700"
              width={1280}
              height={1024}
            />
          </div>
        </div>

        {/* Left arrow (next in RTL) */}
        <button
          onClick={next}
          aria-label="הבא"
          className="hidden flex-shrink-0 text-header-brand/40 transition-colors hover:text-header-brand md:block"
        >
          <ChevronLeft className="h-10 w-10" strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
