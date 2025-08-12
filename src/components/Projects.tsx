import { Button } from "@/components/ui/enhanced-button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Dashboard",
      description: "A modern admin dashboard for e-commerce platforms with real-time analytics, inventory management, and customer insights.",
      tech: ["Vue", "TypeScript", "Javascript", "SCSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com/ontopcommunity/vuestic-admin",
      live: "https://admin-demo.vuestic.dev/dashboard"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      tech: ["Vue.js", "OpenWeather API", "Mapbox", "PWA"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern web development techniques and beautiful animations.",
      tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-glass border border-glass rounded-2xl overflow-hidden backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-muted/30 rounded border border-muted/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="gradient" size="sm" className="group">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
