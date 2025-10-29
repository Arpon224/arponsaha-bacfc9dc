import { Mail, Linkedin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpeg';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm font-medium">
                Textile Engineer
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-foreground">ARPON </span>
              <span className="text-primary">SAHA</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A technically skilled and management-focused Textile Engineering graduate with hands-on industrial experience 
              in knit production, dyeing, testing, and merchandising coordination.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" onClick={() => document.getElementById('experience')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                View Experience
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://www.linkedin.com/in/arponsaha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:arponbutextem65@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+8801789849716" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-primary" size={32} />
      </div>
    </section>;
};
export default Hero;