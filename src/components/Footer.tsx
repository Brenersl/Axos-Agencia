import { Instagram, Linkedin, Twitter } from "lucide-react";
import axosLogo from "@/assets/axos-logo.png";

// 1. Dados das Redes Sociais extraídos para uma constante
const socialLinks = [
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/axoscreative/", // Substitua pelo seu link real
    name: "Instagram" 
  },
  // Exemplo de como adicionar outros links:
  // { 
  //   icon: Linkedin, 
  //   href: "https://www.linkedin.com/company/SEU_PERFIL", 
  //   name: "LinkedIn" 
  // },
  // { 
  //   icon: Twitter, 
  //   href: "https://twitter.com/SEU_USUARIO", 
  //   name: "Twitter" 
  // },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and text */}
          <div className="text-center md:text-left">
            <img src={axosLogo} alt="Axos" className="h-12 mb-2 mx-auto md:mx-0" />
            <p className="text-sm text-muted-foreground">
              Agência de UX - Transformando visões em experiências digitais
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  // 2. Usando o nome da rede social como 'key' em vez do 'index'
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link para o nosso ${social.name}`} // 3. Adicionado para acessibilidade (SEO/Leitores de tela)
                  className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary flex items-center justify-center transition-all duration-300 hover:shadow-glow-primary hover:scale-110"
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Axos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;