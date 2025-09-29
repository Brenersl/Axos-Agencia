import { Card } from "@/components/ui/card";
import { Lightbulb, Pencil, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      title: "Descoberta",
      description: "Entendemos sua visão, objetivos e público-alvo para criar a estratégia perfeita."
    },
    {
      icon: Pencil,
      number: "02",
      title: "Design",
      description: "Criamos protótipos e designs que capturam a essência da sua marca com perfeição."
    },
    {
      icon: Code,
      number: "03",
      title: "Desenvolvimento",
      description: "Transformamos o design em código limpo, rápido e escalável com as melhores práticas."
    },
    {
      icon: Rocket,
      number: "04",
      title: "Lançamento",
      description: "Deploy otimizado com testes completos e acompanhamento contínuo dos resultados."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Como Trabalhamos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Um processo transparente e eficiente para entregar resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number background */}
                <div className="absolute top-4 right-4 text-6xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
