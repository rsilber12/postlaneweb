import plpEnergyLogo from "@/assets/plp-energy-logo.svg";
import newtechLogo from "@/assets/newtech-logo.svg";
import poweralLogo from "@/assets/poweral-logo.png";
import resoundEnergyLogo from "@/assets/resound-energy-logo.svg";
import everchargeLogo from "@/assets/evercharge-logo.webp";
import whitePartnerLogo from "@/assets/white-logo-partner.png";

export const PartnersSection = () => {
  // Each logo has a custom width to achieve visual balance since images have different aspect ratios
  const logos = [
    { src: plpEnergyLogo, alt: "PLP Energy", width: "w-28" },
    { src: newtechLogo, alt: "Newtech", width: "w-24" },
    { src: poweralLogo, alt: "Poweral", width: "w-28" },
    { src: resoundEnergyLogo, alt: "Resound Energy", width: "w-28" },
    { src: everchargeLogo, alt: "EverCharge", width: "w-28" },
    { src: whitePartnerLogo, alt: "Partner", width: "w-28" },
  ];

  return (
    <section className="bg-dark py-12 border-t border-border overflow-hidden">
      <div className="container-custom">
        <h3 className="text-center text-cream/60 text-sm font-medium uppercase tracking-wider mb-8">
          Proud to have partnered with:
        </h3>
        
        {/* Desktop: Static grid */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`${logo.width} h-auto [filter:brightness(0)_invert(1)]`}
              />
            </div>
          ))}
        </div>

        {/* Mobile: Infinite scrolling carousel */}
        <div className="md:hidden relative">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 opacity-70 flex items-center justify-center"
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
                className="flex-shrink-0 px-6 opacity-70 flex items-center justify-center"
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
