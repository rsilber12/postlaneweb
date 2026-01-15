import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

export const LogoStripSection = () => {
  // SVG logos for each partner
  const partners = [
    {
      name: "Tesla",
      logo: (
        <svg viewBox="0 0 342 35" className="h-6 md:h-7 w-auto fill-current">
          <path d="M0 0.333374H51.96V7.22671H34.09V35.3334H18.21V7.22671H0V0.333374Z"/>
          <path d="M74.24 0.333374H120.04V7.22671H90.12V14.12H120.04V21.0134H90.12V28.44H120.04V35.3334H74.24V0.333374Z"/>
          <path d="M142.08 17.5667C142.08 27.1 149.33 35.3334 162.48 35.3334C170.38 35.3334 175.17 32.9467 179.52 29.2534L172.11 22.9467C169.3 25.4134 166.18 27.3334 161.82 27.3334C155.96 27.3334 151.6 23.3067 151.6 17.5667C151.6 11.8267 155.96 7.80004 161.82 7.80004C166.18 7.80004 169.3 9.72004 172.11 12.1867L179.52 5.88004C175.17 2.18671 170.38 -0.200012 162.48 -0.200012C149.33 -0.200012 142.08 8.03337 142.08 17.5667Z"/>
          <path d="M198.16 0.333374H214.04V28.44H244.64V35.3334H198.16V0.333374Z"/>
          <path d="M266.16 0.333374H316.16L319.64 7.22671H298.24V35.3334H282.36V7.22671H259.96L266.16 0.333374Z"/>
          <path d="M330.72 0.333374H341.72L330.72 35.3334H319.72L330.72 0.333374Z"/>
        </svg>
      ),
    },
    {
      name: "Autel",
      logo: (
        <svg viewBox="0 0 120 32" className="h-5 md:h-6 w-auto fill-current">
          <path d="M16.5 0L0 32h7.5L11 25h11l3.5 7h7.5L16.5 0zm0 10l4 10h-8l4-10z"/>
          <path d="M38 8h7v14c0 2.5 1.5 4 4 4s4-1.5 4-4V8h7v14c0 6-4.5 10-11 10s-11-4-11-10V8z"/>
          <path d="M68 8h18v6h-5.5v18H73V14h-5V8z"/>
          <path d="M92 8h18v5h-11v5h10v5h-10v5h11v5H92V8z"/>
          <path d="M116 8h7v24h-7V8z"/>
        </svg>
      ),
    },
    {
      name: "Zerova",
      logo: (
        <svg viewBox="0 0 140 32" className="h-5 md:h-6 w-auto fill-current">
          <path d="M0 4h25l-20 24h22v4H0l20-24H2V4z"/>
          <path d="M32 4h24v5H39v7h15v5H39v7h17v5H32V4z"/>
          <path d="M62 4h14c8 0 13 4 13 11 0 5-3 9-8 10l10 8H80l-9-8h-2v8h-7V4zm13 16c4 0 6-2 6-5s-2-5-6-5h-6v10h6z"/>
          <path d="M92 17c0-8 6-14 15-14s15 6 15 14-6 14-15 14-15-6-15-14zm22 0c0-5-3-8-7-8s-7 3-7 8 3 8 7 8 7-3 7-8z"/>
          <path d="M124 4h8l7 17 7-17h8L140 32h-7l-4.5-12-4.5 12h-7L124 4z"/>
        </svg>
      ),
    },
    {
      name: "Wallbox",
      logo: (
        <svg viewBox="0 0 160 32" className="h-5 md:h-6 w-auto fill-current">
          <path d="M0 4h8l5 18 6-18h6l6 18 5-18h8L32 32h-7L19 15l-6 17H6L0 4z"/>
          <path d="M52 4h8l12 28h-8l-2-6H50l-2 6h-8L52 4zm6 6l-4 10h8l-4-10z"/>
          <path d="M76 4h8v22h14v6H76V4z"/>
          <path d="M102 4h8v22h14v6h-22V4z"/>
          <path d="M128 4h14c6 0 10 3 10 8 0 3-2 5-4 6 3 1 5 4 5 7 0 5-4 8-10 8h-15V4zm12 11c2 0 3-1 3-3s-1-3-3-3h-5v6h5zm1 11c2 0 3-1 3-3s-1-3-3-3h-6v6h6z"/>
          <path d="M156 18c0-8 6-14 14-14v6c-4 0-7 3-7 8s3 8 7 8v6c-8 0-14-6-14-14z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-dark py-16 border-t border-border overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
            Trusted by industry leaders
          </p>
        </AnimatedSection>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground hover:text-cream transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {partner.logo}
            </motion.div>
          ))}
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
