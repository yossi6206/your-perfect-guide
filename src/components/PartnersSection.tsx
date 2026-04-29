const partners = [
  { name: "CYREBRO", className: "font-black tracking-wider" },
  { name: "vicarius", className: "font-bold italic tracking-tight" },
  { name: "cPanel®", className: "font-bold italic" },
  { name: "plesk", className: "font-light tracking-wide" },
  { name: "SentinelOne", className: "font-medium tracking-tight" },
  { name: "Microsoft", className: "font-normal" },
];

export function PartnersSection() {
  return (
    <section dir="rtl" className="w-full bg-background py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          הטכנולוגיות שלנו
        </p>

        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`text-2xl text-muted-foreground/60 transition-all duration-300 hover:scale-105 hover:text-foreground md:text-3xl ${partner.className}`}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
