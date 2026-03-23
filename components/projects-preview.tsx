import { Bot, LineChart, Brain, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const featuredProjects = [
  {
    icon: Bot,
    category: "أتمتة ذكية",
    title: "نظام خدمة عملاء ذكي",
    description: "شات بوت ذكي بالعربي والإنجليزي قلّل وقت الرد ورفع رضا العملاء.",
    tech: ["OpenAI", "LangChain", "Python"],
  },
  {
    icon: LineChart,
    category: "تحليل بيانات",
    title: "لوحة تحليلات تنبؤية",
    description: "نظام تحليلات يتنبأ بسلوك العملاء ويدعم القرارات الاستراتيجية.",
    tech: ["TensorFlow", "Python", "Dashboard"],
  },
  {
    icon: Brain,
    category: "استشارات",
    title: "استراتيجية تحول رقمي AI",
    description: "خارطة طريق شاملة لدمج AI في جميع أقسام شركة تجزئة كبرى.",
    tech: ["Strategy", "AI Roadmap", "Consulting"],
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-5">
                <span className="text-sm text-muted-foreground">أعمالنا</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                مشاريع نفتخر فيها
              </h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button variant="outline" className="rounded-full px-6 gap-2 shrink-0" asChild>
              <a href={`${basePath}/projects`}>
                عرض كل المشاريع
                <ArrowLeft className="w-4 h-4" />
              </a>
            </Button>
          </ScrollAnimation>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {featuredProjects.map((project, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-foreground/20 transition-all duration-300 card-3d h-full flex flex-col">
                <div className="p-6 bg-foreground/[0.03] border-b border-border flex items-center gap-4">
                  <div className="w-11 h-11 bg-card rounded-xl flex items-center justify-center shadow-sm border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-card px-3 py-1 rounded-full border border-border/50">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 bg-muted rounded-full text-muted-foreground font-mono border border-border/50">
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
  );
}
