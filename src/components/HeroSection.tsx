import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 bg-secondary/50 text-xs text-muted-foreground mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="w-2 h-2 rounded-full bg-gradient-glow" />
          Websites & Automation That Grow Your Business
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Build Smarter{" "}
          <span className="text-gradient">Websites</span> &{" "}
          <span className="text-gradient">Automation</span> Systems
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          Kasphil helps businesses launch modern, high-converting websites and automated workflows that drive growth — from landing pages to AI-powered chatbots.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Button variant="gradient" size="lg" className="text-base px-8" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Start Your Project
            <ArrowRight size={18} />
          </Button>
          <Button variant="ghost-light" size="lg" className="text-base px-8" onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
