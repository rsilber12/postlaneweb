import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="relative bg-dark section-padding border-t border-primary/20 overflow-hidden">
      {/* Vibrant green gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-primary/8 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 mb-8">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's find the perfect EV charging solution for your project. 
            Our team typically responds within 1 business day.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 shadow-glow"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
