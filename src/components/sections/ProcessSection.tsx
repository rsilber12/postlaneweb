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
    <section ref={sectionRef} id="process" className="relative bg-dark section-padding overflow-hidden">
      {/* Green accent elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/6 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        style={{ y, rotateX, transformPerspective: 1200 }}
        className="container-custom relative"
      >
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-widest text-primary font-medium mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Put Our Pedestals on Speed Dial
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <StaggerItem key={index}>
              <div className="process-step group">
                {/* Connecting line between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
                <div className="process-number shadow-glow relative z-10">{step.number}</div>
                <h3 className="text-xl font-semibold text-cream mb-3 group-hover:text-primary transition-colors">
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
