import { Brain, Cpu, LineChart, MessageSquare, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "استشارات الذكاء الاصطناعي",
    description:
      "نقدم استشارات متخصصة لفهم احتياجات عملك وتحديد فرص تطبيق الذكاء الاصطناعي.",
  },
  {
    icon: Cpu,
    title: "تطوير حلول مخصصة",
    description:
      "نصمم ونبني حلول ذكاء اصطناعي مخصصة تناسب متطلبات عملك الفريدة.",
  },
  {
    icon: LineChart,
    title: "تحليل البيانات المتقدم",
    description:
      "نساعدك على استخراج رؤى قيمة من بياناتك لاتخاذ قرارات أفضل وأسرع.",
  },
  {
    icon: MessageSquare,
    title: "معالجة اللغات الطبيعية",
    description:
      "نطور أنظمة ذكية للتعامل مع النصوص والمحادثات باللغة العربية والإنجليزية.",
  },
  {
    icon: Settings,
    title: "أتمتة العمليات",
    description:
      "نساعدك على أتمتة العمليات الروتينية لزيادة الكفاءة وتقليل التكاليف.",
  },
  {
    icon: Zap,
    title: "التكامل والتنفيذ",
    description:
      "ندمج حلول الذكاء الاصطناعي بسلاسة مع أنظمتك الحالية ونضمن نجاح التنفيذ.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <span className="text-sm text-muted-foreground">ماذا نقدم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            نصمم حلولاً ذكية وليس
            <br />
            مجرد تقنيات
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            خدماتنا التقنية تغطي جميع مراحل التحول الرقمي، من الاستشارات الأولية
            إلى التنفيذ والدعم المستمر.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-4 hover:gap-3 transition-all"
              >
                اقرأ المزيد
                <svg
                  className="w-4 h-4 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
