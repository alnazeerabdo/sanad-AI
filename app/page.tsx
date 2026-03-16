import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import About from "@/components/about";
import Services from "@/components/services";
import Process from "@/components/process";
import Stats from "@/components/stats";
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
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
