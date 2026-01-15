import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Users, Wrench, Shield, DollarSign } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expertise, included",
      description: "Not sure what you need? We'll walk you through your options and recommend the right solution.",
    },
    {
      icon: Wrench,
      title: "Installation ready",
      description: "Our pedestals are pre-drilled for your charger and include a universal access port for easy installs.",
    },
    {
      icon: Shield,
      title: "Engineered tough",
      description: "Crash-resistant, commercial-grade, and made from rust-proof, anodized steel.",
    },
    {
      icon: DollarSign,
      title: "Competitively priced",
      description: "With even better pricing when you bundle or bulk order.",
    },
  ];

  return (
    <section id="why-us" className="bg-dark section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Partnership That Delivers
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="icon-badge mx-auto">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-cream mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
