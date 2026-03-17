export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
          <span className="text-sm text-muted-foreground">من نحن</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance">
              سند تكنو: شريكك
              <br />
              في عالم الذكاء الاصطناعي
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              سند تكنولوجي شركة سعودية متخصصة في استشارات الذكاء الاصطناعي.
              نساعد الشركات وأصحاب المشاريع يدمجون الذكاء الاصطناعي
              في أعمالهم بالشكل الصحيح. عندنا فريق متخصص يفهم
              التقنية ويفهم السوق السعودي، وهذا اللي يخلينا مختلفين.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              ما نكتفي بالاستشارة بس — عندنا فريق تقني خبير ينفذ
              الخطط على أرض الواقع. من أول جلسة استشارية لين
              التطبيق الكامل، نمشي معك خطوة بخطوة.
            </p>

            {/* Expertise Tags */}
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
                  <path
                    d="M0,25 Q50,0 100,25 T200,25 T300,25 T400,25"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,35 Q50,10 100,35 T200,35 T300,35 T400,35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M0,45 Q50,20 100,45 T200,45 T300,45 T400,45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
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
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl border border-border overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary p-8 flex items-center justify-center">
                {/* AI Consulting Visual */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="aspect-square bg-card rounded-2xl flex flex-col items-center justify-center shadow-lg p-4 gap-2">
                    <svg
                      className="w-10 h-10 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <span className="text-xs text-muted-foreground font-medium">استشارات</span>
                  </div>
                  <div className="aspect-square bg-primary rounded-2xl flex flex-col items-center justify-center shadow-lg p-4 gap-2">
                    <svg
                      className="w-10 h-10 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs text-primary-foreground font-medium">تطوير</span>
                  </div>
                  <div className="aspect-square bg-primary rounded-2xl flex flex-col items-center justify-center shadow-lg p-4 gap-2">
                    <svg
                      className="w-10 h-10 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="text-xs text-primary-foreground font-medium">تحليل</span>
                  </div>
                  <div className="aspect-square bg-card rounded-2xl flex flex-col items-center justify-center shadow-lg p-4 gap-2">
                    <svg
                      className="w-10 h-10 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-xs text-muted-foreground font-medium">فريق خبير</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
