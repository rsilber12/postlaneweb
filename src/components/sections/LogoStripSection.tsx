import teslaLogo from "@/assets/tesla-logo.svg";
import autelLogo from "@/assets/autel-logo.svg";
import chargepointLogo from "@/assets/chargepoint-logo.svg";
import zerovaLogo from "@/assets/zerova-logo.svg";
import swtchLogo from "@/assets/swtch-logo.svg";
import wallboxLogo from "@/assets/wallbox-logo.svg";

export const LogoStripSection = () => {
  const logos = [
    { src: teslaLogo, alt: "Tesla" },
    { src: autelLogo, alt: "Autel" },
    { src: chargepointLogo, alt: "ChargePoint" },
    { src: zerovaLogo, alt: "Zerova" },
    { src: swtchLogo, alt: "SWTCH" },
    { src: wallboxLogo, alt: "Wallbox" },
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
              className="opacity-60 hover:opacity-90 transition-opacity duration-300"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
