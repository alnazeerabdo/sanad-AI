"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Brain, Zap, Shield } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";
import { useCountUp, useProgressBar } from "@/hooks/use-count-up";

const basePath = "";

function AnimatedStat({
  label,
  value,
  suffix,
  targetProgress,
}: {
  label: string;
  value: number;
  suffix: string;
  targetProgress: number;
}) {
  const { count, ref: countRef } = useCountUp(value, 2000);
  const { width, ref: progressRef } = useProgressBar(targetProgress, 2200);

  return (
    <div
      ref={countRef}
      className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10 backdrop-blur-sm"
    >
      <div className="text-xs text-primary-foreground/50 mb-1">{label}</div>
      <div className="text-xl font-bold text-primary-foreground">
        {suffix === "%" ? `${count}%` : suffix === "x" ? `${count}x` : `+${count}%`}
      </div>
      <div
        ref={progressRef}
        className="mt-2 h-1 bg-primary-foreground/10 rounded-full overflow-hidden"
      >
        <div
          className="h-full bg-primary-foreground/40 rounded-full transition-none"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-pattern opacity-[0.025]" />
        <div className="absolute -top-60 -right-60 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/8 via-primary/4 to-transparent blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-60 -left-60 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/6 to-transparent blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-primary/3 to-transparent blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-card/80 backdrop-blur-sm shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm text-muted-foreground">مرحبًا بك في سند تكنو</span>
                <Sparkles className="w-4 h-4 text-foreground/60" />
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                نسندك في{" "}
                <span className="relative inline-block">
                  رحلة
                  <svg
                    className="absolute -bottom-2 right-0 w-full text-foreground/20"
                    height="8"
                    viewBox="0 0 120 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 6C30 2 90 2 118 6"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                الذكاء الاصطناعي
                <br />
                <span className="text-foreground/40">لأعمالك</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                شركة سعودية متخصصة في استشارات الذكاء الاصطناعي. نساعدك تدمج
                الذكاء الاصطناعي داخل شغلك من خلال خبراء متخصصين، ونحول الخطة
                لواقع بفريق تقني محترف.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow" asChild>
                  <a href={`${basePath}/contact`}>
                    احجز استشارتك الآن
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 bg-background/60 backdrop-blur-sm" asChild>
                  <a href={`${basePath}/services`}>اكتشف خدماتنا</a>
                </Button>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500}>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  { icon: Shield, label: "شركة مسجلة في السعودية" },
                  { icon: Brain, label: "متخصصين في الذكاء الاصطناعي" },
                  { icon: Zap, label: "نتائج حقيقية وقابلة للقياس" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual Dashboard */}
          <ScrollAnimation animation="rotate-in" delay={300}>
            <div className="relative group" style={{ perspective: "1200px" }}>
              <div
                className="relative bg-primary rounded-3xl p-6 shadow-2xl border border-foreground/10 overflow-hidden transition-transform duration-700 group-hover:[transform:rotateY(-3deg)_rotateX(2deg)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Grid pattern */}
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

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/30" />
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/20" />
                    <div className="w-3 h-3 rounded-full bg-primary-foreground/10" />
                  </div>
                  <span className="text-xs text-primary-foreground/40 font-mono">
                    sanad-ai-dashboard
                  </span>
                </div>

                {/* Animated Stats */}
                <div className="relative z-10 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <AnimatedStat label="الكفاءة" value={40} suffix="+" targetProgress={70} />
                    <AnimatedStat label="الأتمتة" value={85} suffix="%" targetProgress={85} />
                    <AnimatedStat label="التوفير" value={3} suffix="x" targetProgress={60} />
                  </div>

                  {/* Chart */}
                  <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-primary-foreground/60">أداء النموذج</span>
                      <span className="text-xs text-primary-foreground/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                        مباشر
                      </span>
                    </div>
                    <svg viewBox="0 0 300 80" className="w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradMono" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15"
                        fill="none"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15 L300,80 L0,80 Z"
                        fill="url(#chartGradMono)"
                      />
                      {[[60, 45],[120, 35],[180, 25],[240, 30],[300, 15]].map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.7)" />
                      ))}
                    </svg>
                  </div>

                  {/* Action Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-primary-foreground/8 rounded-xl p-4 border border-primary-foreground/10">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-primary-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-xs text-primary-foreground/80 font-medium">تحليل ذكي</div>
                      <div className="text-[10px] text-primary-foreground/40 mt-1">فعّال</div>
                    </div>
                    <div className="bg-primary-foreground/8 rounded-xl p-4 border border-primary-foreground/10">
                      <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-primary-foreground/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-xs text-primary-foreground/80 font-medium">أتمتة العمليات</div>
                      <div className="text-[10px] text-primary-foreground/40 mt-1">نشط</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card text-foreground border border-border px-6 py-2 rounded-full text-sm font-medium shadow-lg whitespace-nowrap">
                لوحة تحكم AI
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-muted rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
