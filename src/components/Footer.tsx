const services = ["Website Development", "Landing Pages", "Business Automation", "AI Chatbots", "WhatsApp Automation", "CRM Systems"];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src="/kasphil-logo.png" alt="Kasphil Logo" className="h-10 mb-2" />
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Websites & Automation That Grow Your Business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Contact</h4>
            <a href="mailto:hello@kasphil.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              hello@kasphil.com
            </a>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Kasphil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
