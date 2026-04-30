import { Phone, Linkedin, Facebook, ArrowUp } from "lucide-react";
import logo from "@/assets/livedns-logo.png";

type Column = {
  title: string;
  links: string[];
  subTitle?: string;
  subLinks?: string[];
};

const columns: Column[] = [
  {
    title: "אחסון אתרים",
    links: [
      "אחסון Linux",
      "אחסון WordPress",
      "אחסון WooCommerce",
      "אחסון Windows 2012",
      "אחסון Windows 2019",
      "אחסון Reseller Linux",
      "אחסון Reseller Windows",
    ],
    subTitle: "שרתים וירטואליים",
    subLinks: ["שרת וירטואלי Linux VPS", "שרת וירטואלי Windows VPS", "מחשוב ענן"],
  },
  {
    title: "דומיינים",
    links: [
      "דומיין ישראלי",
      "דומיין בעברית",
      "דומיין בסיומות חדשות",
      "דומיין בינלאומי",
      "רשם מוסמך",
      "תוכנית שותפים",
      "העברת דומיין",
      "אבטחת דומיין",
    ],
  },
  {
    title: "שירותי מומחה",
    links: [
      "מומחי Cloud & System",
      "פתרונות Cloudflare",
      "תעודות SSL",
      "Safetica DLP",
      "ESET אנטי וירוס",
      "SentinelOne EDR",
      "מבדקי חדירות PT",
      "הנגשת אתרים",
      "הקשחת אתרי וורדפרס",
      "עדכון אתרי WordPress",
    ],
  },
  {
    title: "גיבוי בענן",
    links: ["Acronis", "Acronis MSP", "פתרון DR", "LiveBackup", "LiveBackup MSP"],
    subTitle: "מיקרוסופט 365",
    subLinks: ["Microsoft 365 (Office)", "M365 Business Standard", "גיבוי M365"],
  },
  {
    title: "אודותינו",
    links: [
      "אודות",
      "דרושים",
      "תמיכה טכנית",
      "מרכז מידע טכני",
      "פתיחת קריאת שירות",
      "הורדות מומלצות",
      "צור קשר",
      "הסכם קבלת שירותים",
      "הסכם רישום דומיינים",
      "מדיניות פרטיות",
      "הצהרת נגישות",
    ],
  },
];

export function SiteFooter() {
  return (
    <footer dir="rtl" className="relative w-full bg-header-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title} className="text-right">
              <h3 className="text-base font-bold">{col.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              {col.subTitle && (
                <>
                  <h4 className="mt-6 text-base font-bold">{col.subTitle}</h4>
                  <ul className="mt-4 space-y-2 text-sm text-white/85">
                    {col.subLinks?.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/20" />

        {/* Tools row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/85">
          <span>130 כלים לבוני אתרים, אנשי SEO, מעצבים</span>
          <span className="text-white/40">|</span>
          <a href="#" className="hover:text-white">
            כלי לביצוע Whois + Lookup
          </a>
          <span className="text-white/40">|</span>
          <a href="#" className="hover:text-white">
            כלי לבדיקת תקינות DNS
          </a>
          <span className="text-white/40">|</span>
          <a href="#" className="hover:text-white">
            כלי לביצוע Dig
          </a>
          <span className="text-white/40">|</span>
          <a href="#" className="hover:text-white">
            אלי סאסי
          </a>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo + socials */}
          <div className="flex items-center gap-6">
            <img src={logo} alt="LiveDNS" className="h-12 w-auto brightness-0 invert" />
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                aria-label="Phone"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/85">
            © כל הזכויות שמורות ל
            <a
              href="https://ittsupport.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white"
            >
              ittsupport.co.il
            </a>
          </p>

          {/* Certifications */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-white/20 text-[10px] font-bold">
                ✦
              </div>
              <div className="text-right leading-tight">
                <div className="text-sm font-bold">RIPE NCC</div>
                <div className="text-[10px] text-white/70">Member</div>
              </div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/40 bg-white/10 text-[10px] font-semibold">
              ישראלי
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-header-brand bg-background text-header-brand shadow-lg transition-all hover:scale-110"
        aria-label="חזרה למעלה"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
