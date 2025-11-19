import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-2xl  flex items-center justify-center ">
              <img src="/logo.png" className="rounded-full"/>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Therapeutic
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-xl text-foreground hover:text-primary hover:bg-primary-light/50 transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Dialog open={isGetStartedOpen} onOpenChange={setIsGetStartedOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </DialogTrigger>
              <DialogContent 
                className="sm:max-w-md border-0 bg-background/95 backdrop-blur-2xl p-0 overflow-hidden" 
                style={{ 
                  boxShadow: '0 25px 50px -12px hsl(var(--primary)/0.25), 0 0 0 1px hsl(var(--primary)/0.1), inset 0 1px 2px 0 hsl(var(--foreground)/0.05)' 
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary-glow/10 rounded-full blur-3xl" />
                
                <div className="relative p-8">
                  <DialogHeader className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-2" style={{ boxShadow: '0 10px 30px -5px hsl(var(--primary)/0.5)' }}>
                      <Download className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      Get Started
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Choose how you'd like to access ASCOT Mental Health Care
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="flex flex-col gap-3 mt-8">
                    <Button
                      onClick={() => {
                        window.open('https://yourapp.com/download', '_blank');
                        setIsGetStartedOpen(false);
                      }}
                      className="h-14 rounded-2xl bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-base font-semibold relative overflow-hidden group"
                      style={{ boxShadow: '0 10px 30px -5px hsl(var(--primary)/0.4)' }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Download className="mr-2 h-5 w-5 relative z-10" />
                      <span className="relative z-10">Download App</span>
                    </Button>
                    
                    <Button
                      onClick={() => {
                        scrollToSection("hero");
                        setIsGetStartedOpen(false);
                      }}
                      variant="outline"
                      className="h-14 rounded-2xl border-2 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] text-base font-medium relative overflow-hidden group"
                      style={{ boxShadow: '0 4px 15px -3px hsl(var(--primary)/0.1), inset 0 1px 1px 0 hsl(var(--foreground)/0.05)' }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Globe className="mr-2 h-5 w-5 relative z-10" />
                      <span className="relative z-10">Continue to Web</span>
                    </Button>
                  </div>
                  
                  <p className="text-xs text-center text-muted-foreground mt-6">
                    Both platforms offer the same great experience
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-primary-light/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-3 rounded-xl text-left text-foreground hover:text-primary hover:bg-primary-light/50 transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Dialog open={isGetStartedOpen} onOpenChange={setIsGetStartedOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full rounded-full bg-gradient-to-r from-primary to-primary-glow mt-2">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent 
                  className="sm:max-w-md border-0 bg-background/95 backdrop-blur-2xl p-0 overflow-hidden mx-4" 
                  style={{ 
                    boxShadow: '0 25px 50px -12px hsl(var(--primary)/0.25), 0 0 0 1px hsl(var(--primary)/0.1), inset 0 1px 2px 0 hsl(var(--foreground)/0.05)' 
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
                  <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl" />
                  
                  <div className="relative p-6 sm:p-8">
                    <DialogHeader className="space-y-3">
                      <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mb-2" style={{ boxShadow: '0 10px 30px -5px hsl(var(--primary)/0.5)' }}>
                        <Download className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
                      </div>
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        Get Started
                      </DialogTitle>
                      <DialogDescription className="text-center text-muted-foreground text-sm">
                        Choose how you'd like to access ASCOT Mental Health Care
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex flex-col gap-3 mt-6 sm:mt-8">
                      <Button
                        onClick={() => {
                          window.open('https://yourapp.com/download', '_blank');
                          setIsGetStartedOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="h-12 sm:h-14 rounded-2xl bg-gradient-to-r from-primary to-primary-glow hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base font-semibold relative overflow-hidden group"
                        style={{ boxShadow: '0 10px 30px -5px hsl(var(--primary)/0.4)' }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                        <span className="relative z-10">Download App</span>
                      </Button>
                      
                      <Button
                        onClick={() => {
                          scrollToSection("hero");
                          setIsGetStartedOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        variant="outline"
                        className="h-12 sm:h-14 rounded-2xl border-2 border-border/50 bg-background/50 backdrop-blur-xl hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base font-medium relative overflow-hidden group"
                        style={{ boxShadow: '0 4px 15px -3px hsl(var(--primary)/0.1), inset 0 1px 1px 0 hsl(var(--foreground)/0.05)' }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Globe className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                        <span className="relative z-10">Continue to Web</span>
                      </Button>
                    </div>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4 sm:mt-6">
                      Both platforms offer the same great experience
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
