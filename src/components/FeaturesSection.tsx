import { Gauge, Search, Target, Cog } from "lucide-react";

const features = [
  { icon: Gauge, title: "Fast Performance", desc: "Lightning-fast load times that keep visitors engaged." },
  { icon: Search, title: "SEO Optimized", desc: "Built to rank higher and drive organic traffic." },
  { icon: Target, title: "Conversion Focused", desc: "Every element is designed to convert visitors into customers." },
  { icon: Cog, title: "Automation Driven", desc: "Automate your workflows and scale without extra effort." },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Why Kasphil</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-gradient">Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="text-center p-6 rounded-2xl bg-gradient-card border border-border/30 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center mx-auto mb-4">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
