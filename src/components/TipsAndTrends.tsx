import { BookOpen, Github, Award, Sparkles, Cpu, Rocket, Globe2, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const TipsAndTrends = () => {
  const tips = [
    {
      icon: BookOpen,
      title: "Aprenda os Fundamentos",
      description: "Comece com HTML, CSS e JavaScript. Dominar essas bases é essencial antes de avançar para frameworks."
    },
    {
      icon: Github,
      title: "Monte um Portfólio",
      description: "Crie projetos no GitHub e hospede-os online. Seu portfólio é seu cartão de visitas no mercado tech."
    },
    {
      icon: Award,
      title: "Busque Certificações",
      description: "Plataformas como FreeCodeCamp, Google Developer e Rocketseat oferecem certificações reconhecidas."
    },
    {
      icon: Users,
      title: "Participe de Comunidades",
      description: "Engaje-se em comunidades tech no Discord, fóruns e eventos para networking e aprendizado contínuo."
    }
  ];

  const trends = [
    {
      icon: Cpu,
      title: "Inteligração com IA",
      description: "Machine Learning e IA estão sendo integrados em aplicações web para experiências personalizadas e inteligentes.",
      year: "2024-2025"
    },
    {
      icon: Rocket,
      title: "Frameworks Modernos",
      description: "Next.js, Svelte e frameworks meta-frameworks estão redefinindo o desenvolvimento com SSR e SSG.",
      year: "2024-2025"
    },
    {
      icon: Globe2,
      title: "PWAs e Web 3.0",
      description: "Progressive Web Apps e tecnologias descentralizadas estão criando uma nova era da internet.",
      year: "2024-2026"
    },
    {
      icon: Zap,
      title: "Low-Code e Automação",
      description: "Ferramentas low-code democratizam o desenvolvimento, permitindo criar apps rapidamente.",
      year: "2024-2025"
    }
  ];

  return (
    <section id="trends" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tips Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-sm font-medium text-accent">💡 Dicas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Como{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Começar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Passos práticos para quem deseja ingressar ou se atualizar na carreira de desenvolvimento web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="p-6 bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <tip.icon className="text-accent w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{tip.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Trends Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full">
              <span className="text-sm font-medium text-secondary">🚀 Tendências</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              O Futuro do{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Desenvolvimento Web
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tecnologias e tendências que estão moldando o futuro da web nos próximos anos.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {trends.map((trend, index) => (
                <div
                  key={index}
                  className={`relative animate-fade-in-up ${
                    index % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12 lg:col-start-2"
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-8 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 left-1/2 lg:left-auto" 
                    style={index % 2 === 0 ? { right: "-2.5rem" } : { left: "-2.5rem" }} />

                  <Card className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "lg:justify-end" : ""}`}>
                      <div className="p-3 rounded-lg bg-secondary/10">
                        <trend.icon className="text-secondary w-8 h-8" />
                      </div>
                      <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                        <h3 className="text-2xl font-bold">{trend.title}</h3>
                        <span className="text-sm text-muted-foreground">{trend.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default TipsAndTrends;
