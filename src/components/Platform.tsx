import platformDesktop from "@/assets/platform-desktop.png";
import platformMobile from "@/assets/platform-mobile.png";
import { Sparkles } from "lucide-react";

const Platform = () => {
  return (
    <section
      className="py-12 bg-gradient-to-b from-background to-primary-light/10 overflow-hidden"
      style={{ boxShadow: "inset 0 1px 0 0 hsl(var(--border)/0.3)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-9 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless mental health experience across all your devices -
            beautifully designed, intuitively crafted
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Desktop and Mobile Combined View */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Desktop Preview */}
            <div className="relative animate-in fade-in duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-glow/10 blur-3xl" />
              <div className="relative md:h-[500px] flex items-center justify-center">
                <img
                  src={platformDesktop}
                  alt="AI Guided TLC platform desktop view showing login and app interface"
                  className="w-full h-full object-contain rounded-2xl  transition-all duration-500"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Desktop Experience
                </h3>
                <p className="text-muted-foreground">
                  Full-featured platform with seamless authentication and
                  comprehensive tools
                </p>
              </div>
            </div>

            {/* Mobile Preview */}
            <div className="relative animate-in fade-in duration-700">
              {/* <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-primary-glow/10 blur-3xl" /> */}
              <div className="relative md:h-[500px] flex items-center justify-center max-w-sm mx-auto">
                <img
                  src={platformMobile}
                  alt="AI Guided TLC mobile dashboard showing mental health score and quick actions"
                  className="w-full h-full object-contain rounded-3xl transition-all duration-500"
                  // style={{ boxShadow: "var(--shadow-glow)" }}
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Mobile Dashboard
                </h3>
                <p className="text-muted-foreground">
                  Track your progress, book sessions, and access support on the
                  go
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                title: "Responsive Design",
                description:
                  "Perfectly optimized for desktop, tablet, and mobile devices",
              },
              {
                title: "Real-time Updates",
                description:
                  "Track your mental health journey with live progress monitoring",
              },
              {
                title: "Secure & Private",
                description:
                  "Your data is protected with enterprise-grade security",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 animate-in fade-in"
                style={{
                  animationDelay: `${(index + 1) * 200}ms`,
                  boxShadow: "var(--shadow-medium)",
                }}
              >
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
