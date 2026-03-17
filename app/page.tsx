import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import About from "@/components/about";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Process from "@/components/process";
import WhyUs from "@/components/why-us";
import Stats from "@/components/stats";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Projects />
      <Process />
      <WhyUs />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
