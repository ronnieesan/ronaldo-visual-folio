import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ExternalLink, Youtube, Linkedin, MapPin, Phone, Briefcase } from "lucide-react";
const Contact = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to bring your creative vision to life? I'm available for freelance projects 
          and collaborations. Let's create something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Bangalore, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Status</p>
                    <p className="text-primary font-medium">Available for Freelance</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-gradient-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Services</h3>
              
              <div className="space-y-3 text-left">
                {["Video Production & Editing", "Motion Graphics Design", "Sound Design & Audio Production", "Documentary Filmmaking", "Commercial Video Creation", "Photography Services"].map((service, index) => <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{service}</span>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-accent text-primary-foreground font-semibold hover:shadow-glow transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Start a Project
          </Button>
          
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
            <a href="https://www.behance.net/ronaldo472" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              View Full Portfolio
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