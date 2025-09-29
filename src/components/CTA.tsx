import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

const CTA = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = encodeURIComponent("Olá! Quero iniciar meu projeto com a NexusLab Digital.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[150px] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in">
            Pronto para
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Transformar sua Presença Digital?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Entre em contato agora e descubra como podemos levar seu negócio ao próximo nível
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg"
              className="group bg-gradient-primary hover:shadow-glow-primary text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+55 (11) 99999-9999</span>
            </a>
            <a 
              href="mailto:contato@nexuslabdigital.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contato@nexuslabdigital.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
