import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProcessSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

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
    <section ref={sectionRef} id="how-it-works" className="bg-dark section-padding overflow-hidden">
      <motion.div 
        style={{ y, rotateX, transformPerspective: 1200 }}
        className="container-custom"
      >
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
      </motion.div>
    </section>
  );
};
