import { useRef } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArrowRight, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import bollardProduct from "@/assets/bollard-product.jpeg";
import wallardProduct from "@/assets/wallard-product.jpeg";

export const ProtectionSection = () => {
  const protectionProducts = [
    {
      image: bollardProduct,
      title: "Bollards",
      description: "Protective steel bollards engineered for EV environments.",
      color: "from-primary/20 to-emerald-500/10",
    },
    {
      image: wallardProduct,
      title: "Wallards",
      description: "Wall-mounted guards for tighter spaces.",
      color: "from-blue-500/20 to-primary/10",
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={sectionRef} className="relative bg-dark section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <motion.div 
        style={{ scale, opacity }}
        className="container-custom relative"
      >
        {/* Header with icon */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 mb-6">
            <Zap className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Add-on Protection
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Complete your installation with industrial-grade protection
          </p>
        </AnimatedSection>

        {/* Protection cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {protectionProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Card with gradient border effect */}
              <div className="relative h-full flex flex-col rounded-3xl bg-gradient-to-br from-cream/5 to-transparent border border-cream/10 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Product Image - Fixed height with white background */}
                <div className="relative h-64 overflow-hidden bg-white">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
                
                {/* Content - Fixed height */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download button with glow effect */}
        <AnimatedSection delay={0.4} className="text-center">
          <a 
            href="#" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cream/5 border border-cream/20 text-cream font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          >
            <span>Download Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </AnimatedSection>
      </motion.div>
    </section>
  );
};
