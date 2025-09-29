import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and text */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              NexusLab Digital
            </h3>
            <p className="text-sm text-muted-foreground">
              Transformando visões em experiências digitais
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p>© {new Date().getFullYear()} NexusLab Digital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
