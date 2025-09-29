import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
