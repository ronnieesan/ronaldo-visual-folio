import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Youtube, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/ronak-profile.jpg";
const Hero = () => {
    return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Clean minimal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Profile Image */}
        <div className="mb-8">
          <img src={profileImg} alt="Ronak Parmar" className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary shadow-glow" />
        </div>
        
        {/* Main Content */}
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          Creative Professional
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight leading-none">
          We craft <em className="italic font-light">high-impact</em><br />
          visual content for<br />
          <span className="text-primary">Creative Brands</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          We create, optimize, and scale visual storytelling that generates engagement and improves brand impact across education, entertainment, and marketing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 rounded-full px-8">
            <Mail className="mr-2 h-5 w-5" />
            Start a Project
          </Button>
          <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-full px-8" asChild>
            <a href="/portfolio">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Complete Portfolio
            </a>
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          
          <a href="https://www.linkedin.com/in/ronakparmar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="http://youtube.com/@AbstractThoughtsIn" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
    </section>;
};
export default Hero;