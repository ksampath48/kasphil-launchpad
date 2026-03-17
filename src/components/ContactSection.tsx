import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-primary mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-gradient">Talk</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-secondary/50 border-border/50 h-12 focus:border-primary"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-secondary/50 border-border/50 h-12 focus:border-primary"
            />
            <Textarea
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" type="submit" className="flex-1">
                Send Message
                <Send size={16} />
              </Button>
              <Button
                variant="ghost-light"
                size="lg"
                type="button"
                className="flex-1"
                onClick={() => window.open("https://wa.me/", "_blank")}
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
