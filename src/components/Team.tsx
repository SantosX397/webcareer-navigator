import { Linkedin, Github, Globe, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import teamImage from "@/assets/team-collab.jpg";

const Team = () => {
  const members = [
    {
      name: "Ana Silva",
      role: "Front-end Developer",
      description: "Especialista em React e design de interfaces",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://portfolio.com"
    },
    {
      name: "Carlos Santos",
      role: "Full Stack Developer",
      description: "Desenvolvedor full stack com foco em Node.js",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://portfolio.com"
    },
    {
      name: "Maria Oliveira",
      role: "Back-end Developer",
      description: "Arquitetura de APIs e banco de dados",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://portfolio.com"
    },
    {
      name: "João Costa",
      role: "UI/UX Designer",
      description: "Design de experiências digitais modernas",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      portfolio: "https://portfolio.com"
    }
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img src={teamImage} alt="Team collaboration" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">👥 Equipe</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Conheça{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Nossa Equipe
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Profissionais apaixonados por tecnologia e comprometidos com a excelência no desenvolvimento web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-primary text-center mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{member.description}</p>
                </div>

                <div className="flex justify-center gap-3 pt-4 border-t border-border">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors group-hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors group-hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors group-hover:scale-110"
                    aria-label="Portfolio"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <span className="text-sm font-medium text-accent">📧 Contato</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Entre em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tem alguma dúvida ou gostaria de saber mais? Envie-nos uma mensagem!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Team;
