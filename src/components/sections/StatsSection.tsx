import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";

export const StatsSection = () => {
  const stats = [
    { value: "10+", label: "Years proven quality" },
    { value: "2,500+", label: "Charging stations configured" },
    { value: "100%", label: "Repeat customer base" },
  ];

  return (
    <section className="bg-dark section-padding border-t border-border">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Putting installers in charge since 2018
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with turnkey EV installers all across the country to deliver 
            cutting edge charging stations when they need them, how they need them.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <StaggerItem key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label text-lg">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
