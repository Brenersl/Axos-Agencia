import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Axos.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Agência de UX</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
          <span className="block text-foreground">Transformamos</span>
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Visões em Realidade
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Criamos experiências digitais extraordinárias através de landing pages de alta conversão e design UX/UI que impulsionam seu negócio
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="group bg-gradient-primary hover:shadow-glow-primary text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Iniciar Projeto
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 backdrop-blur-sm font-semibold transition-all duration-300"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Nossos Serviços
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: "150+", label: "Projetos Entregues" },
            { value: "98%", label: "Satisfação" },
            { value: "4.9", label: "Avaliação" },
            { value: "24/7", label: "Suporte" },
          ].map((stat, index) => (
            <div key={index} className="animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
