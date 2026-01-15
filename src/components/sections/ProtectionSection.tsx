import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { ArrowRight, Shield, Square } from "lucide-react";

export const ProtectionSection = () => {
  const protectionProducts = [
    {
      icon: Shield,
      title: "Bollards",
      description: "Protective steel bollards engineered for EV environments.",
    },
    {
      icon: Square,
      title: "Wallards",
      description: "Wall-mounted guards for tighter spaces.",
    },
  ];

  return (
    <section className="bg-dark section-padding border-t border-border">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Add-on Protection
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {protectionProducts.map((product, index) => (
            <StaggerItem key={index}>
              <div className="card-product group cursor-pointer">
                <div className="icon-badge">
                  <product.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  See products
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            Download Catalog
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
