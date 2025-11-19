import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "/hero2.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Enhanced Background gradient with floating elements */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary-light/30 via-background to-background"
        style={{ boxShadow: "inset 0 -1px 0 0 hsl(var(--border)/0.5)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,164,0,0.08),transparent_50%)]" />

      {/* Floating decorative elements with animation */}
      <div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div
              className="inline-flex items-center space-x-2 bg-background/40 backdrop-blur-xl px-5 py-2.5 rounded-full border border-primary/30"
              style={{
                boxShadow:
                  "0 8px 32px -8px hsl(var(--primary)/0.3), inset 0 1px 1px 0 hsl(var(--foreground)/0.05)",
              }}
            >
              <Sparkles
                className="w-4 h-4 text-primary"
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--primary)/0.5))",
                }}
              />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Therapeutic
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              ASCOT
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Health Care
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect with professional counselors, access personalized
              assessments, and engage in AI-guided wellness exercises—all in one
              platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("about")}
                className="rounded-full border-2 border-primary text-primary hover:bg-primary-light/50 text-lg"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right image with enhanced floating effect */}
          <div className="relative animate-in fade-in duration-700">
            {/* Floating card background with multiple layers */}
            <div className="absolute -top-8 -left-8 w-full h-full bg-gradient-to-br from-primary/10 to-primary-glow/5 rounded-3xl blur-2xl" />
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-xl" />

            <div className="relative  ">
              <img
                src={heroImage}
                alt="Therapeutic care environment"
                className="w-full h-auto object-cover rounded-3xl"
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl border border-border max-w-xs animate-in fade-in duration-700"
              style={{ boxShadow: "var(--shadow-medium)" }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    AI Assistant Ready
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Available 24/7 for support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src="/bg.jpg"  className="absolute top-0 left-0 h-screen w-full opacity-10"/>
    </section>
  );
};

export default Hero;
