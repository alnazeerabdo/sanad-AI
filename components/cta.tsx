import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {[...Array(20)].map((_, i) => (
                <circle
                  key={i}
                  cx={200 + Math.cos(i * 0.5) * i * 10}
                  cy={200 + Math.sin(i * 0.5) * i * 10}
                  r={i * 5}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background mb-6">
              <span className="text-sm text-muted-foreground">انضم إلينا</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              هل تريد أن تكون جزءاً من
              <br />
              ثورة الذكاء الاصطناعي؟
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              نحن في ذكاء نساعد الشركات الرائدة على تحقيق التحول الرقمي. دعنا
              نساعدك على استكشاف إمكانيات الذكاء الاصطناعي لأعمالك.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full px-8 gap-2">
                احجز استشارة مجانية
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
