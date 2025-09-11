import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Users, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Video Production", "Motion Design", "Sound Design", "Photography",
    "Adobe Creative Suite", "Film Making", "Documentary Production",
    "Commercial Videos", "Music Videos", "Post-Production"
  ];

  const experience = [
    {
      role: "Senior Video Specialist",
      company: "Unacademy",
      location: "Bangalore, India",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      role: "Video Specialist", 
      company: "Unacademy",
      location: "Bangalore, India",
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      role: "Multidisciplinary Designer",
      company: "Self-Employed",
      location: "Bangalore, India",
      icon: <Briefcase className="h-5 w-5" />
    }
  ];

  const stats = [
    { label: "Project Views", value: "1,391", icon: <Users className="h-6 w-6" /> },
    { label: "Appreciations", value: "103", icon: <Award className="h-6 w-6" /> },
    { label: "Years Experience", value: "10+", icon: <Briefcase className="h-6 w-6" /> },
    { label: "Projects Completed", value: "50+", icon: <Award className="h-6 w-6" /> }
  ];

  return (
    <section className="py-20 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creative Video Producer & Motion Designer with 10+ years of experience crafting 
            high-impact content across education, entertainment, and marketing. Proven ability 
            to lead cross-functional teams, streamline production workflows, and deliver 
            engaging visual assets using the Adobe Creative Suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{exp.role}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-secondary/50 text-secondary-foreground border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Available for</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Freelance Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Video Production</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Sound Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Photography Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border text-center group hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;