"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Mail, MapPin, MessageCircle, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/scroll-animation";

const basePath = "/sanad-AI";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl animate-pulse" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <ScrollAnimation animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
              <span className="text-sm text-muted-foreground">تواصل معنا</span>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-4">
              خلنا نبني مستقبلك
              <br />
              <span className="text-foreground/40">مع الذكاء الاصطناعي</span>
            </h1>
          </ScrollAnimation>
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              تواصل معنا اليوم واحجز استشارتك الأولى. نسمع منك ونعطيك تصور واضح.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-5">
              <ScrollAnimation animation="fade-right" delay={100}>
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground relative overflow-hidden group">
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
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center mb-4">
                      <MessageCircle className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">واتساب</h3>
                    <p className="text-primary-foreground/70 text-sm mb-4">تواصل معنا مباشرة عبر واتساب للرد السريع.</p>
                    <a
                      href="https://wa.me/966500000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-primary-foreground/90 transition-colors"
                    >
                      ابدأ المحادثة
                      <ArrowLeft className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">البريد الإلكتروني</h3>
                  <p className="text-sm text-muted-foreground mb-2">للاستفسارات الرسمية والمقترحات.</p>
                  <a href="mailto:info@sanadtech.ai" className="text-sm font-medium text-foreground hover:underline">
                    info@sanadtech.ai
                  </a>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={300}>
                <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-foreground/20 transition-all duration-300 card-3d">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">الموقع</h3>
                  <p className="text-sm text-muted-foreground">المملكة العربية السعودية</p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <ScrollAnimation animation="fade-left" delay={150}>
              <div className="lg:col-span-3 bg-card rounded-3xl border border-border p-8 h-full">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-5">
                      <Send className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">شكرًا لتواصلك!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      استلمنا رسالتك وسنتواصل معك قريبًا. نتطلع للعمل معك!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-2xl font-bold text-foreground mb-2">أرسل لنا رسالة</h2>
                    <p className="text-sm text-muted-foreground mb-6">سنرد عليك خلال يوم عمل واحد.</p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">الاسم الكامل *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="أدخل اسمك"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-colors text-sm"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">اسم الشركة</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="اسم شركتك أو مشروعك"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">الخدمة المطلوبة</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-colors text-sm appearance-none"
                      >
                        <option value="">اختر الخدمة...</option>
                        <option value="consulting">استشارات الذكاء الاصطناعي</option>
                        <option value="strategy">بناء استراتيجية AI</option>
                        <option value="development">تطوير حلول مخصصة</option>
                        <option value="automation">أتمتة العمليات</option>
                        <option value="analytics">تحليل البيانات</option>
                        <option value="other">أخرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">رسالتك *</label>
                      <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="صف تحدياتك وأهدافك وما تتوقعه منا..."
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10 transition-colors text-sm resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-xl gap-2">
                      أرسل الرسالة
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
