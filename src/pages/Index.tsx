
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import Features from "@/components/Features";
import AppShowcase from "@/components/AppShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Mission from "@/components/Mission";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Features />
      <AppShowcase />
      <Testimonials />
      <FAQ />
      <Mission />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
