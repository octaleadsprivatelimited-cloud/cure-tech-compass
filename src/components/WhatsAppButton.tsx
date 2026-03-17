import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919014288588?text=Hello%20Cure%20Tech%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-secondary-foreground" />
  </a>
);

export default WhatsAppButton;
