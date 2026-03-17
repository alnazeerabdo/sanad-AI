import { Shield, Users, Target, Headphones, Award, Lightbulb } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "شركة سعودية مسجلة",
    description:
      "شركة مسجلة رسميًا في المملكة العربية السعودية. نفهم السوق المحلي والأنظمة واللوائح، وهذا يعطيك ثقة وأمان.",
  },
  {
    icon: Users,
    title: "فريق متخصص",
    description:
      "عندنا فريق من الخبراء المتخصصين في الذكاء الاصطناعي وعلوم البيانات، اللي يجمعون بين الخبرة التقنية وفهم الأعمال.",
  },
  {
    icon: Target,
    title: "من الاستشارة للتنفيذ",
    description:
      "ما نوقف عند الاستشارة. فريقنا التقني ينفذ الحلول على أرض الواقع ويتابع معك لين ما تشوف النتائج.",
  },
  {
    icon: Lightbulb,
    title: "حلول مخصصة",
    description:
      "ما نستخدم قوالب جاهزة. كل حل نصممه مخصص حسب طبيعة عملك وتحدياتك وأهدافك.",
  },
  {
    icon: Headphones,
    title: "دعم مستمر",
    description:
      "نوفر دعم فني مستمر بعد التنفيذ. نتأكد إن كل شي يشتغل تمام ونساعدك تتطور مع الوقت.",
  },
  {
    icon: Award,
    title: "نتائج حقيقية",
    description:
      "نركز على النتائج اللي تقدر تقيسها. كل مشروع له أهداف واضحة ومؤشرات أداء نتابعها معك.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <span className="text-sm text-muted-foreground">مميزاتنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            ليش سند تكنو هو
            <br />
            اختيارك الصحيح؟
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            نقدم لك كل اللي تحتاجه عشان تدخل عالم الذكاء الاصطناعي
            بثقة ونتائج ملموسة.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
