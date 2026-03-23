import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Cpu, LineChart, Bot, Cog, Brain, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const projects = [
  {
    icon: Bot,
    category: "أتمتة ذكية",
    title: "نظام خدمة عملاء ذكي",
    description: "بنينا شات بوت ذكي يرد على استفسارات العملاء بشكل تلقائي بالعربي والإنجليزي، وقلّل وقت الرد بنسبة كبيرة.",
    tech: ["OpenAI", "LangChain", "Python"],
    gradient: "from-foreground/8 to-foreground/4",
  },
  {
    icon: LineChart,
    category: "تحليل بيانات",
    title: "لوحة تحليلات تنبؤية",
    description: "صممنا نظام تحليلات يتنبأ بسلوك العملاء ويساعد الشركة تاخذ قرارات مبنية على بيانات حقيقية.",
    tech: ["TensorFlow", "Python", "Dashboard"],
    gradient: "from-foreground/8 to-foreground/4",
  },
  {
    icon: Cog,
    category: "أتمتة عمليات",
    title: "أتمتة عمليات المستودعات",
    description: "ساعدنا شركة لوجستية تأتمت عمليات المخزون باستخدام الذكاء الاصطناعي، ووفرت ساعات عمل يومية.",
    tech: ["Machine Learning", "Azure", "API"],
    gradient: "from-foreground/8 to-foreground/4",
  },
  {
    icon: Brain,
    category: "استشارات",
    title: "استراتيجية تحول رقمي AI",
    description: "قدمنا استشارة شاملة لشركة في قطاع التجزئة وبنينا لهم خارطة طريق لدمج AI في كل أقسامهم.",
    tech: ["Strategy", "AI Roadmap", "Consulting"],
    gradient: "from-foreground/8 to-foreground/4",
  },
  {
    icon: Cpu,
    category: "تطوير مخصص",
    title: "نظام تصنيف مستندات ذكي",
    description: "طورنا نظام يصنف ويستخرج البيانات من المستندات تلقائيًا باستخدام تقنيات معالجة اللغات الطبيعية.",
    tech: ["NLP", "OCR", "Python"],
    gradient: "from-foreground/8 to-foreground/4",
  },
  {
    icon: Zap,
    category: "تكامل أنظمة",
    title: "دمج AI مع نظام ERP",
    description: "دمجنا حلول ذكاء اصطناعي مع نظام ERP موجود عند العميل عشان يحسن التنبؤ بالمبيعات وإدارة المخزون.",
    tech: ["Integration", "ML Models", "ERP"],
    gradient: "from-foreground/8 to-foreground/4",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="projects-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projects-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">أعمالنا</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 max-w-3xl">
              مشاريع نفتخر فيها
              <br />
              <span className="text-foreground/40">ونتائج حقيقية</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
              نماذج من الحلول اللي قدمناها لعملائنا. كل مشروع صُمم حسب احتياجات العميل الفعلية.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <Button size="lg" className="rounded-full px-8 gap-2" asChild>
              <a href={`${basePath}/contact`}>
                ابدأ مشروعك معنا
                <ArrowLeft className="w-4 h-4" />
              </a>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300 card-3d h-full flex flex-col">
                  {/* Project Header */}
                  <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-border`}>
                    <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-md mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium bg-card/80 px-3 py-1 rounded-full border border-border/50">
                      {project.category}
                    </span>
                  </div>
                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground border border-border/50 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              عندك مشروع في بالك؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              تواصل معنا ونستعرض كيف نقدر نحوّل فكرتك لواقع باستخدام الذكاء الاصطناعي.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                <a href={`${basePath}/contact`}>
                  ابدأ مشروعك
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
