import { useState } from "react";
import PageSEO from "@/components/PageSEO";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import ScrollAnimate from "@/components/ScrollAnimate";
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

  const inputClass = "w-full px-4 py-3 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition placeholder:text-muted-foreground";

  return (
    <main>
      <PageSEO title="Contact Us" description="Get in touch with Cure Tech Pharma for wholesale pharmaceutical inquiries, distribution partnerships, and product information. Call +91 9014288588." path="/contact" />
      <section className="bg-secondary py-14 md:py-20 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-secondary-foreground">Contact Us</h1>
          <p className="text-secondary-foreground/60 mt-3 text-sm md:text-base">Home / Contact Us</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-4 grid lg:grid-cols-5 gap-8 md:gap-12">
          <ScrollAnimate>
            <div className="lg:col-span-2 space-y-5 md:space-y-6">
              <SectionHeading title="Get In" highlight="Touch" center={false} />

              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+91 9014288588", href: "tel:+919014288588" },
                { icon: Mail, label: "Email", value: "info@curetechpharma.in", href: "mailto:info@curetechpharma.in" },
                { icon: MapPin, label: "Address", value: "H.No: 7-1-211/32, 3rd Floor, D.K Road, Ameerpet, Opp. Sonubhai Ammavari Temple, Hyderabad – 500016" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground text-sm font-medium hover:text-primary transition">{item.value}</a>
                    ) : (
                      <p className="text-foreground text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919014288588"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-accent/10 rounded border border-accent/20 hover:bg-accent/20 transition"
              >
                <MessageCircle className="h-7 w-7 text-accent" />
                <div>
                  <div className="font-heading font-semibold text-sm text-foreground">Chat on WhatsApp</div>
                  <div className="text-xs text-muted-foreground">Quick response guaranteed</div>
                </div>
              </a>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={200} className="lg:col-span-3">
            <div className="bg-section-alt p-6 md:p-8 rounded">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-5 md:mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className={inputClass} placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input className={inputClass} placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <input className={inputClass} placeholder="Email Address *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <textarea className={`${inputClass} resize-none`} rows={5} placeholder="Your Message *" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button
                  type="submit"
                  className="px-10 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded hover:bg-primary/90 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <ScrollAnimate>
        <section className="h-60 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3959203!2d78.4441243!3d17.4381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90ce43baaaab%3A0x9c2d5db474f5b6b7!2sCure%20Tech%20Pharma!5e0!3m2!1sen!2sin!4v1710000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cure Tech Pharma Location"
          />
        </section>
      </ScrollAnimate>
    </main>
  );
};

export default ContactPage;
