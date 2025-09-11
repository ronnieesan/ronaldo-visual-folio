import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, X } from "lucide-react";

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

interface ProjectModalProps {
  project: Project;
  children: React.ReactNode;
}

const ProjectModal = ({ project, children }: ProjectModalProps) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-left">{project.title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Video Embed */}
          {project.youtubeUrl && (
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary/20">
              <iframe
                src={getYouTubeEmbedUrl(project.youtubeUrl)}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* Project Image if no video */}
          {!project.youtubeUrl && (
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Views:</span>
                    <span>{project.views}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Appreciations:</span>
                    <span>{project.appreciations}</span>
                  </div>
                </div>
              </div>

              {project.tools.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {project.youtubeUrl && (
                <Button
                  className="w-full bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;