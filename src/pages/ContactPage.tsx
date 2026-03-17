import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({ title: "Validation Error", description: result.error.errors[0].message, variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="pt-20">
      <section className="relative py-24 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-xl">Get in touch for wholesale inquiries and partnership opportunities.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <SectionHeading title="Send Us a Message" center={false} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" size="lg" className="w-full sm:w-auto px-10">Send Message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <SectionHeading title="Contact Information" center={false} />
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 9014288588", href: "tel:+919014288588" },
                { icon: Mail, label: "Email", value: "info@curetechpharma.com", href: "mailto:info@curetechpharma.com" },
                { icon: MapPin, label: "Address", value: "H.No: 7-1-211/32, 3rd Floor, D.K Road, Ameerpet, Opp. Sonubhai Ammavari Temple, Hyderabad – 500016" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-semibold hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-foreground font-semibold text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919014288588"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-secondary/10 rounded-xl border border-secondary/20 hover:bg-secondary/20 transition-colors"
            >
              <MessageCircle className="h-8 w-8 text-secondary" />
              <div>
                <div className="font-semibold text-foreground">Chat on WhatsApp</div>
                <div className="text-sm text-muted-foreground">Quick response guaranteed</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7!2d78.4487!3d17.4375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE1LjAiTiA3OMKwMjYnNTUuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Cure Tech Pharma Location"
        />
      </section>
    </main>
  );
};

export default ContactPage;
