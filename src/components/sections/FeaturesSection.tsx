import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Scroll3DSection } from "@/components/ui/Parallax3D";
import { Cable, Settings, Tag } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

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
    <section ref={sectionRef} id="features" className="relative section-light section-padding overflow-hidden">
      {/* Green accent strip at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      {/* Subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />

      <motion.div style={{ y }} className="container-custom relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Customization
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
            Have it Your Way
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <div className="text-center group">
                <div className="icon-badge-light mx-auto group-hover:shadow-glow transition-shadow duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-light-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-light-muted">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
};
