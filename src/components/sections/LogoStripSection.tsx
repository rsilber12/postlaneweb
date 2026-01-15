import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const LogoStripSection = () => {
  const partners = [
    "Tesla",
    "Autel",
    "Zerova",
    "Wallbox",
    "+ more",
  ];

  return (
    <section className="bg-dark py-16 border-t border-border">
      <div className="container-custom">
        <AnimatedSection className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <span 
              key={index}
              className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-cream transition-colors"
            >
              {partner}
            </span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};
