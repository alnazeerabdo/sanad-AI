"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="text-sm text-muted-foreground">مرحبًا بك في سند تكنو</span>
              <Sparkles className="w-4 h-4 text-foreground" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
              نسندك في رحلة
              <br />
              <span className="relative">
                الذكاء الاصطناعي
                <svg
                  className="absolute -bottom-2 right-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M1 5.5C47.6667 2.16667 152.4 -1.9 199 5.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              لأعمالك
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              شركة سعودية متخصصة في استشارات الذكاء الاصطناعي. نساعدك تدمج
              الذكاء الاصطناعي داخل شغلك من خلال خبراء متخصصين، ونحول الخطة
              لواقع بفريق تقني محترف.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2" asChild>
                <a href="#contact">
                  احجز استشارتك المجانية
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

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">شركة مسجلة في السعودية</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <span className="text-sm text-muted-foreground">متخصصين في الذكاء الاصطناعي</span>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-card rounded-3xl border border-border p-8 shadow-lg">
              {/* AI Brain Visual */}
              <div className="aspect-square bg-gradient-to-br from-muted to-secondary rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Neural Network Pattern */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full absolute inset-0 opacity-20"
                >
                  {/* Grid lines */}
                  {[...Array(10)].map((_, i) => (
                    <g key={i}>
                      <line
                        x1={i * 20}
                        y1="0"
                        x2={i * 20}
                        y2="200"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                      <line
                        x1="0"
                        y1={i * 20}
                        x2="200"
                        y2={i * 20}
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </g>
                  ))}
                  {/* Neural nodes */}
                  {[
                    [40, 40], [100, 30], [160, 50],
                    [30, 100], [100, 100], [170, 100],
                    [50, 160], [100, 170], [150, 150]
                  ].map(([cx, cy], i) => (
                    <g key={`node-${i}`}>
                      <circle cx={cx} cy={cy} r="4" fill="currentColor" opacity="0.4" />
                      {i < 6 && (
                        <line
                          x1={cx}
                          y1={cy}
                          x2={100}
                          y2={100}
                          stroke="currentColor"
                          strokeWidth="0.5"
                          opacity="0.3"
                        />
                      )}
                    </g>
                  ))}
                </svg>

                {/* Center Icon */}
                <div className="relative z-10 w-32 h-32 bg-primary rounded-3xl flex items-center justify-center shadow-2xl">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-16 h-16 text-primary-foreground"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1.27c.34-.6.99-1 1.73-1a2 2 0 010 4c-.74 0-1.39-.4-1.73-1H20v1a7 7 0 01-7 7v1.27c.6.34 1 .99 1 1.73a2 2 0 01-4 0c0-.74.4-1.39 1-1.73V18a7 7 0 01-7-7H2.73c-.34.6-.99 1-1.73 1a2 2 0 010-4c.74 0 1.39.4 1.73 1H4a7 7 0 017-7V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2z" />
                    <circle cx="12" cy="14" r="3" />
                  </svg>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 w-10 h-10 bg-card rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3.5s' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              {/* Tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                استشارات ذكاء اصطناعي
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-muted rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
