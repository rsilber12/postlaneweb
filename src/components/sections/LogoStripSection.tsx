import teslaLogo from "@/assets/tesla-logo.svg";
import autelLogo from "@/assets/autel-logo.svg";
import chargepointLogo from "@/assets/chargepoint-logo.svg";
import zerovaLogo from "@/assets/zerova-logo.svg";
import swtchLogo from "@/assets/swtch-logo.svg";
import wallboxLogo from "@/assets/wallbox-logo.svg";

export const LogoStripSection = () => {
  // Each logo has a custom width to achieve visual balance since SVGs have different aspect ratios
  const logos = [
    { src: teslaLogo, alt: "Tesla", width: "w-24" },
    { src: autelLogo, alt: "Autel", width: "w-20" },
    { src: chargepointLogo, alt: "ChargePoint", width: "w-28" },
    { src: zerovaLogo, alt: "Zerova", width: "w-20" },
    { src: swtchLogo, alt: "SWTCH", width: "w-20" },
    { src: wallboxLogo, alt: "Wallbox", width: "w-24" },
  ];

  return (
    <section className="bg-dark py-12 border-t border-border overflow-hidden">
      <div className="container-custom">
        <h3 className="text-center text-cream/60 text-sm font-medium uppercase tracking-wider mb-8">
          Compatible with:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 lg:gap-20">
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
      </div>
    </section>
  );
};