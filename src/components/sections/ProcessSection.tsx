import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Just tell us the specs",
      description: "Including charger brand, height, finish, and any custom requirements.",
    },
    {
      number: "2",
      title: "We'll ship fast",
      description: "Standard models ship immediately. Custom configurations are ready in days.",
    },
    {
      number: "3",
      title: "Installation's a breeze",
      description: "Thanks to pre-drilled holes and built-in access ports.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-dark section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Put Our Pedestals on Speed Dial
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="process-step">
                <div className="process-number">{step.number}</div>
                <h3 className="text-xl font-semibold text-cream mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
