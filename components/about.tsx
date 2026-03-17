"use client";

import ScrollAnimation from "@/components/scroll-animation";
import { useCountUp, useProgressBar } from "@/hooks/use-count-up";

function AnimatedStep({ step, title, status, targetProgress }: { step: string; title: string; status: string; targetProgress: number }) {
  const { width, ref } = useProgressBar(targetProgress, 2200);

  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
        {step}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-primary-foreground text-sm font-medium">{title}</span>
          <span className={`text-xs ${status === 'مكتمل' ? 'text-primary-foreground/80' : status === 'جاري' ? 'text-primary-foreground/60' : 'text-primary-foreground/30'}`}>
            {status}
          </span>
        </div>
        <div ref={ref} className="h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-foreground/50 rounded-full transition-none"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    </div>
  );
}

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - text only, no expertise card */}
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

            {/* Key points instead of expertise card */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: "استشارات متخصصة", desc: "تحليل وبناء استراتيجية AI" },
                  { title: "تنفيذ كامل", desc: "فريق تقني ينفذ الحلول" },
                  { title: "دعم مستمر", desc: "متابعة بعد التنفيذ" },
                  { title: "خبرة محلية", desc: "نفهم السوق السعودي" },
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{point.title}</p>
                      <p className="text-xs text-muted-foreground">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual — Process tracker with animated progress, centered */}
          <ScrollAnimation animation="rotate-in" delay={200}>
            <div className="relative group lg:flex lg:items-center lg:justify-center" style={{ perspective: '1200px' }}>
              <div className="bg-primary rounded-3xl overflow-hidden border border-foreground/10 shadow-2xl transition-transform duration-700 group-hover:[transform:rotateY(-3deg)_rotateX(2deg)] w-full" style={{ transformStyle: 'preserve-3d' }}>
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-primary-foreground text-sm font-bold">طريقة عملنا</div>
                      <div className="text-primary-foreground/40 text-xs">من الفكرة للتنفيذ</div>
                    </div>
                  </div>

                  {/* Animated Process Steps */}
                  <AnimatedStep step="01" title="تحليل الاحتياجات" status="مكتمل" targetProgress={100} />
                  <AnimatedStep step="02" title="بناء الاستراتيجية" status="مكتمل" targetProgress={100} />
                  <AnimatedStep step="03" title="التطوير والتنفيذ" status="جاري" targetProgress={65} />
                  <AnimatedStep step="04" title="الإطلاق والدعم" status="قادم" targetProgress={0} />

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-primary-foreground/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-foreground">AI</div>
                      <div className="text-[10px] text-primary-foreground/40">استشارات</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-foreground">DEV</div>
                      <div className="text-[10px] text-primary-foreground/40">تطوير</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary-foreground">24/7</div>
                      <div className="text-[10px] text-primary-foreground/40">دعم</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
