import { Building2, Rocket, Users } from "lucide-react";

const proofs = [
  { icon: Building2, label: "Modern Businesses", detail: "Trusted by growing companies" },
  { icon: Rocket, label: "Startups", detail: "Launching MVPs fast" },
  { icon: Users, label: "Agencies", detail: "White-label partnerships" },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-10">
          Trusted by forward-thinking teams
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {proofs.map((p) => (
            <div key={p.label} className="flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-subtle border border-border/30 hover-lift">
              <p.icon size={28} className="text-primary" />
              <span className="font-display font-semibold text-foreground">{p.label}</span>
              <span className="text-xs text-muted-foreground">{p.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
