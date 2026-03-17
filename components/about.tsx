import ScrollAnimation from "@/components/scroll-animation";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimation animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
            <span className="text-sm text-muted-foreground">من نحن</span>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <ScrollAnimation animation="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
                سند تكنو: شريكك
                <br />
                في عالم الذكاء الاصطناعي
              </h2>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-muted-foreground leading-relaxed">
                سند تكنولوجي شركة سعودية متخصصة في استشارات الذكاء الاصطناعي.
                نساعد الشركات وأصحاب المشاريع يدمجون الذكاء الاصطناعي
                في أعمالهم بالشكل الصحيح. عندنا فريق متخصص يفهم
                التقنية ويفهم السوق السعودي، وهذا اللي يخلينا مختلفين.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-muted-foreground leading-relaxed">
                ما نكتفي بالاستشارة بس — عندنا فريق تقني خبير ينفذ
                الخطط على أرض الواقع. من أول جلسة استشارية لين
                التطبيق الكامل، نمشي معك خطوة بخطوة.
              </p>
            </ScrollAnimation>

            {/* Expertise Card */}
            <ScrollAnimation animation="scale-up" delay={400}>
              <div className="bg-primary text-primary-foreground rounded-2xl p-8 mt-8">
                <h3 className="text-lg font-bold mb-4">مجالات خبرتنا</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold">استشارات</p>
                    <p className="text-sm opacity-80 mt-1">
                      تحليل الاحتياجات وبناء الاستراتيجيات
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">تنفيذ</p>
                    <p className="text-sm opacity-80 mt-1">تطبيق الحلول بفريق تقني متخصص</p>
                  </div>
                </div>

                {/* Wave Pattern */}
                <div className="mt-6 pt-6 border-t border-primary-foreground/20">
                  <svg
                    viewBox="0 0 400 50"
                    className="w-full opacity-30"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,25 Q50,0 100,25 T200,25 T300,25 T400,25" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0,35 Q50,10 100,35 T200,35 T300,35 T400,35" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M0,45 Q50,20 100,45 T200,45 T300,45 T400,45" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "استشارات ذكاء اصطناعي",
                    "أتمتة العمليات",
                    "تحليل البيانات",
                    "تطوير تطبيقات AI",
                    "التعلم الآلي",
                    "معالجة اللغات",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-primary-foreground/30 bg-primary-foreground/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual - Premium AI Process Illustration */}
          <ScrollAnimation animation="rotate-in" delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">طريقة عملنا</div>
                      <div className="text-white/40 text-xs">من الفكرة للتنفيذ</div>
                    </div>
                  </div>

                  {/* Process Steps */}
                  {[
                    { step: "01", title: "تحليل الاحتياجات", status: "مكتمل", color: "from-emerald-500 to-green-600", progress: 100 },
                    { step: "02", title: "بناء الاستراتيجية", status: "مكتمل", color: "from-blue-500 to-cyan-600", progress: 100 },
                    { step: "03", title: "التطوير والتنفيذ", status: "جاري", color: "from-purple-500 to-violet-600", progress: 65 },
                    { step: "04", title: "الإطلاق والدعم", status: "قادم", color: "from-gray-500 to-gray-600", progress: 0 },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                        {item.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white text-sm font-medium">{item.title}</span>
                          <span className={`text-xs ${item.status === 'مكتمل' ? 'text-emerald-400' : item.status === 'جاري' ? 'text-purple-400' : 'text-white/30'}`}>
                            {item.status}
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">AI</div>
                      <div className="text-[10px] text-white/40">استشارات</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">DEV</div>
                      <div className="text-[10px] text-white/40">تطوير</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">24/7</div>
                      <div className="text-[10px] text-white/40">دعم</div>
                    </div>
                  </div>
                </div>

                {/* Glow effects */}
                <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
