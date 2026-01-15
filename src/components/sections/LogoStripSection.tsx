import { motion } from "framer-motion";
import logoLight from "@/assets/logo-light.png";

export const LogoStripSection = () => {
  return (
    <section className="bg-dark py-12 border-t border-border overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="opacity-50 hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src={logoLight} 
                alt="Postlane" 
                className="h-6 md:h-8 w-auto brightness-0 invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
