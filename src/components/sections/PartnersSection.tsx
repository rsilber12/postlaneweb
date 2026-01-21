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
  // Each logo has a custom width to achieve visual balance since images have different aspect ratios
  const logos = [
    { src: plpEnergyLogo, alt: "PLP Energy", width: "w-28" },
    { src: newtechLogo, alt: "Newtech", width: "w-24" },
    { src: poweralLogo, alt: "Poweral", width: "w-28" },
    { src: resoundEnergyLogo, alt: "Resound Energy", width: "w-28" },
    { src: everchargeLogo, alt: "EverCharge", width: "w-28" },
    { src: whitePartnerLogo, alt: "Partner", width: "w-28" },
    { src: partnerLogo1, alt: "Partner 1", width: "w-32" },
    { src: partnerLogo2, alt: "Partner 2", width: "w-28" },
    { src: partnerLogo3, alt: "Partner 3", width: "w-40" },
    { src: partnerLogo4, alt: "Partner 4", width: "w-28" },
    { src: partnerLogo5, alt: "Partner 5", width: "w-24" },
  ];

  return (
    <section className="bg-dark py-12 border-t border-border overflow-hidden">
      <div className="container-custom">
        <h3 className="text-center text-cream/60 text-sm font-medium uppercase tracking-wider mb-8">
          Proud to have partnered with:
        </h3>
        
        {/* Infinite scrolling carousel for both desktop and mobile */}
        <div className="relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 md:px-10 opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`${logo.width} h-auto [filter:brightness(0)_invert(1)]`}
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
                  className={`${logo.width} h-auto [filter:brightness(0)_invert(1)]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
