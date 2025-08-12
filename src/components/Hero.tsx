import { Button } from "@/components/ui/enhanced-button";
import { Github, Mail, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import HeroTechSphere from "./HeroTechSphere";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-glass border border-glass rounded-full text-sm font-medium text-muted-foreground backdrop-blur-sm">
                Frontend Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 animate-glow leading-tight">
              Alex Chen
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft beautiful, performant web experiences with modern technologies. 
              Specializing in React, TypeScript, and creating pixel-perfect user interfaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                View My Work
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl" className="group w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-6">
              <a 
                href="https://github.com" 
                className="p-3 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
              >
                <Github className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
              <a 
                href="mailto:alex@example.com" 
                className="p-3 bg-glass border border-glass rounded-full hover:border-primary/50 transition-all duration-300 hover:shadow-glow backdrop-blur-sm group"
              >
                <Mail className="h-6 w-6 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>
          
          {/* Right Content - 3D Tech Sphere */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="w-full max-w-lg">
              <HeroTechSphere />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
