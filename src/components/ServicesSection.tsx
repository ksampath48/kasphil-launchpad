import { Globe, FileText, Zap, Bot, MessageCircle, Users } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom, responsive websites built for speed, SEO, and conversions." },
  { icon: FileText, title: "Landing Pages", desc: "High-converting landing pages designed to capture leads and drive action." },
  { icon: Zap, title: "Business Automation", desc: "Automate repetitive tasks and streamline your operations effortlessly." },
  { icon: Bot, title: "AI Chatbots", desc: "Intelligent chatbots that handle customer inquiries 24/7." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Engage customers with automated WhatsApp messaging flows." },
  { icon: Users, title: "CRM Systems", desc: "Custom CRM & lead automation to nurture and convert prospects." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Services Built for <span className="text-gradient">Growth</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/30 hover-lift cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-subtle flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
