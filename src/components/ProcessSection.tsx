import { Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Lightbulb, num: "01", title: "Strategy", desc: "We understand your goals, audience, and market to craft a winning plan." },
  { icon: Code2, num: "02", title: "Build", desc: "Our team designs and develops your solution with precision and speed." },
  { icon: Rocket, num: "03", title: "Launch", desc: "We deploy, optimize, and ensure everything runs flawlessly from day one." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">How We Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Our <span className="text-gradient">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center p-8 rounded-2xl bg-gradient-card border border-border/30 hover-lift">
              <span className="font-display text-5xl font-bold text-gradient opacity-30">{s.num}</span>
              <div className="w-14 h-14 rounded-xl bg-gradient-subtle flex items-center justify-center mx-auto mt-4 mb-4">
                <s.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-glow" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
