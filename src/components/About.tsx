import { Code, Server, Layers, Lightbulb, Users, Wrench, Brain, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const roles = [
    {
      icon: Code,
      title: "Front-end",
      description: "Cria interfaces visuais e interativas usando HTML, CSS, JavaScript e frameworks modernos como React e Vue.",
      color: "text-primary"
    },
    {
      icon: Server,
      title: "Back-end",
      description: "Desenvolve a lógica do servidor, APIs e gerencia bancos de dados usando Node.js, Python, PHP e outras linguagens.",
      color: "text-secondary"
    },
    {
      icon: Layers,
      title: "Full Stack",
      description: "Domina tanto front-end quanto back-end, capaz de desenvolver aplicações completas de ponta a ponta.",
      color: "text-accent"
    }
  ];

  const skills = [
    {
      icon: Wrench,
      title: "Habilidades Técnicas",
      items: [
        "Linguagens: HTML, CSS, JavaScript, TypeScript",
        "Frameworks: React, Vue, Angular, Next.js",
        "Back-end: Node.js, Express, APIs REST",
        "Banco de Dados: SQL, MongoDB, Firebase",
        "Versionamento: Git, GitHub, GitLab",
        "Design Responsivo e Acessibilidade"
      ]
    },
    {
      icon: Brain,
      title: "Habilidades Comportamentais",
      items: [
        "Pensamento lógico e resolução de problemas",
        "Criatividade e atenção aos detalhes",
        "Trabalho em equipe e comunicação",
        "Aprendizado contínuo e adaptabilidade",
        "Gerenciamento de tempo e projetos",
        "Capacidade de receber e dar feedback"
      ]
    },
    {
      icon: Target,
      title: "Ambientes de Trabalho",
      items: [
        "Startups e empresas de tecnologia",
        "Agências de marketing digital",
        "Freelancer e trabalho remoto",
        "Grandes corporações e bancos",
        "Consultorias especializadas",
        "Projetos próprios e empreendedorismo"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">💼 Carreira</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            O que faz um{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Desenvolvedor Web
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedores web são os arquitetos da internet moderna, transformando ideias em realidade digital através do código.
          </p>
        </div>

        {/* Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {roles.map((role, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <role.icon className={`${role.color} w-12 h-12 mb-4`} />
              <h3 className="text-xl font-bold mb-3">{role.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{role.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <skill.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1.5">▸</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
