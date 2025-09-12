import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Heart, Play, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";

const FullPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-background to-background/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Complete Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Explore my complete collection of creative projects spanning film production, 
            documentaries, sound design, and commercial work.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
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
        </div>
      </section>
    </div>
  );
};

export default FullPortfolio;