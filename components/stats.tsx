const stats = [
  { value: "خبراء", label: "فريق متخصص في الذكاء الاصطناعي" },
  { value: "100%", label: "التزام بالجودة والمواعيد" },
  { value: "شاملة", label: "من الاستشارة للتنفيذ الكامل" },
  { value: "سعودية", label: "شركة مسجلة ونفهم السوق المحلي" },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">ليش تختار سند تكنو؟</h2>
          <p className="opacity-80">لأن نجاحك هو نجاحنا</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-3xl sm:text-4xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
