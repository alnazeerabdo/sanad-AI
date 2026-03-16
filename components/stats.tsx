const stats = [
  { value: "+150", label: "عميل راضٍ" },
  { value: "+200", label: "مشروع منجز" },
  { value: "98%", label: "نسبة النجاح" },
  { value: "+50", label: "خبير متخصص" },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl sm:text-5xl font-bold">{stat.value}</p>
              <p className="text-sm opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
