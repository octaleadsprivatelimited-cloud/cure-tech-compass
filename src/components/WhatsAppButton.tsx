import whatsappIcon from "@/assets/whatsapp.svg";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919014288588?text=Hello%20Cure%20Tech%20Pharma%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
  </a>
);

export default WhatsAppButton;