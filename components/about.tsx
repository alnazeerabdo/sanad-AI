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
              تعرف على ذكاء: شركاؤك في
              <br />
              التحول الرقمي
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              نحن لسنا مجرد مستشارين تقنيين، بل نحن شركاء في رحلة التحول. في
              ذكاء، نؤمن بأن كل شركة تستحق الاستفادة من قوة الذكاء الاصطناعي.
              فريقنا من الخبراء يعمل معكم لفهم تحدياتكم وتصميم حلول مخصصة تناسب
              احتياجاتكم.
            </p>

            {/* Stats Card */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 mt-8">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold">60%</p>
                  <p className="text-sm opacity-80 mt-1">
                    زيادة في الكفاءة التشغيلية
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold">+200</p>
                  <p className="text-sm opacity-80 mt-1">مشروع منجز بنجاح</p>
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
                  "تحليل البيانات",
                  "التعلم الآلي",
                  "معالجة اللغات",
                  "الروبوتات",
                  "الأتمتة",
                  "التنبؤ",
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
                {/* Team Visual */}
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="aspect-square bg-card rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-muted-foreground"
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
                  </div>
                  <div className="aspect-square bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-primary-foreground"
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
                  </div>
                  <div className="aspect-square bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-primary-foreground"
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
                  </div>
                  <div className="aspect-square bg-card rounded-2xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-12 h-12 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
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
