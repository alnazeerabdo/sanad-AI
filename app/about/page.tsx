import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Shield, Users, Target, Headphones, Award, Lightbulb, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const values = [
  {
    icon: Shield,
    title: "الموثوقية",
    description: "شركة مسجلة رسميًا في المملكة. نفهم السوق المحلي والأنظمة واللوائح.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "نستخدم أحدث تقنيات الذكاء الاصطناعي ونطبقها بطرق عملية وقابلة للقياس.",
  },
  {
    icon: Target,
    title: "التركيز على النتائج",
    description: "كل مشروع له أهداف واضحة ومؤشرات أداء نتابعها معك لضمان تحقيق النتائج.",
  },
  {
    icon: Users,
    title: "الشراكة الحقيقية",
    description: "ما نشتغل كمزودي خدمة فقط، بل شركاء استراتيجيين نمشي معك في كل خطوة.",
  },
  {
    icon: Award,
    title: "الجودة",
    description: "نلتزم بأعلى معايير الجودة في كل ما نقدمه، من الاستشارات لحين التنفيذ الكامل.",
  },
  {
    icon: Headphones,
    title: "الدعم المستمر",
    description: "علاقتنا مع العميل لا تنتهي بعد التسليم — نوفر دعم فني مستمر لضمان النجاح.",
  },
];

const timeline = [
  { year: "2022", title: "التأسيس", desc: "انطلقت سند تكنولوجي بهدف تمكين الشركات السعودية من الذكاء الاصطناعي." },
  { year: "2023", title: "توسع الخدمات", desc: "أضفنا فريق تطوير متخصص لتنفيذ الحلول من الاستشارة لحين الإطلاق الكامل." },
  { year: "2024", title: "نمو المشاريع", desc: "قدمنا حلول لعملاء في قطاعات متنوعة: اللوجستيات، التجزئة، وخدمة العملاء." },
  { year: "2025", title: "التميز والابتكار", desc: "نواصل الابتكار واعتماد أحدث تقنيات الذكاء الاصطناعي لخدمة عملائنا." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">من نحن</span>
            </div>
          </ScrollAnimation>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollAnimation animation="fade-up" delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                  سند تكنو
                  <br />
                  <span className="text-foreground/40">شريكك في AI</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  سند تكنولوجي شركة سعودية متخصصة في استشارات الذكاء الاصطناعي. نساعد الشركات وأصحاب المشاريع يدمجون الذكاء الاصطناعي في أعمالهم بالشكل الصحيح.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  عندنا فريق متخصص يفهم التقنية ويفهم السوق السعودي — ما نكتفي بالاستشارة بس، بل ننفذ الخطط على أرض الواقع من أول جلسة لين التطبيق الكامل.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={400}>
                <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                  <a href={`${basePath}/contact`}>
                    تواصل معنا
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
              </ScrollAnimation>
            </div>
            <ScrollAnimation animation="rotate-in" delay={200}>
              <div className="relative group" style={{ perspective: "1200px" }}>
                <div
                  className="bg-primary rounded-3xl p-8 shadow-2xl border border-foreground/10 overflow-hidden transition-transform duration-700 group-hover:[transform:rotateY(-3deg)_rotateX(2deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
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
                  <div className="relative z-10 space-y-6">
                    <div className="text-primary-foreground/60 text-sm font-mono">sanad-techno</div>
                    {[
                      { label: "الخبرة", value: "+3 سنوات" },
                      { label: "المشاريع المنجزة", value: "+20 مشروع" },
                      { label: "رضا العملاء", value: "100%" },
                      { label: "الدعم الفني", value: "24/7" },
                    ].map((stat) => (
                      <div key={stat.label} className="flex items-center justify-between border-b border-primary-foreground/10 pb-4 last:border-0">
                        <span className="text-primary-foreground/60 text-sm">{stat.label}</span>
                        <span className="text-primary-foreground font-bold text-lg">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-4">
                <span className="text-sm text-muted-foreground">مسيرتنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">رحلة سند تكنو</h2>
            </div>
          </ScrollAnimation>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d h-full">
                  <div className="text-4xl font-extrabold text-foreground/10 mb-3">{item.year}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-4">
                <span className="text-sm text-muted-foreground">قيمنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">ما نؤمن فيه</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 80}>
                <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
