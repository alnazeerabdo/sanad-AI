"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollAnimation from "@/components/scroll-animation";

const faqs = [
  {
    question: "وش يعني استشارات ذكاء اصطناعي؟",
    answer:
      "يعني نجلس معك نفهم طبيعة شغلك وتحدياتك، وبعدين نحدد وين وكيف يقدر الذكاء الاصطناعي يضيف قيمة حقيقية لأعمالك. نبني لك خطة واضحة ومفصلة.",
  },
  {
    question: "هل تقدرون تنفذون الحلول بعد الاستشارة؟",
    answer:
      "أكيد! هذا اللي يميزنا. ما نوقف عند الاستشارة والتوصيات. عندنا فريق تقني متخصص ينفذ كل الحلول على أرض الواقع ويتابع معك لين النتائج.",
  },
  {
    question: "كم تاخذ مدة المشروع تقريبًا؟",
    answer:
      "يعتمد على حجم المشروع وتعقيده. الاستشارات الأولية تاخذ من أسبوع لأسبوعين. أما المشاريع التنفيذية فتتراوح من شهر إلى ثلاثة أشهر حسب النطاق.",
  },
  {
    question: "هل تشتغلون مع شركات صغيرة ومتوسطة؟",
    answer:
      "طبعًا! نشتغل مع كل الأحجام. عندنا حلول مرنة تناسب الشركات الناشئة والصغيرة والمتوسطة، ونصمم كل حل حسب ميزانية العميل واحتياجاته.",
  },
  {
    question: "وش التقنيات اللي تستخدمونها؟",
    answer:
      "نستخدم أحدث التقنيات مثل OpenAI، TensorFlow، LangChain، Python، Azure AI، وGoogle Cloud AI. نختار التقنية المناسبة حسب طبيعة المشروع.",
  },
  {
    question: "كيف أبدأ معكم؟",
    answer:
      "تواصل معنا من خلال الموقع أو على واتساب وأحجز استشارتك الأولى. نسمع منك عن مشروعك ونعطيك تصور أولي عن الإمكانيات.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">أسئلة شائعة</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              عندك سؤال؟
            </h2>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-muted-foreground">
              جمعنا لك أكثر الأسئلة اللي يسألونها عملاؤنا
            </p>
          </ScrollAnimation>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-foreground/20 card-3d">
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-right"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 mr-4 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
