import { Brain, Cpu, LineChart, MessageSquare, Settings, Zap } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const services = [
  {
    icon: Brain,
    title: "استشارات الذكاء الاصطناعي",
    description:
      "نحلل وضع شركتك الحالي ونحدد الفرص اللي يقدر الذكاء الاصطناعي يضيف لها قيمة حقيقية لأعمالك.",
  },
  {
    icon: Cpu,
    title: "بناء استراتيجية AI",
    description:
      "نبني لك خارطة طريق واضحة لدمج الذكاء الاصطناعي، مصممة حسب احتياجات شركتك وميزانيتك.",
  },
  {
    icon: Settings,
    title: "تطوير حلول مخصصة",
    description:
      "فريقنا التقني يصمم ويبني حلول ذكاء اصطناعي مخصصة تناسب طبيعة عملك ومتطلباتك.",
  },
  {
    icon: Zap,
    title: "أتمتة العمليات",
    description:
      "نساعدك تأتمت العمليات الروتينية باستخدام الذكاء الاصطناعي عشان توفر وقت وتكاليف.",
  },
  {
    icon: LineChart,
    title: "تحليل البيانات الذكي",
    description:
      "نحول بياناتك لرؤى قيمة تساعدك تاخذ قرارات أفضل وأسرع باستخدام تقنيات AI متقدمة.",
  },
  {
    icon: MessageSquare,
    title: "التكامل والدعم الفني",
    description:
      "ندمج حلول الذكاء الاصطناعي مع أنظمتك الحالية بسلاسة، ونقدم دعم فني مستمر بعد التنفيذ.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">خدماتنا</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              حلول ذكية مبنية على
              <br />
              خبرة حقيقية
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نغطي كل مراحل رحلتك مع الذكاء الاصطناعي، من أول استشارة لين
              التطبيق الكامل والدعم المستمر.
            </p>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d h-full">
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
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground mt-4 hover:gap-3 transition-all"
                >
                  تعرف أكثر
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
