import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-glow opacity-90" />
          <div className="absolute inset-0 grid-pattern opacity-10" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground mb-4">
              Ready to Launch Your Website?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Let's build something extraordinary together. Get a free consultation and project estimate today.
            </p>
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start Your Project
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
