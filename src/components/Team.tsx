import { Linkedin, Mail, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import teamImage from "@/assets/team-alvin.png";

const Team = () => {
  const teamMembers = [
    {
      name: "King Alvin P. Grospe",
      role: "Project Developer & Educational Researcher",
      image: teamImage,
      bio: "Passionate educator and researcher developing innovative mental health solutions for educational institutions. This platform represents a comprehensive thesis project focused on integrating AI-guided therapeutic care into modern educational frameworks.",
      credentials: ["Master's Degree Candidate in Education", "Licensed Professional Teacher", "Mental Health Advocacy Specialist"],
      email: "kingalvin.grospe@therapeutic.com",
      linkedin: "#",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Educational Excellence",
      description: "Recognized for innovative approaches in mental health education and student wellbeing programs",
    },
    {
      icon: BookOpen,
      title: "Community Impact",
      description: "Developed comprehensive mental health curriculum and resources adopted by multiple educational institutions",
    },
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-primary-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet the <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Led by experienced professionals dedicated to advancing mental health care through innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 animate-in fade-in slide-in-from-bottom duration-700"
              style={{ 
                animationDelay: `${index * 200}ms`,
                boxShadow: 'var(--shadow-strong)'
              }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[400px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                </div>

                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-xl text-primary font-semibold mb-4">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Credentials
                    </h4>
                    <ul className="space-y-2">
                      {member.credentials.map((credential) => (
                        <li key={credential} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-light hover:bg-primary transition-colors duration-300 group"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-light hover:bg-primary transition-colors duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 animate-in fade-in slide-in-from-bottom"
                style={{ 
                  animationDelay: `${(index + 1) * 300}ms`,
                  boxShadow: 'var(--shadow-medium)'
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4">
                  <achievement.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{achievement.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
