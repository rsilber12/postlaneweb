import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, Mail, Phone } from "lucide-react";

export const OEMSection = () => {
  const benefits = [
    "Custom designs and specifications",
    "Your branding, our manufacturing",
    "Scalable production runs",
  ];

  return (
    <section id="oem" className="section-light section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
              Manufacturing Available for OEMs
            </h2>
            <p className="text-light-muted text-lg">
              Looking to engineer your own pedestals? We manufacture for OEMs who need 
              production runs built to their exact specifications.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <ul className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 text-light-foreground"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a 
                href="tel:+15551234567"
                className="btn-secondary-dark flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <span className="text-light-muted">or email</span>
              <a 
                href="mailto:OEM@postlane.com"
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                OEM@postlane.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
