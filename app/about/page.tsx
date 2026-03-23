import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Shield,
  Users,
  Target,
  Headphones,
  Award,
  Lightbulb,
  ArrowLeft,
  Brain,
  Code2,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const stats = [
  { label: "سنة التأسيس", value: "2025" },
  { label: "الدعم الفني", value: "24/7" },
  { label: "رضا العملاء", value: "100%" },
  { label: "مجالات التخصص", value: "AI & Data" },
];

const expertise = [
  {
    icon: Brain,
    title: "خبراء استشارات الذكاء الاصطناعي",
    description:
      "فريقنا الاستشاري يجمع بين عمق التخصص الأكاديمي والخبرة التطبيقية الميدانية في مشاريع ذكاء اصطناعي حقيقية.",
    points: [
      "تخصص في نماذج اللغة الكبرى (LLMs)",
      "خبرة في استراتيجيات التحول الرقمي",
      "إلمام كامل بمتطلبات السوق السعودي",
    ],
  },
  {
    icon: Code2,
    title: "مطورون تقنيون متمرسون",
    description:
      "فريق التطوير لدينا يمتلك خلفيات تقنية قوية في هندسة البرمجيات وتعلم الآلة، مع سجل من المشاريع المنجزة بنجاح.",
    points: [
      "إتقان أحدث أطر وأدوات الذكاء الاصطناعي",
      "تطوير حلول Python, LangChain, Azure AI",
      "هندسة أنظمة وتكامل APIs احترافي",
    ],
  },
  {
    icon: TrendingUp,
    title: "خبرة في الأعمال والإدارة",
    description:
      "لا نكتفي بالجانب التقني — فريقنا يفهم منطق الأعمال ويبني حلولًا تترجم فعليًا إلى نمو وربحية مقاسة.",
    points: [
      "تحليل العائد على الاستثمار (ROI)",
      "إعداد خرائط طريق وأطر عمل واضحة",
      "تقديم تقارير أداء شفافة ومفصلة",
    ],
  },
];

const values = [
  {
    icon: Shield,
    title: "الموثوقية والشفافية",
    description: "نلتزم بالوضوح التام في كل ما نقدمه — لا وعود فارغة، فقط نتائج حقيقية وقابلة للقياس.",
  },
  {
    icon: Lightbulb,
    title: "الابتكار العملي",
    description: "نستخدم أحدث تقنيات AI ونطبقها بطريقة عملية تناسب واقع عملك وليس فقط نظريات الكتب.",
  },
  {
    icon: Target,
    title: "التركيز على النتائج",
    description: "كل مشروع له أهداف واضحة ومؤشرات أداء نتابعها معك حتى تصل للنتيجة المطلوبة.",
  },
  {
    icon: Users,
    title: "الشراكة الحقيقية",
    description: "نتعامل مع عملائنا كشركاء استراتيجيين لا كعملاء — نجاحك هو نجاحنا.",
  },
  {
    icon: Award,
    title: "الجودة في كل تفصيلة",
    description: "نحن لا نقبل بالحلول الوسط — كل ما نقدمه يمر بمراجعة دقيقة لضمان أعلى معايير الجودة.",
  },
  {
    icon: Headphones,
    title: "دعم ما بعد التسليم",
    description: "علاقتنا مع العميل لا تنتهي عند التسليم — ندعمك ونتابع معك لضمان النجاح المستمر.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary/4 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
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
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <ScrollAnimation animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                  <span className="text-sm text-muted-foreground">من نحن</span>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-5">
                  سند تكنو
                  <br />
                  <span className="text-foreground/40">شريكك في AI</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  سند تكنولوجي شركة سعودية أُسست عام 2025 بهدف واحد واضح: تمكين الشركات السعودية من الاستفادة الفعلية من الذكاء الاصطناعي بطريقة عملية ومنتجة.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={300}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  يقودنا فريق من المتخصصين الذين جمعوا بين الخلفية الأكاديمية التقنية والتجربة الميدانية في بناء وتطبيق حلول الذكاء الاصطناعي — ما نبيع كلامًا، بل نبني حلولًا تشتغل.
                </p>
              </ScrollAnimation>
              <ScrollAnimation animation="fade-up" delay={400}>
                <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/20" asChild>
                  <a href={`${basePath}/contact`}>
                    تواصل مع فريقنا
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
              </ScrollAnimation>
            </div>

            {/* Stats Card */}
            <ScrollAnimation animation="rotate-in" delay={200}>
              <div className="relative group" style={{ perspective: "1200px" }}>
                <div
                  className="bg-primary rounded-3xl p-8 shadow-2xl border border-foreground/10 overflow-hidden transition-transform duration-700 group-hover:[transform:rotateY(-3deg)_rotateX(2deg)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Grid bg */}
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
                    <div className="text-primary-foreground/50 text-xs font-mono mb-6">sanad-techno / overview</div>
                    <div className="grid grid-cols-2 gap-5">
                      {stats.map((stat) => (
                        <div key={stat.label} className="bg-primary-foreground/8 rounded-2xl p-4 border border-primary-foreground/10">
                          <div className="text-2xl font-extrabold text-primary-foreground mb-1">{stat.value}</div>
                          <div className="text-xs text-primary-foreground/50">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-primary-foreground/10 space-y-3">
                      {[
                        "شركة مسجلة رسميًا في السعودية",
                        "فريق متخصص في الذكاء الاصطناعي",
                        "من الاستشارة لحين التنفيذ الكامل",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60 shrink-0" />
                          <span className="text-primary-foreground/70 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-muted rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                <span className="text-sm text-muted-foreground">رسالتنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-5">
                ليش أسّسنا سند تكنو؟
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                رأينا كثير من الشركات السعودية تسمع عن الذكاء الاصطناعي لكنها لا تعرف من أين تبدأ أو كيف تطبقه فعليًا. ورأينا في نفس الوقت مزودي خدمات يبيعون حلولًا جاهزة لا تناسب الواقع المحلي.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                أسّسنا سند تكنو لنكون الجسر الحقيقي بين التقنية وأعمالك — فريق يجمع التخصص التقني العميق مع فهم السوق السعودي وثقافة العمل المحلية.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Expertise — Team Strengths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-5">
                <span className="text-sm text-muted-foreground">خبراتنا</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">فريق متكامل بخبرات حقيقية</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                يقود سند تكنو متخصصون في مجالاتهم يجمعون بين المعرفة النظرية والتطبيق الفعلي.
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((area, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                <div className="group bg-card rounded-2xl border border-border p-7 hover:shadow-xl hover:border-foreground/20 transition-all duration-300 card-3d h-full flex flex-col relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10 flex flex-col flex-1">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <area.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{area.description}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {area.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-foreground/50 shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-5">
                <span className="text-sm text-muted-foreground">لماذا نحن؟</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">ما يميز سند تكنو</h2>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              جاهز تعمل مع فريق تثق فيه؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              تواصل معنا اليوم واحجز جلستك التعريفية المجانية. نسمع منك ونقدم لك تصور واضح خلال أيام.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                <a href={`${basePath}/contact`}>
                  ابدأ الآن
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                <a href={`${basePath}/services`}>اطلع على خدماتنا</a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  );
}
