import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

export const HeroSection = () => {
  const benefits = [
    "Quick lead times",
    "Nationwide shipping",
    "Proudly made in the USA",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="EV Charging Station"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient" />
        <div className="hero-gradient-bottom" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6"
          >
            EV charging pedestals that are easy to order – and even easier to mount
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-cream/80 mb-8 max-w-2xl"
          >
            Just tell us the specs. Our experts will help you figure out what you need 
            and get it to you, fast.
          </motion.p>

          {/* Benefits */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10"
          >
            {benefits.map((benefit, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-cream"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Quote
            </Link>
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
          className="w-6 h-10 rounded-full border-2 border-cream/50 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-cream/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
