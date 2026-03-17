"use client";

const steps = [
  {
    number: "01",
    title: "الاكتشاف والتحليل",
    description:
      "نبدأ بجلسة تعارف نفهم فيها طبيعة شغلك، التحديات اللي تواجهك، وأهدافك. نحلل العمليات عندك ونحدد وين يقدر الذكاء الاصطناعي يضيف قيمة حقيقية.",
    rotation: "rotate-[-8deg]",
  },
  {
    number: "02",
    title: "بناء الاستراتيجية",
    description:
      "نصمم لك خطة واضحة ومفصلة لدمج الذكاء الاصطناعي في أعمالك، مع تحديد الأولويات والميزانية والجدول الزمني.",
    rotation: "rotate-[4deg]",
  },
  {
    number: "03",
    title: "التنفيذ والتطوير",
    description:
      "فريقنا التقني يبدأ بتنفيذ الخطة خطوة بخطوة، مع اختبارات مستمرة ومتابعة دقيقة عشان نضمن جودة النتائج.",
    rotation: "rotate-[-4deg]",
  },
  {
    number: "04",
    title: "الإطلاق والدعم",
    description:
      "نطلق الحل في بيئة عملك مع تدريب شامل لفريقك، وندعمك بعد الإطلاق عشان نتأكد إن كل شي يشتغل تمام.",
    rotation: "rotate-[8deg]",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <span className="text-sm text-muted-foreground">كيف نشتغل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance max-w-xl">
            رحلتك معنا واضحة
            <br />
            من البداية للنهاية
          </h2>
          <p className="text-muted-foreground max-w-lg">
            نمشي معك في كل خطوة، من فهم احتياجاتك لين ما نشوف النتائج
            الحقيقية في أعمالك.
          </p>
        </div>

        {/* Process Steps - Tilted Cards */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 right-0 left-0 h-0.5 bg-border hidden lg:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative ${step.rotation} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="bg-card rounded-2xl border border-border p-6 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <span className="text-5xl font-bold text-muted-foreground/30">
                    {step.number}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Corner Decoration */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-border rounded-tl" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-border rounded-br" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16">
            <p className="text-xl font-semibold text-foreground">
              مستعدين ننطلق معك! 🚀
            </p>
            <svg
              className="w-32 h-8 mx-auto mt-2 text-muted-foreground"
              viewBox="0 0 120 30"
              fill="none"
            >
              <path
                d="M10 15 Q60 30 110 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
