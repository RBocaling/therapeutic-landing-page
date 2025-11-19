import { Heart, Shield, Users, Zap } from "lucide-react";
import aboutImage from "/about.png";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is rooted in empathy and understanding, creating a safe space for healing.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your data is protected with enterprise-grade encryption and strict confidentiality protocols.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed professionals with years of experience in mental health and therapeutic care.",
    },
    {
      icon: Zap,
      title: "AI-Enhanced",
      description: "Cutting-edge technology augments human expertise for better outcomes and accessibility.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-primary-light/10" style={{ boxShadow: 'inset 0 1px 0 0 hsl(var(--border)/0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Therapeutic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridging traditional therapeutic excellence with modern technology to deliver 
            accessible, effective mental health care for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="rounded-3xl" >
              <img
                src={aboutImage}
                alt="Our therapeutic clinic"
                className="w-[80%] h-auto object-cover rounded-3xl"
              />
          </div>

          <div className="space-y-6 animate-in fade-in duration-700">
            <h3 className="text-3xl font-bold text-foreground">
              Transforming Mental Health Care Through Innovation
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the belief that quality mental health care should be accessible to all, 
              Therapeutic combines the wisdom of experienced professionals with the power of 
              artificial intelligence. Our platform offers a comprehensive suite of services designed 
              to support your mental wellness journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From initial assessments and AI-guided daily exercises to direct counselor communication 
              and structured courses, we provide multiple pathways to better mental health. Our innovative 
              approach has helped thousands of individuals achieve lasting positive change.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-primary-light/50 px-6 py-3 rounded-full">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">HIPAA Compliant & Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 animate-in fade-in slide-in-from-bottom"
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: 'var(--shadow-medium)'
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
