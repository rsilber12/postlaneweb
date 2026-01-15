import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Cable, Settings, Tag } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Cable,
      title: "Streamlined cable management",
      description: "From integrated springs and counterweights. Manual cable management also available.",
    },
    {
      icon: Settings,
      title: "Customizable, any way you need",
      description: "Heights, finishes, access points – whatever you need, we'll get it done.",
    },
    {
      icon: Tag,
      title: "Optional branded toppers",
      description: "Printed with your company's name – or with a sponsor's logo.",
    },
  ];

  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
            Have it Your Way
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="text-center">
                <div className="icon-badge-light mx-auto">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-light-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-light-muted">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
