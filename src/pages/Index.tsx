import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/scroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Platform />
      <Team />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
