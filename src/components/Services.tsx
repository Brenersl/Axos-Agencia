import { Card } from "@/components/ui/card";
import { Palette, Layout, Zap, Users, Globe, Terminal } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Landing Pages",
      description: "Páginas de alta conversão otimizadas para transformar visitantes em clientes. Design responsivo e performance excepcional.",
      features: ["Design Responsivo", "SEO Otimizado", "Alta Conversão", "Integração Completa"]
    },
    {
      icon: Globe,
      title: "Desenvolvimento de Sites",
      description: "Sites institucionais e corporativos completos, com design moderno e funcionalidades personalizadas para sua empresa.",
      features: ["Sites Institucionais", "E-commerce", "Portfólios", "CMS Personalizado"]
    },
    {
      icon: Terminal,
      title: "Desenvolvimento de Sistemas",
      description: "Sistemas web sob medida para automatizar processos e otimizar a gestão do seu negócio. Soluções escaláveis e seguras.",
      features: ["Sistemas Customizados", "Dashboards", "APIs", "Integrações"]
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Interfaces intuitivas e experiências memoráveis. Criamos designs que seus usuários vão amar e que entregam resultados.",
      features: ["Design System", "Prototipagem", "Testes de Usabilidade", "Interface Moderna"]
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Sites ultra-rápidos que ranqueiam melhor no Google e mantém seus usuários engajados. Velocidade é prioridade.",
      features: ["Otimização SEO", "Velocidade Máxima", "Analytics", "Monitoramento"]
    },
    {
      icon: Users,
      title: "Suporte Premium",
      description: "Acompanhamento contínuo e suporte dedicado. Estamos com você em cada etapa da jornada do seu projeto.",
      features: ["Suporte 24/7", "Atualizações", "Consultoria", "Manutenção"]
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow-primary transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
