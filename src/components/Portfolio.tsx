import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart, Play, Mail, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

// Import local images
import rangrezwaImg from "@/assets/projects/rangrezwa.jpg";
import showreelImg from "@/assets/projects/showreel.jpg";
import railwayDocImg from "@/assets/projects/railway-documentary.jpg";
import railwayTrailerImg from "@/assets/projects/railway-trailer.jpg";
import kiteFestivalImg from "@/assets/projects/kite-festival.jpg";
import soundDesignImg from "@/assets/projects/sound-design.jpg";

interface Project {
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  views: number;
  appreciations: number;
  youtubeUrl?: string;
  tools: string[];
  year: string;
  type: "video" | "documentary" | "commercial" | "music-video";
}

const projects: Project[] = [
  {
    title: "Showreel",
    description: "Professional showreel showcasing diverse creative work",
    fullDescription: "A comprehensive compilation of my best creative work spanning multiple years. This showreel demonstrates expertise in video production, motion graphics, and cinematic storytelling across various projects including documentaries, commercials, and artistic endeavors.",
    image: showreelImg,
    tags: ["Showreel", "Motion Design", "Video Production"],
    views: 64,
    appreciations: 44,
    youtubeUrl: "https://www.youtube.com/watch?v=CPFUUmTSf8g",
    tools: ["Adobe Premiere Pro", "After Effects", "Canon 5D Mark III"],
    year: "2017",
    type: "video"
  },
  {
    title: "Documentary Film On Indian Railways",
    description: "Documentary production exploring Indian railway system",
    fullDescription: "This documentary is part of Railway Design Centre's ethnic research work on Indian Railways. We traveled to various locations via second class compartments in Indian Railways. The film captures candid moments and problems faced by passengers throughout the journey. I handled camera work for this 10-member team project with two members from the film department.",
    image: railwayDocImg,
    tags: ["Documentary", "Film", "Social Impact"],
    views: 249,
    appreciations: 23,
    tools: ["Canon 5D Mark III", "Adobe Premiere Pro", "Zoom H4N"],
    year: "2017",
    type: "documentary"
  },
  {
    title: "Trailer: Railway Design Centre",
    description: "Promotional trailer for Railway Design Centre",
    fullDescription: "A compelling trailer for the Railway Design Centre documentary project. This piece serves as an introduction to the comprehensive research work conducted on Indian Railways, highlighting the human stories and experiences within the railway system.",
    image: railwayTrailerImg,
    tags: ["Trailer", "Commercial", "Documentary"],
    views: 301,
    appreciations: 31,
    tools: ["Adobe Premiere Pro", "Canon 5D Mark III", "Zoom H4N"],
    year: "2016",
    type: "commercial"
  },
  {
    title: "Kite Festival - Documentary",
    description: "Cultural documentary capturing kite festival traditions",
    fullDescription: "A vibrant documentary capturing the essence of the traditional Kite Festival in Ahmedabad. This project explores the cultural significance, community participation, and artistic traditions surrounding this colorful celebration.",
    image: kiteFestivalImg,
    tags: ["Documentary", "Culture", "Festival"],
    views: 191,
    appreciations: 20,
    tools: ["Canon EOS 600D", "Adobe Premiere Pro"],
    year: "2016",
    type: "documentary"
  },
  {
    title: "Rangrezwa by Meghdeep Bose and Sonu Nigam",
    description: "Music video production featuring renowned artists",
    fullDescription: "A beautifully crafted music video for the collaboration between acclaimed composers Meghdeep Bose and legendary singer Sonu Nigam. The project involved comprehensive video production and post-production work to create a visual narrative that complements the musical composition.",
    image: rangrezwaImg,
    tags: ["Music Video", "Production", "Collaboration"],
    views: 14,
    appreciations: 0,
    tools: ["Adobe Premiere Pro", "After Effects"],
    year: "2023",
    type: "music-video"
  },
  {
    title: "Sound Design: Wisdom Well Installation",
    description: "Sound design for interactive art installation",
    fullDescription: "An innovative sound design project for an interactive art installation called 'Wisdom Well'. This project involved creating immersive audio experiences that respond to user interactions, blending technology with artistic expression.",
    image: soundDesignImg,
    tags: ["Sound Design", "Installation", "Interactive Art"],
    views: 40,
    appreciations: 1,
    tools: ["Pro Tools", "Ableton Live", "Field Recording Equipment"],
    year: "2017",
    type: "video"
  }
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

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
          {displayedProjects.map((project, index) => (
            <ProjectModal key={index} project={project}>
              <Card className="group bg-gradient-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-cinematic cursor-pointer overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play button for videos */}
                  {project.youtubeUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-glow transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground transform translate-x-2 group-hover:translate-x-0">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-background/90 text-foreground backdrop-blur-sm"
                    >
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1).replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-2 flex-1">
                      {project.title}
                    </h3>
                    {project.youtubeUrl && (
                      <Play className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.appreciations}</span>
                      </div>
                    </div>
                    <span className="text-xs">{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            </ProjectModal>
          ))}
        </div>

        {/* See More Button */}
        {!showAll && projects.length > 3 && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="group"
            >
              <span>See All Projects</span>
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-12">
            <Button 
              onClick={() => setShowAll(false)}
              variant="outline"
              size="lg"
              className="group"
            >
              <span>Show Less</span>
              <ChevronUp className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        )}
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <p className="text-muted-foreground mb-6">
            Interested in seeing more work or collaborating on a project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@ronakparmar.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-accent text-primary-foreground rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
            <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4" />
              View Complete Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;