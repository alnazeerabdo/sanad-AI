import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation animation="scale-up">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 mb-6">
                <span className="text-sm text-primary-foreground/80">خلنا نتكلم</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                جاهز تدمج الذكاء الاصطناعي
                <br />
                في أعمالك؟
              </h2>

              <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
                تواصل معنا اليوم واحجز استشارتك الأولى. نسمع منك عن تحدياتك
                وأهدافك، ونعطيك تصور واضح كيف الذكاء الاصطناعي يقدر
                يساعدك تنمو وتتطور.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-8 gap-2" asChild>
                  <a href={`${basePath}/contact`}>
                    احجز استشارتك الآن
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-transparent border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer">
                    تواصل عبر واتساب
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
