import { Cpu, LineChart, Bot, Cog, Brain, Zap } from "lucide-react";

const projects = [
  {
    icon: Bot,
    category: "أتمتة ذكية",
    title: "نظام خدمة عملاء ذكي",
    description:
      "بنينا شات بوت ذكي يرد على استفسارات العملاء بشكل تلقائي بالعربي والإنجليزي، وقلّل وقت الرد بنسبة كبيرة.",
    tech: ["OpenAI", "LangChain", "Python"],
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: LineChart,
    category: "تحليل بيانات",
    title: "لوحة تحليلات تنبؤية",
    description:
      "صممنا نظام تحليلات يتنبأ بسلوك العملاء ويساعد الشركة تاخذ قرارات مبنية على بيانات حقيقية.",
    tech: ["TensorFlow", "Python", "Dashboard"],
    gradient: "from-green-500/10 to-teal-500/10",
  },
  {
    icon: Cog,
    category: "أتمتة عمليات",
    title: "أتمتة عمليات المستودعات",
    description:
      "ساعدنا شركة لوجستية تأتمت عمليات المخزون باستخدام الذكاء الاصطناعي، ووفرت ساعات عمل يومية.",
    tech: ["Machine Learning", "Azure", "API"],
    gradient: "from-orange-500/10 to-red-500/10",
  },
  {
    icon: Brain,
    category: "استشارات",
    title: "استراتيجية تحول رقمي AI",
    description:
      "قدمنا استشارة شاملة لشركة في قطاع التجزئة وبنينا لهم خارطة طريق لدمج AI في كل أقسامهم.",
    tech: ["Strategy", "AI Roadmap", "Consulting"],
    gradient: "from-violet-500/10 to-pink-500/10",
  },
  {
    icon: Cpu,
    category: "تطوير مخصص",
    title: "نظام تصنيف مستندات ذكي",
    description:
      "طورنا نظام يصنف ويستخرج البيانات من المستندات تلقائيًا باستخدام تقنيات معالجة اللغات الطبيعية.",
    tech: ["NLP", "OCR", "Python"],
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Zap,
    category: "تكامل أنظمة",
    title: "دمج AI مع نظام ERP",
    description:
      "دمجنا حلول ذكاء اصطناعي مع نظام ERP موجود عند العميل عشان يحسن التنبؤ بالمبيعات وإدارة المخزون.",
    tech: ["Integration", "ML Models", "ERP"],
    gradient: "from-emerald-500/10 to-green-500/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <span className="text-sm text-muted-foreground">أعمالنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            مشاريع نفتخر فيها
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نماذج من الحلول اللي قدمناها لعملائنا. كل مشروع
            صُمم حسب احتياجات العميل الفعلية.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-foreground/20 transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient}`}>
                <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-md mb-4">
                  <project.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-xs text-muted-foreground font-medium bg-card/80 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
