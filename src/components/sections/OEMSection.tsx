import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Check, Mail, Phone, Factory, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const OEMSection = () => {
  const benefits = [
    "Custom designs and specifications",
    "Your branding, our manufacturing",
    "Scalable production runs",
  ];

  return (
    <section id="oem" className="relative py-24 md:py-32 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-emerald-500" />
      
      {/* Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated background shapes */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-dark/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <AnimatedSection className="text-center mb-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark/20 backdrop-blur-sm border border-white/10 mb-8"
            >
              <Factory className="w-4 h-4 text-cream" />
              <span className="text-sm text-cream font-medium">OEM Partnership</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6 leading-tight">
              Manufacturing Available<br />for OEMs
            </h2>
            <p className="text-dark/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              Looking to engineer your own pedestals? We manufacture for OEMs who need 
              production runs built to their exact specifications.
            </p>
          </AnimatedSection>

          {/* Benefits pills */}
          <AnimatedSection delay={0.2} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-dark/20 backdrop-blur-sm border border-white/10"
                >
                  <div className="w-5 h-5 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-cream font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA buttons */}
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a 
                href="tel:+17183551808"
                className="group flex items-center gap-3 bg-dark text-cream font-semibold px-8 py-4 rounded-xl hover:bg-dark/90 transition-all duration-300 hover:shadow-2xl hover:shadow-dark/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-dark/60 font-medium">or</span>
              <a 
                href="mailto:OEM@postlane.com"
                className="group flex items-center gap-3 bg-white/20 backdrop-blur-sm text-dark font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>OEM@postlane.com</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
