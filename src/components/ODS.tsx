import { GraduationCap, TrendingUp, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import odsImage from "@/assets/ods-tech.jpg";

const ODS = () => {
  const contributions = [
    {
      icon: GraduationCap,
      number: "4",
      title: "Educação de Qualidade",
      description: "Desenvolvimento web democratiza o acesso ao conhecimento através de plataformas educacionais online, cursos interativos e recursos digitais acessíveis a todos, independentemente da localização geográfica.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: TrendingUp,
      number: "8",
      title: "Trabalho Decente e Crescimento Econômico",
      description: "A indústria tech gera milhões de empregos qualificados e bem remunerados, impulsiona o empreendedorismo digital e permite trabalho remoto, promovendo inclusão e oportunidades econômicas globais.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Lightbulb,
      number: "9",
      title: "Indústria, Inovação e Infraestrutura",
      description: "Desenvolvedores criam soluções tecnológicas sustentáveis, otimizam processos industriais, desenvolvem infraestrutura digital resiliente e impulsionam a transformação digital em diversos setores.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  return (
    <section id="ods" className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img src={odsImage} alt="ODS" className="w-full h-full object-cover" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">🌍 Impacto Global</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Contribuindo para os{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Objetivos de Desenvolvimento Sustentável
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            O desenvolvimento web tem papel fundamental na construção de um futuro mais sustentável e inclusivo, 
            alinhado com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contributions.map((contribution, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`${contribution.bgColor} p-4 rounded-xl group-hover:scale-110 transition-transform`}>
                  <contribution.icon className={`${contribution.color} w-8 h-8`} />
                </div>
                <div className="flex-1">
                  <div className={`${contribution.color} text-sm font-bold mb-1`}>ODS {contribution.number}</div>
                  <h3 className="text-xl font-bold">{contribution.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{contribution.description}</p>
            </Card>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              2B+
            </div>
            <p className="text-sm text-muted-foreground">Pessoas conectadas pela web</p>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              26M+
            </div>
            <p className="text-sm text-muted-foreground">Desenvolvedores web no mundo</p>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              1.8B
            </div>
            <p className="text-sm text-muted-foreground">Sites ativos na internet</p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            Ao escolher a carreira de desenvolvimento web, você não apenas constrói software — 
            você constrói pontes para um futuro mais conectado, educado e sustentável.
          </p>
          <div className="inline-block px-6 py-3 bg-gradient-primary/10 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium text-primary">
              💻 Juntos, podemos usar a tecnologia para transformar o mundo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ODS;
