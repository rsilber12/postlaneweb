import plpEnergyLogo from "@/assets/plp-energy-logo.svg";
import newtechLogo from "@/assets/newtech-logo.svg";
import poweralLogo from "@/assets/poweral-logo.png";
import resoundEnergyLogo from "@/assets/resound-energy-logo.svg";
import everchargeLogo from "@/assets/evercharge-logo.webp";
import whitePartnerLogo from "@/assets/white-logo-partner.png";
import partnerLogo1 from "@/assets/partner-logo-1.svg";
import partnerLogo2 from "@/assets/partner-logo-2.svg";
import partnerLogo3 from "@/assets/partner-logo-3.svg";
import partnerLogo4 from "@/assets/partner-logo-4.svg";
import partnerLogo5 from "@/assets/partner-logo-5.svg";

export const PartnersSection = () => {
  // All logos use consistent height, with custom sizing for logos that need it
  const logos = [
    { src: plpEnergyLogo, alt: "PLP Energy", className: "h-8" },
    { src: newtechLogo, alt: "Newtech", className: "h-12" }, // Larger size for this logo
    { src: poweralLogo, alt: "Poweral", className: "h-8" },
    { src: resoundEnergyLogo, alt: "Resound Energy", className: "h-8" },
    { src: everchargeLogo, alt: "EverCharge", className: "h-8" },
    { src: whitePartnerLogo, alt: "Partner", className: "h-8" },
    { src: partnerLogo1, alt: "Partner 1", className: "h-8" },
    { src: partnerLogo2, alt: "Partner 2", className: "h-8" },
    { src: partnerLogo3, alt: "Partner 3", className: "h-8" },
    { src: partnerLogo4, alt: "Partner 4", className: "h-8" },
    { src: partnerLogo5, alt: "Partner 5", className: "h-8" },
  ];

  return (
    <section className="bg-dark py-12 border-t border-border overflow-hidden">
      <div className="container-custom">
        <h3 className="text-center text-cream/60 text-sm font-medium uppercase tracking-wider mb-8">
          Proud to have partnered with:
        </h3>
      </div>
      
      {/* Infinite scrolling carousel - outside container for full-width seamless loop */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-left">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-6 md:px-10 opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.className} w-auto max-w-[140px] object-contain [filter:brightness(0)_invert(1)]`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-6 md:px-10 opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.className} w-auto max-w-[140px] object-contain [filter:brightness(0)_invert(1)]`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
