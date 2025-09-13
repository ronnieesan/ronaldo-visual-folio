import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, X } from "lucide-react";
import { Project } from "@/data/projects";
import React from "react";

interface ProjectModalProps {
  project: Project;
  children: React.ReactNode;
}

const ProjectModal = ({ project, children }: ProjectModalProps) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}`;
  };

  const getSoundCloudEmbedUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  };

  const ImageGallery = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    return (
      <div className="w-full">
        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 justify-center overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 ${
                  currentIndex === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderMediaContent = () => {
    if (project.youtubeUrl) {
      return (
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary/20">
          <iframe
            src={getYouTubeEmbedUrl(project.youtubeUrl)}
            title={project.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    
    if (project.vimeoUrl) {
      return (
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-secondary/20">
          <iframe
            src={getVimeoEmbedUrl(project.vimeoUrl)}
            title={project.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      );
    }
    
    if (project.soundCloudUrl) {
      return (
        <div className="w-full bg-muted rounded-lg overflow-hidden">
          <iframe
            src={getSoundCloudEmbedUrl(project.soundCloudUrl)}
            title={project.title}
            className="w-full h-[300px]"
            allow="autoplay"
          />
        </div>
      );
    }
    
    if (project.imageGallery && project.imageGallery.length > 0) {
      return <ImageGallery images={project.imageGallery} />;
    }
    
    return (
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    );
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
          {renderMediaContent()}

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

              {project.scribdUrls && project.scribdUrls.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Documents</h4>
                  <div className="space-y-2">
                    {project.scribdUrls.map((url, index) => (
                      <Button key={index} variant="outline" asChild className="w-full justify-start">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Document {index + 1} on Scribd
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              )}
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

              <div className="space-y-2">
                {project.youtubeUrl && (
                  <Button className="w-full bg-gradient-accent text-primary-foreground hover:shadow-glow transition-all duration-300" asChild>
                    <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                )}
                {project.vimeoUrl && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.vimeoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Watch on Vimeo
                    </a>
                  </Button>
                )}
                {project.soundCloudUrl && (
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.soundCloudUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Listen on SoundCloud
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;