import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="bg-dark section-padding border-t border-border">
      <div className="container-custom">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's find the perfect EV charging solution for your project. 
            Our team typically responds within 1 business day.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
