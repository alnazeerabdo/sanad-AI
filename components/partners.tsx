export default function Partners() {
  const partners = [
    "أرامكو",
    "سابك",
    "الراجحي",
    "stc",
    "نيوم",
    "الخطوط السعودية",
  ];

  return (
    <section className="py-12 border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xl font-semibold">{partner}</span>
              {index < partners.length - 1 && (
                <span className="hidden md:inline text-border mx-4">+</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
