import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Brain, Cpu, LineChart, MessageSquare, Settings, Zap, ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const services = [
  {
    icon: Brain,
    title: "استشارات الذكاء الاصطناعي",
    description: "نحلل وضع شركتك الحالي ونحدد الفرص اللي يقدر الذكاء الاصطناعي يضيف لها قيمة حقيقية لأعمالك.",
    features: ["تقييم شامل للعمليات", "تحديد الفرص والمخاطر", "تقرير مفصل مع توصيات"],
  },
  {
    icon: Cpu,
    title: "بناء استراتيجية AI",
    description: "نبني لك خارطة طريق واضحة لدمج الذكاء الاصطناعي، مصممة حسب احتياجات شركتك وميزانيتك.",
    features: ["خارطة طريق واضحة وقابلة للتنفيذ", "تحديد الأولويات والجدول الزمني", "تخطيط الميزانية والموارد"],
  },
  {
    icon: Settings,
    title: "تطوير حلول مخصصة",
    description: "فريقنا التقني يصمم ويبني حلول ذكاء اصطناعي مخصصة تناسب طبيعة عملك ومتطلباتك.",
    features: ["تصميم معماري مخصص", "تطوير نماذج AI متخصصة", "اختبار شامل وضمان الجودة"],
  },
  {
    icon: Zap,
    title: "أتمتة العمليات",
    description: "نساعدك تأتمت العمليات الروتينية باستخدام الذكاء الاصطناعي عشان توفر وقت وتكاليف.",
    features: ["تحليل العمليات القابلة للأتمتة", "بناء سير عمل ذكية", "مراقبة وتحسين مستمر"],
  },
  {
    icon: LineChart,
    title: "تحليل البيانات الذكي",
    description: "نحول بياناتك لرؤى قيمة تساعدك تاخذ قرارات أفضل وأسرع باستخدام تقنيات AI متقدمة.",
    features: ["إعداد لوحات تحكم تحليلية", "نماذج تنبؤية ذكية", "تقارير أداء دورية"],
  },
  {
    icon: MessageSquare,
    title: "التكامل والدعم الفني",
    description: "ندمج حلول الذكاء الاصطناعي مع أنظمتك الحالية بسلاسة، ونقدم دعم فني مستمر بعد التنفيذ.",
    features: ["دمج مع الأنظمة الحالية", "توثيق تقني شامل", "دعم فني 24/7"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">خدماتنا</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 max-w-3xl">
              حلول ذكية مبنية على
              <br />
              <span className="text-foreground/40">خبرة حقيقية</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              نغطي كل مراحل رحلتك مع الذكاء الاصطناعي، من أول استشارة لين التطبيق الكامل والدعم المستمر.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href={`${basePath}/contact`}>
                احجز استشارة مجانية
                <ArrowLeft className="w-4 h-4" />
              </a>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-foreground/20 transition-all duration-300 card-3d h-full flex flex-col">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.description}</p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-foreground/50 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${basePath}/contact`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all mt-auto"
                  >
                    ابدأ الآن
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation animation="scale-up">
            <div className="bg-primary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {[...Array(10)].map((_, i) => (
                    <g key={i}>
                      <line x1={i * 20} y1="0" x2={i * 20} y2="200" stroke="white" strokeWidth="0.5" />
                      <line x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="white" strokeWidth="0.5" />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                  جاهز تبدأ رحلتك مع AI؟
                </h2>
                <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                  تواصل مع فريقنا اليوم واحصل على استشارتك الأولى مجانًا.
                </p>
                <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2" asChild>
                  <a href={`${basePath}/contact`}>
                    احجز استشارة مجانية
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  );
}
