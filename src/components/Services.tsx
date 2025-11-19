import { 
  FileCheck, 
  ClipboardList, 
  Dumbbell, 
  MessageCircle, 
  Bot, 
  UserPlus, 
  Calendar, 
  GraduationCap, 
  Megaphone 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import servicesImage from "@/assets/services-digital.jpg";
import wellnessImage from "@/assets/wellness-practice.jpg";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "KYC Verification",
      description: "Secure identity verification ensuring a safe and trusted environment for all users.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: ClipboardList,
      title: "MHI-38 Assessment",
      description: "Comprehensive mental health inventory survey for accurate baseline evaluation.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Dumbbell,
      title: "TLC Guided Exercises",
      description: "AI-generated daily therapeutic exercises tailored to your specific needs and progress.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageCircle,
      title: "Counselor Chat",
      description: "Direct messaging with licensed professional counselors for personalized support.",
      color: "from-primary to-primary-glow",
    },
    {
      icon: Bot,
      title: "K.A. AI Assistant",
      description: "24/7 intelligent chatbot providing immediate support and resource guidance.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: UserPlus,
      title: "Smart Referrals",
      description: "Modern system connecting students with the most suitable counselors based on needs.",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Calendar,
      title: "Scheduling System",
      description: "Easy appointment booking and calendar management for therapy sessions.",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: GraduationCap,
      title: "Wellness Courses",
      description: "Structured educational programs on mental health topics and coping strategies.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Megaphone,
      title: "Campaign Management",
      description: "Community announcements, resources, and general information sharing platform.",
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-primary-light/10 to-background" style={{ boxShadow: 'inset 0 1px 0 0 hsl(var(--border)/0.3)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete suite of tools and services designed to support every aspect of your mental wellness journey
          </p>
        </div>

        {/* Featured Services Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative rounded-3xl overflow-hidden border border-border/50 group animate-in fade-in slide-in-from-left duration-700" style={{ boxShadow: 'var(--shadow-strong)' }}>
            <img src={servicesImage} alt="Digital health services" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
              <div className="text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">AI-Powered Support</h3>
                <p className="text-primary-foreground/90">Intelligent assistance available anytime, anywhere</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border/50 group animate-in fade-in slide-in-from-right duration-700 delay-200" style={{ boxShadow: 'var(--shadow-strong)' }}>
            <img src={wellnessImage} alt="Wellness practices" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-glow/80 to-transparent flex items-end p-8">
              <div className="text-primary-foreground">
                <h3 className="text-2xl font-bold mb-2">Guided Wellness</h3>
                <p className="text-primary-foreground/90">Personalized exercises for mind and body</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group p-6 border border-border/50 hover:border-primary/40 bg-card animate-in fade-in slide-in-from-bottom transition-all duration-500"
              style={{ 
                animationDelay: `${index * 50}ms`,
                boxShadow: 'var(--shadow-medium)'
              }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`} style={{ boxShadow: 'var(--shadow-soft)' }}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-light/30 to-primary-light/10 rounded-3xl p-12 border border-primary/20 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Begin Your Wellness Journey?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of individuals who have transformed their mental health with our comprehensive platform
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
