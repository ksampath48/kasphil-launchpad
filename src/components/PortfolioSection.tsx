import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Restaurant Website",
    category: "Web Development",
    desc: "A modern, visually stunning website for a fine-dining restaurant with online reservations.",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Startup Landing Page",
    category: "Landing Page",
    desc: "A high-converting SaaS landing page that doubled sign-up rates in the first month.",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Lead Automation System",
    category: "Automation",
    desc: "End-to-end lead capture and nurturing system with CRM integration and WhatsApp follow-ups.",
    gradient: "from-primary/15 to-accent/25",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-border/30 overflow-hidden hover-lift cursor-pointer"
            >
              {/* Gradient preview area */}
              <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="font-display text-lg font-semibold text-foreground/60 group-hover:text-foreground transition-colors">
                  {p.category}
                </span>
              </div>
              <div className="p-6 bg-gradient-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
