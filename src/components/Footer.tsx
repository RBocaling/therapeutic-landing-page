import { Heart, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
    services: [
      { label: "Assessment", href: "#services" },
      { label: "Counseling", href: "#services" },
      { label: "AI Support", href: "#services" },
      { label: "Courses", href: "#services" },
    ],
    support: [
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-primary-light/10 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center  gap-8 mb- w-full">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-14 h-14 rounded-2xl  flex items-center justify-center ">
                <img src="/logo.png" className="rounded-full" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Therapeutic
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Empowering mental wellness through innovative technology and
              compassionate care. Your journey to better mental health starts
              here.
            </p>
            {/* <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-light hover:bg-primary transition-colors duration-300 flex items-center justify-center group"
                >
                  <social.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div> */}
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className=" flex flex-col gap-4 md:flex-row justify-between items-center flex-1 md:px-9">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Therapeutic. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with{" "}
            <Heart className="w-4 h-4 mx-1 text-primary fill-primary" /> for
            better mental health
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
