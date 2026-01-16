import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Users, Wrench, Shield, DollarSign, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: "Expertise, included",
      description: "Not sure what you need? We'll walk you through your options and recommend the right solution.",
      accent: "from-blue-500 to-cyan-400",
    },
    {
      icon: Wrench,
      title: "Installation ready",
      description: "Our pedestals are pre-drilled for your charger and include a universal access port for easy installs.",
      accent: "from-primary to-emerald-400",
    },
    {
      icon: Shield,
      title: "Engineered tough",
      description: "Crash-resistant, commercial-grade, and made from rust-proof, anodized steel.",
      accent: "from-orange-500 to-amber-400",
    },
    {
      icon: DollarSign,
      title: "Competitively priced",
      description: "With even better pricing when you bundle or bulk order.",
      accent: "from-purple-500 to-pink-400",
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={sectionRef} id="why-us" className="relative bg-dark section-padding overflow-hidden">
      {/* Vibrant green decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      {/* Green accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <motion.div 
        style={{ rotateX, scale, transformPerspective: 1000 }}
        className="container-custom relative"
      >
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-sm uppercase tracking-widest text-primary font-medium mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Partnership That Delivers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're more than just a supplier – we're your dedicated infrastructure partner
          </p>
        </AnimatedSection>

        {/* Horizontal scrolling cards on mobile, grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-cream/[0.04] to-transparent border border-cream/10 hover:border-cream/20 transition-all duration-500">
                {/* Animated gradient line on top */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${benefit.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon container */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.accent} p-[1px]`}>
                      <div className="w-full h-full rounded-2xl bg-dark flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-cream" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cream mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Subtle arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
