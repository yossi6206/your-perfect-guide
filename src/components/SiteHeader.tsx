import { Mail, Phone, MessageSquare, ClipboardCheck, HelpCircle, Heart, Bell } from "lucide-react";
import logo from "@/assets/livedns-logo.png";

const mainNav = [
  "אחסון אתרים",
  "שרתים וירטואליים",
  "דומיינים",
  "מיקרוסופט 365",
  "גיבוי בענן",
  "פיתוח תכונה",
  "SAAS Backup & DR",
  "שירותי מומחה",
  "כלים חינמיים",
];

export function SiteHeader() {
  return (
    <header dir="rtl" className="w-full bg-background font-sans">
      {/* Top utility bar */}
      <div className="border-b border-border">
        <div className="flex h-16 w-full items-center justify-between gap-6 px-10">
          {/* Right: Brand tagline */}
          {/* Right: Contact info */}
          <div className="flex items-center gap-5 text-[15px] text-header-brand">
            <a href="mailto:office@yositsupport.com" className="flex items-center gap-2 hover:opacity-70">
              <span>office@yositsupport.com</span>
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>

            <span className="h-5 w-px bg-border" />

            <a href="tel:02-1234567" className="flex items-center gap-2 hover:opacity-70" dir="ltr">
              <span>02-1234567</span>
              <Phone className="h-4 w-4" strokeWidth={1.5} />
            </a>

            <span className="h-5 w-px bg-border" />
          </div>

          {/* Center: Navigation */}
          <nav className="flex items-center gap-5 text-[15px] text-header-brand">
            <a href="#" className="flex items-center gap-2 hover:opacity-70">
              <span>מרכז תמיכה</span>
              <MessageSquare className="h-4 w-4" strokeWidth={1.5} />
            </a>

            <span className="h-5 w-px bg-border" />

            <a href="#" className="flex items-center gap-2 hover:opacity-70">
              <span>הזמנות</span>
              <ClipboardCheck className="h-4 w-4" strokeWidth={1.5} />
            </a>

            <span className="h-5 w-px bg-border" />

            <button className="rounded-full border border-header-brand px-5 py-1.5 font-medium transition-colors hover:bg-header-brand hover:text-background">
              מבצעים
            </button>
            <button className="rounded-full border border-header-brand px-5 py-1.5 font-medium transition-colors hover:bg-header-brand hover:text-background">
              ניהול דומיינים
            </button>
          </nav>

          {/* Left: Brand tagline */}
          <div className="text-[15px] font-medium text-header-brand whitespace-nowrap">
            אחסון אתרים ופתרונות ענן לעסקים
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div>
        <div className="flex h-20 w-full items-center justify-between gap-8 px-10">
          {/* Categories - right */}
          <nav className="flex items-center gap-7 text-[17px] text-header-brand">
            {mainNav.map((item) => (
              <a
                key={item}
                href="#"
                className="whitespace-nowrap transition-opacity hover:opacity-70"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="LiveDNS" className="h-14 w-auto" />
          </a>
        </div>
      </div>
    </header>
  );
}
