import { ArrowRight, Code2, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-web-dev.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Desenvolvimento Web"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Code2 size={60} />
      </div>
      <div className="absolute bottom-32 right-20 text-secondary/20 animate-float" style={{ animationDelay: "1s" }}>
        <Globe size={80} />
      </div>
      <div className="absolute top-1/3 right-10 text-accent/20 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles size={50} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">🚀 Construindo o Futuro Digital</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Desenvolvimento Web
            </span>
            <br />
            <span className="text-foreground">
              Construindo o Futuro da Internet
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            O desenvolvimento web é a espinha dorsal da transformação digital. Desde sites institucionais até aplicações complexas, 
            desenvolvedores web criam as experiências que conectam pessoas, empresas e ideias ao redor do mundo.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/90 mb-12 max-w-2xl mx-auto">
            Esta área impulsiona a inovação tecnológica, possibilitando desde o comércio eletrônico até plataformas educacionais, 
            moldando a forma como interagimos com a tecnologia no dia a dia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="bg-gradient-primary hover:opacity-90 transition-all shadow-glow-primary text-base sm:text-lg px-8 py-6"
            >
              Saiba Mais
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("trends")}
              className="border-primary/30 hover:bg-primary/10 text-base sm:text-lg px-8 py-6"
            >
              Ver Tendências
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
