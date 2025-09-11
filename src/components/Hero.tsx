import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Youtube, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="mb-8">
          <img 
            src={profileImg}
            alt="Ronak Parmar"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-glow"
          />
        </div>
        
        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Ronak Parmar
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
          Film Maker • Photographer • Sound Designer
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Creative Video Producer & Motion Designer with 10+ years of experience crafting high-impact content across education, entertainment, and marketing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-accent text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Hire Me
          </Button>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <ExternalLink className="mr-2 h-5 w-5" />
            View Portfolio
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://ronakparmar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ronakparmar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="http://youtube.com/@AbstractThoughtsIn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;