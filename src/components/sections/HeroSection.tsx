import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  const benefits = [
    "Quick lead times",
    "Nationwide shipping",
    "Proudly made in the USA",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBg}
            alt="EV Charging Station"
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/30" />
        {/* Subtle animated gradient accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8, 
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">Industry Leading EV Infrastructure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream leading-[1.1] mb-6"
          >
            EV charging pedestals that are{" "}
            <span className="relative inline-block">
              <span className="relative z-10">easy to order</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="absolute bottom-2 left-0 w-full h-3 bg-primary/30 -z-0 origin-left"
              />
            </span>{" "}
            – and even easier to mount
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-cream/70 mb-10 max-w-2xl leading-relaxed"
          >
            Just tell us the specs. Our experts will help you figure out what you need 
            and get it to you, fast.
          </motion.p>

          {/* Benefits with stagger */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 text-cream"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20">
                  <Check className="w-4 h-4 text-primary" />
                </span>
                <span className="font-medium">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2 group"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="#products" 
              className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
            >
              View Products
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
