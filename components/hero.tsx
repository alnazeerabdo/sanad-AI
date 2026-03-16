"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card">
              <span className="text-sm text-muted-foreground">مرحباً بكم في ذكاء</span>
              <Sparkles className="w-4 h-4 text-foreground" />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight text-balance">
              نصنع مستقبل
              <br />
              <span className="relative">
                الأعمال بالذكاء
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
              الاصطناعي
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              نساعد الشركات على تحقيق التحول الرقمي من خلال استشارات الذكاء
              الاصطناعي وتطبيق الحلول المبتكرة التي تعزز الكفاءة والنمو.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2">
                تحدث معنا
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                اكتشف خدماتنا
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3 space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+150</p>
                <p className="text-sm text-muted-foreground">عميل راضٍ</p>
              </div>
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
                <div className="absolute top-4 right-4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-lg animate-pulse">
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
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-lg animate-pulse delay-150">
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
              </div>

              {/* Tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                حلول ذكية للأعمال
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
