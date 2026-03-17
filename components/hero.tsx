"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
                <span className="text-sm text-muted-foreground">مرحبًا بك في سند تكنو</span>
                <Sparkles className="w-4 h-4 text-foreground" />
              </div>
            </ScrollAnimation>

            {/* Main Heading */}
            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
                نسندك في رحلة
                <br />
                الذكاء الاصطناعي
                <br />
                <span className="relative inline-block">
                  لأعمالك
                  <svg
                    className="absolute -bottom-3 right-0 w-full"
                    height="10"
                    viewBox="0 0 120 10"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8C30 3 90 3 118 8"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.3"
                    />
                  </svg>
                </span>
              </h1>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                شركة سعودية متخصصة في استشارات الذكاء الاصطناعي. نساعدك تدمج
                الذكاء الاصطناعي داخل شغلك من خلال خبراء متخصصين، ونحول الخطة
                لواقع بفريق تقني محترف.
              </p>
            </ScrollAnimation>

            {/* CTA Buttons */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                  <a href="#contact">
                    احجز استشارتك الآن
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8"
                  asChild
                >
                  <a href="#services">اكتشف خدماتنا</a>
                </Button>
              </div>
            </ScrollAnimation>

            {/* Trust Indicators */}
            <ScrollAnimation animation="fade-up" delay={500}>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-muted-foreground">شركة مسجلة في السعودية</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <span className="text-sm text-muted-foreground">متخصصين في الذكاء الاصطناعي</span>
              </div>
            </ScrollAnimation>
          </div>

          {/* Visual - Premium AI Dashboard Mockup */}
          <ScrollAnimation animation="rotate-in" delay={300}>
            <div className="relative perspective-[1200px]">
              {/* Main Card - Dashboard Style */}
              <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a2e] rounded-3xl p-6 shadow-2xl border border-white/10 overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />

                {/* Dashboard Header */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-xs text-white/40 font-mono">sanad-ai-dashboard</span>
                </div>

                {/* Dashboard Content */}
                <div className="relative z-10 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="text-xs text-white/50 mb-1">الكفاءة</div>
                      <div className="text-xl font-bold text-white">+40%</div>
                      <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[70%] bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="text-xs text-white/50 mb-1">الأتمتة</div>
                      <div className="text-xl font-bold text-white">85%</div>
                      <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
                      <div className="text-xs text-white/50 mb-1">التوفير</div>
                      <div className="text-xl font-bold text-white">3x</div>
                      <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[60%] bg-gradient-to-r from-emerald-400 to-green-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white/60">أداء النموذج</span>
                      <span className="text-xs text-emerald-400">● مباشر</span>
                    </div>
                    <svg viewBox="0 0 300 80" className="w-full" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15"
                        fill="none"
                        stroke="rgba(139, 92, 246, 0.8)"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,60 Q30,55 60,45 T120,35 T180,25 T240,30 T300,15 L300,80 L0,80 Z"
                        fill="url(#chartGrad)"
                      />
                      {/* Dots */}
                      <circle cx="60" cy="45" r="3" fill="rgba(139, 92, 246, 1)" />
                      <circle cx="120" cy="35" r="3" fill="rgba(139, 92, 246, 1)" />
                      <circle cx="180" cy="25" r="3" fill="rgba(139, 92, 246, 1)" />
                      <circle cx="240" cy="30" r="3" fill="rgba(139, 92, 246, 1)" />
                      <circle cx="300" cy="15" r="3" fill="rgba(139, 92, 246, 1)" />
                    </svg>
                  </div>

                  {/* AI Actions */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/20">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="text-xs text-white/80 font-medium">تحليل ذكي</div>
                      <div className="text-[10px] text-white/40 mt-1">فعّال</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/20">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-xs text-white/80 font-medium">أتمتة العمليات</div>
                      <div className="text-[10px] text-white/40 mt-1">نشط</div>
                    </div>
                  </div>
                </div>

                {/* Animated Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                لوحة تحكم AI
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-muted rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
