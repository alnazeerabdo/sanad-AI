import { Brain, Cpu, Zap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const featuredServices = [
  {
    icon: Brain,
    title: "استشارات الذكاء الاصطناعي",
    description: "نحلل وضع شركتك ونحدد الفرص اللي يقدر AI يضيف فيها قيمة حقيقية.",
  },
  {
    icon: Cpu,
    title: "بناء استراتيجية AI",
    description: "خارطة طريق واضحة لدمج الذكاء الاصطناعي، مصممة حسب احتياجاتك وميزانيتك.",
  },
  {
    icon: Zap,
    title: "أتمتة العمليات",
    description: "نأتمت عملياتك الروتينية باستخدام AI عشان توفر وقت وتكاليف كبيرة.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <ScrollAnimation animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-5">
                <span className="text-sm text-muted-foreground">خدماتنا</span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                حلول ذكية مبنية على
                <br />
                خبرة حقيقية
              </h2>
            </ScrollAnimation>
          </div>
          <ScrollAnimation animation="fade-up" delay={200}>
            <Button variant="outline" className="rounded-full px-6 gap-2 shrink-0" asChild>
              <a href={`${basePath}/services`}>
                عرض كل الخدمات
                <ArrowLeft className="w-4 h-4" />
              </a>
            </Button>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {featuredServices.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-foreground/20 transition-all duration-300 card-3d h-full">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
