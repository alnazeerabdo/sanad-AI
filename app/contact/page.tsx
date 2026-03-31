import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, MapPin, MessageCircle, Clock, ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "واتساب",
    description: "أسرع طريقة للتواصل معنا. نرد خلال ساعات.",
    action: "ابدأ محادثة",
    href: "https://wa.me/966552941685?text=%D8%A3%D9%87%D9%84%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88.",
    primary: true,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    description: "للاستفسارات الرسمية والمقترحات التفصيلية.",
    action: "راسلنا",
    href: "mailto:sanad.ai.tech@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88",
    primary: false,
  },
  {
    icon: MapPin,
    title: "الموقع",
    description: "المملكة العربية السعودية — نخدم عملاء في جميع أنحاء المملكة.",
    action: null,
    href: null,
    primary: false,
  },
  {
    icon: Clock,
    title: "أوقات العمل",
    description: "الأحد – الخميس: 9 صباحًا – 6 مساءً\nالجمعة – السبت: عبر واتساب فقط",
    action: null,
    href: null,
    primary: false,
  },
];

const faqs = [
  {
    q: "كم تستغرق الاستشارة الأولى؟",
    a: "حوالي 45–60 دقيقة نتعرف فيها على عملك وتحدياتك ونقيّم الفرص المتاحة لاستخدام الذكاء الاصطناعي.",
  },
  {
    q: "هل الاستشارة الأولى مجانية؟",
    a: "نعم، الجلسة التعريفية الأولى مجانية تمامًا دون أي التزام.",
  },
  {
    q: "ماذا أحضر للاستشارة؟",
    a: "يكفي أن تكون عندك فكرة عن التحديات اللي تواجهها ومجال شغلك. الباقي نكمله سوا.",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-primary/4 to-transparent blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">تواصل معنا</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-5">
              خلنا نبدأ رحلتك
              <br />
              <span className="text-foreground/40">مع الذكاء الاصطناعي</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
              فريقنا مستعد يسمع منك ويساعدك تحدد الفرص اللي يقدر الذكاء الاصطناعي يحدث فيها فرقًا حقيقيًا لأعمالك.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/20" asChild>
                <a
                  href="https://wa.me/966552941685?text=%D8%A3%D9%87%D9%84%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  تواصل عبر واتساب
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" asChild>
                <a href="mailto:sanad.ai.tech@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88">
                  <Mail className="w-4 h-4" />
                  راسلنا بالإيميل
                </a>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map((method, i) => (
              <ScrollAnimation key={i} animation="fade-up" delay={i * 80}>
                {method.primary ? (
                  <div className="bg-primary rounded-2xl p-6 relative overflow-hidden group h-full flex flex-col">
                    <div className="absolute inset-0 opacity-[0.04]">
                      <svg viewBox="0 0 200 200" className="w-full h-full">
                        {[...Array(10)].map((_, j) => (
                          <g key={j}>
                            <line x1={j * 20} y1="0" x2={j * 20} y2="200" stroke="white" strokeWidth="0.5" />
                            <line x1="0" y1={j * 20} x2="200" y2={j * 20} stroke="white" strokeWidth="0.5" />
                          </g>
                        ))}
                      </svg>
                    </div>
                    <div className="relative z-10 flex flex-col flex-1">
                      <div className="w-12 h-12 bg-primary-foreground/15 rounded-xl flex items-center justify-center mb-4">
                        <method.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-foreground mb-2">{method.title}</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed flex-1">{method.description}</p>
                      {method.href && method.action && (
                        <a
                          href={method.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary-foreground/90 transition-colors"
                        >
                          {method.action}
                          <ArrowLeft className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d h-full flex flex-col">
                    <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                      <method.icon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line flex-1">{method.description}</p>
                    {method.href && method.action && (
                      <a
                        href={method.href}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:gap-3 transition-all"
                      >
                        {method.action}
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </a>
                    )}
                  </div>
                )}
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How to reach us — step guide */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div>
              <ScrollAnimation animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                  <span className="text-sm text-muted-foreground">كيف نبدأ؟</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-10">
                  ثلاث خطوات بسيطة
                </h2>
              </ScrollAnimation>
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "تواصل معنا",
                    desc: "أرسل لنا رسالة عبر واتساب أو الإيميل وعرّفنا على شركتك وما تحتاجه.",
                  },
                  {
                    num: "02",
                    title: "جلسة تعريفية مجانية",
                    desc: "نحجز معك جلسة أونلاين مدتها ساعة نفهم فيها وضعك الحالي وأهدافك ونقيّم الفرص المتاحة.",
                  },
                  {
                    num: "03",
                    title: "خطة مخصصة لك",
                    desc: "نقدم لك تقرير واضح بالتوصيات والخطوات العملية لدمج الذكاء الاصطناعي في أعمالك.",
                  },
                ].map((step, i) => (
                  <ScrollAnimation key={i} animation="fade-up" delay={i * 100}>
                    <div className="flex gap-5">
                      <div className="text-4xl font-extrabold text-foreground/10 leading-none w-14 shrink-0 mt-1">
                        {step.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Quick FAQ */}
            <div>
              <ScrollAnimation animation="fade-up" delay={100}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
                  <span className="text-sm text-muted-foreground">أسئلة شائعة</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  قبل ما تتواصل معنا
                </h2>
              </ScrollAnimation>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <ScrollAnimation key={i} animation="fade-up" delay={i * 80}>
                    <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-md hover:border-foreground/20 transition-all duration-300">
                      <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation animation="scale-up">
            <div className="bg-primary rounded-3xl p-10 relative overflow-hidden">
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
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
                  لا تتردد — الاستشارة الأولى مجانية
                </h2>
                <p className="text-primary-foreground/70 mb-7 max-w-lg mx-auto text-sm leading-relaxed">
                  تواصل معنا اليوم وابدأ رحلتك نحو مستقبل أعمال أذكى.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="rounded-full px-7 gap-2" asChild>
                    <a
                      href="https://wa.me/966552941685?text=%D8%A3%D9%87%D9%84%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      واتساب
                    </a>
                  </Button>
                  <Button size="lg" className="rounded-full px-7 gap-2 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                    <a href="mailto:sanad.ai.tech@gmail.com?subject=%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B3%D9%86%D8%AF%20%D8%AA%D9%83%D9%86%D9%88">
                      <Mail className="w-4 h-4" />
                      إيميل
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </main>
  );
}
