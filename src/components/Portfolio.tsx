import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Heart } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  views: number;
  appreciations: number;
  link: string;
}

const projects: Project[] = [
  {
    title: "Rangrezwa by Meghdeep Bose and Sonu Nigam",
    description: "Music video production featuring renowned artists",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/e8aca0165665537.Y3JvcCwxMzc1LDEwNzYsNDMyLDA.jpg",
    tags: ["Music Video", "Production"],
    views: 14,
    appreciations: 0,
    link: "https://www.behance.net/gallery/165665537/Rangrezwa-by-Meghdeep-Bose-and-Sonu-Nigam"
  },
  {
    title: "Showreel",
    description: "Professional showreel showcasing diverse creative work",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/92456b45228717.Y3JvcCw5ODEsNzY4LDI0NSww.jpg",
    tags: ["Showreel", "Motion Design"],
    views: 64,
    appreciations: 44,
    link: "https://www.behance.net/gallery/45228717/Showreel"
  },
  {
    title: "Documentary Film On Indian Railways",
    description: "Documentary production exploring Indian railway system",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/b87a3f45112929.Y3JvcCwxNTAwLDExNzMsMTg5LDEyMg.jpg",
    tags: ["Documentary", "Film"],
    views: 249,
    appreciations: 23,
    link: "https://www.behance.net/gallery/45112929/Documentary-FIlm-On-Indian-Railways"
  },
  {
    title: "Trailer: Railway Design Centre",
    description: "Promotional trailer for Railway Design Centre",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/6268c244613547.Y3JvcCw2ODEsNTMzLDM1NiwxNDE.jpeg",
    tags: ["Trailer", "Commercial"],
    views: 301,
    appreciations: 31,
    link: "https://www.behance.net/gallery/44613547/Trailer-Railway-Design-Centre"
  },
  {
    title: "Kite Festival - Documentary",
    description: "Cultural documentary capturing kite festival traditions",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/2dc6fd44609667.Y3JvcCw5ODQsNzcwLDIyMyww.jpeg",
    tags: ["Documentary", "Culture"],
    views: 191,
    appreciations: 20,
    link: "https://www.behance.net/gallery/44609667/Kite-Festival-Documentary"
  },
  {
    title: "Sound Design: Wisdom Well Installation",
    description: "Sound design for interactive art installation",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/a6d6fc45314529.Y3JvcCwyMDE2LDE1NzgsMCw5NA.jpg",
    tags: ["Sound Design", "Installation"],
    views: 40,
    appreciations: 1,
    link: "https://www.behance.net/gallery/45314529/Sound-Design-Wisdom-well-installation"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated selection of creative projects spanning film production, documentaries, 
            sound design, and commercial work across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-cinematic cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{project.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>{project.appreciations}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;