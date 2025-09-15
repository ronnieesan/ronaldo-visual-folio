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
    <section className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            About Me
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Creative <em className="italic font-light">Professional</em> with 
            <span className="text-primary"> 10+ Years</span> Experience
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Creative Video Producer & Motion Designer with 10+ years of experience crafting 
            high-impact content across education, entertainment, and marketing. Proven ability 
            to lead cross-functional teams, streamline production workflows, and deliver 
            engaging visual assets using the Adobe Creative Suite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-card border shadow-elegant hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-foreground">{exp.role}</h4>
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
            <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Award className="h-5 w-5" />
              </div>
              Skills & Expertise
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors duration-300 px-4 py-2"
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <Card className="bg-card border shadow-elegant">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Available Services</h4>
                <div className="space-y-3">
                  {["Freelance Projects", "Video Production", "Sound Design", "Photography Services"].map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border shadow-elegant text-center group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">{stat.value}</div>
                <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;