import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink, Youtube, Linkedin, MapPin, Briefcase } from "lucide-react";

const Contact = () => {
  return <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          Get In Touch
        </div>
        
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Let's Work <em className="italic font-light">Together</em>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-light">
          Ready to bring your creative vision to life? I'm available for freelance projects 
          and collaborations. Let's create something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <Card className="bg-card border shadow-elegant hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-primary font-medium">Available for Freelance</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-card border shadow-elegant hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Services Offered</h3>
              
              <div className="space-y-4 text-left">
                {["Video Production & Editing", "Motion Graphics Design", "Sound Design & Audio Production", "Documentary Filmmaking", "Commercial Video Creation", "Photography Services"].map((service, index) => <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="mailto:contact@ronakparmar.com">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 rounded-full px-8">
              <Mail className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
          </a>
          
          <Button variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 rounded-full px-8" asChild>
            <a href="/portfolio">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Complete Portfolio
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          
          
          <a href="https://www.linkedin.com/in/ronakparmar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          
          <a href="http://youtube.com/@AbstractThoughtsIn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">YouTube</span>
          </a>
          
          <a href="https://www.behance.net/ronaldo472" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group">
            <ExternalLink className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">Behance</span>
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;
