import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export const LogoStripSection = () => {
  return (
    <section className="bg-dark py-16 border-t border-border overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Trusted by industry leaders
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20">
          {/* Tesla Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <svg viewBox="0 0 278.7 36.3" className="h-5 md:h-6 w-auto fill-current">
              <path d="M238.1 14.4v21.9h7V21.7h25.3v14.6h7V14.4zM244.8 0l-6.7 8.5h13.4l6.7-8.5h8.9l-6.7 8.5h18.3V0z"/>
              <path d="M216.8 36.3h7V0h-7z"/>
              <path d="M180.8 36.3l3.4-6.6h27.1l3.4 6.6h7.8L201.8 0h-7.3l-21.4 36.3zm6.7-12.9l10.1-19.6 10.1 19.6z"/>
              <path d="M131.3 0v7.1h21.9v29.2h7V7.1h21.9V0z"/>
              <path d="M89.3 0l-6.7 8.5h13.4l6.7-8.5h8.9L105 8.5h18.2V0h-33.9zm0 14.4v21.9h41.5v-7.1h-34.5v-4.3h34.5v-6.4h-34.5V22h34.5v-7.6z"/>
              <path d="M49.4 0L42.7 8.5h13.4l6.7-8.5h8.9l-6.7 8.5h18.2V0z"/>
              <path d="M42.4 14.4v7.1h7v14.8h7V21.5h22.2c0 9.9-7.9 14.8-18.2 14.8H42.4v-21.9zM60.4 0c17.3 0 25.2 6.7 25.2 14.4h-43v7.1h-7V0h24.8z"/>
              <path d="M0 0l6.7 8.5h13.4L13.4 0H0zm0 14.4v21.9h7V21.7h25.3v14.6h7V14.4z"/>
            </svg>
          </motion.div>

          {/* Autel Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-muted-foreground hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <svg viewBox="0 0 120 28" className="h-5 md:h-6 w-auto fill-current">
              <path d="M14 0L0 28h6l3-6h10l3 6h6L14 0zm0 8l3.5 10h-7L14 8z"/>
              <path d="M34 6h5v12c0 2 1.2 3.2 3.2 3.2S45.4 20 45.4 18V6h5v12c0 4.8-3.6 8-8.2 8s-8.2-3.2-8.2-8V6z"/>
              <path d="M58 6h14v4.5h-4.5V24H63V10.5h-5V6z"/>
              <path d="M78 6h14v4h-9v4h8v4h-8v4h9v4H78V6z"/>
              <path d="M98 6h5v14h9v4H98V6z"/>
            </svg>
          </motion.div>

          {/* Zerova Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <svg viewBox="0 0 130 28" className="h-5 md:h-6 w-auto fill-current">
              <path d="M0 2h22L4 22h20v4H0L18 6H2V2z"/>
              <path d="M28 2h18v5H33v5h12v4H33v5h13v5H28V2z"/>
              <path d="M52 2h12c6 0 10 3 10 9 0 4-2.5 7-6.5 8.5L76 26h-6l-7.5-6H57v6h-5V2zm11 13c3 0 5-1.5 5-4s-2-4-5-4h-6v8h6z"/>
              <path d="M78 14c0-7 5-12.5 13-12.5S104 7 104 14s-5 12.5-13 12.5S78 21 78 14zm20 0c0-4.5-2.8-7.5-7-7.5s-7 3-7 7.5 2.8 7.5 7 7.5 7-3 7-7.5z"/>
              <path d="M106 2h6l6 15 6-15h6l-9.5 24h-5L106 2z"/>
              <path d="M130 2h6l9 24h-5.5l-2-5.5h-9L126.5 26H121l9-24zm3 14h5.5l-2.75-8L133 16z"/>
            </svg>
          </motion.div>

          {/* Wallbox Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <svg viewBox="0 0 150 24" className="h-5 md:h-6 w-auto fill-current">
              <path d="M0 2h5l4.5 14L14 2h4l4.5 14L27 2h5L24.5 22h-5L15 9l-4.5 13h-5L0 2z"/>
              <path d="M40 2h5l9 20h-5l-1.5-4H38l-1.5 4h-5l8.5-20zm2.5 5l-2.5 7h5l-2.5-7z"/>
              <path d="M56 2h5v16h11v4H56V2z"/>
              <path d="M74 2h5v16h11v4H74V2z"/>
              <path d="M92 2h11c5 0 8 2.5 8 6.5 0 2.5-1.5 4.5-4 5.5 3 .5 5 3 5 5.5 0 4-3 6.5-8 6.5H92V2zm10 9c2 0 3-1 3-2.5S104 6 102 6h-5v5h5zm1 9c2 0 3-1 3-2.5s-1-2.5-3-2.5h-6v5h6z"/>
              <path d="M114 12c0-6 5-10.5 12-10.5s12 4.5 12 10.5-5 10.5-12 10.5-12-4.5-12-10.5zm18 0c0-3.5-2.5-6-6-6s-6 2.5-6 6 2.5 6 6 6 6-2.5 6-6z"/>
              <path d="M138 2h5l5 7 5-7h5l-7.5 10 7.5 10h-5l-5-7-5 7h-5l7.5-10L138 2z"/>
            </svg>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-semibold text-primary"
          >
            + more
          </motion.span>
        </div>
      </div>
    </section>
  );
};
