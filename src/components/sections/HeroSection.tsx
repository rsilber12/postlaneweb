import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock, Truck, Flag, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  const benefits = [
    { icon: Clock, text: "Quick lead times" },
    { icon: Truck, text: "Nationwide shipping" },
    { icon: Flag, text: "Proudly made in the USA" },
  ];
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background with sophisticated layering */}
      <div className="absolute inset-0">
        {/* Main background image with parallax */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ y: backgroundY, scale }}
          className="absolute inset-0"
        >
          <img
            src={heroBg}
            alt="EV Charging Station"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark gradient overlay - 85% opacity on left, 30% on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(45, 192, 98, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(45, 192, 98, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating ambient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-cream/5 rounded-full blur-[60px]"
        />
      </div>

      {/* Primary content with parallax */}
      <motion.div 
        style={{ y: contentY, opacity }}
        className="relative container-custom pt-36 pb-24 lg:pt-40 lg:pb-32"
      >
        <div className="max-w-4xl -ml-44 lg:-ml-80">
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 mb-10 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-cream/90 font-medium tracking-wide">Industry Leading EV Infrastructure</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.08] mb-8 tracking-tight"
          >
            EV charging pedestals that are easy to order – and even easier to mount
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-cream/60 mb-12 max-w-2xl leading-relaxed font-light"
          >
            Just tell us the specs. Our experts will help you figure out what you need 
            and get it to you, fast.
          </motion.p>

          {/* Benefits with icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 mb-14"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <span className="text-cream/90 font-medium text-lg">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link 
              to="/contact" 
              className="group relative overflow-hidden bg-primary text-dark font-semibold text-base px-7 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get a Quote</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <a 
              href="#products" 
              className="group border-2 border-cream/20 text-cream font-semibold text-base px-7 py-3 rounded-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:border-cream/40 hover:bg-cream/5 backdrop-blur-sm"
            >
              View Products
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-cream/20 flex justify-center pt-3"
        >
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-3 bg-primary rounded-full" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
