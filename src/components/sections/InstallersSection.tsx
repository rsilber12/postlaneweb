import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Zap, Package, Users, ArrowRight } from "lucide-react";

export const InstallersSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Rapid Customization",
      description: "Fully customized pedestals and signage with rapid turnaround times, ensuring project specs are met without delay.",
      badge: null,
    },
    {
      icon: Package,
      title: "Infrastructure Bundles",
      description: "Streamline your procurement. We offer exclusive bundle discounts when you combine pedestals, bollards, and signage for your site.",
      badge: "Cost Saving",
      link: "Ask about bundle pricing",
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Experience seamless support. Every client is assigned a designated manager to guide your project from start to finish.",
      badge: null,
    },
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
            Built for Installers, Designed for Scale
          </h2>
          <p className="text-light-muted text-lg max-w-3xl mx-auto">
            We partner with commercial clients to deliver EV infrastructure solutions 
            that emphasize usability, safety, and long-term reliability.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="card-feature h-full relative">
                {feature.badge && (
                  <span className="absolute top-4 right-4 bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.badge}
                  </span>
                )}
                <div className="icon-badge-light">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-light-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-muted mb-4">
                  {feature.description}
                </p>
                {feature.link && (
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    {feature.link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
