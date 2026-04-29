import iso27001 from "@/assets/iso-27001.png";
import iso27017 from "@/assets/iso-27017.png";
import iso27018 from "@/assets/iso-27018.png";
import iso27799 from "@/assets/iso-27799.png";

const certificates = [
  { src: iso27001, alt: "ISO 27001" },
  { src: iso27017, alt: "ISO 27017" },
  { src: iso27018, alt: "ISO 27018" },
  { src: iso27799, alt: "ISO 27799" },
];

const partners = [
  "Microsoft",
  "Cisco",
  "VMware",
  "Cloudflare",
  "Intel",
  "Dell",
  "HP",
  "Veeam",
];

export function CertificatesSection() {
  return (
    <section dir="rtl" className="w-full bg-background py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Title */}
        <h2 className="text-center text-4xl font-light text-foreground/70 md:text-5xl">
          Standards & Certificates
        </h2>

        {/* ISO badges */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4">
          {certificates.map((cert) => (
            <img
              key={cert.alt}
              src={cert.src}
              alt={cert.alt}
              loading="lazy"
              width={512}
              height={512}
              className="h-36 w-36 object-contain transition-transform duration-300 hover:scale-105 md:h-44 md:w-44"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-border" />
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            השותפים שלנו
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Partner logos */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-16 w-full items-center justify-center rounded-lg px-3 text-center text-xl font-semibold tracking-tight text-muted-foreground/70 transition-all duration-300 hover:scale-105 hover:text-header-brand"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
