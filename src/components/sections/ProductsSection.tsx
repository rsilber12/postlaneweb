import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { DepthCard } from "@/components/ui/Parallax3D";
import { ArrowRight } from "lucide-react";
import productPedestal from "@/assets/product-pedestal.png";

export const ProductsSection = () => {
  const products = [
    {
      image: productPedestal,
      title: "Universal 5ft Pedestal",
      description: "Standard mounting pedestal for most EV chargers",
    },
    {
      image: productPedestal,
      title: "Universal Cable Management Pedestal",
      description: "Built-in spring or counterweight cable retraction system",
    },
    {
      image: productPedestal,
      title: "4ft Slim Pedestal",
      description: "Compact design for tight parking installations",
    },
    {
      image: productPedestal,
      title: "Counterweight Slim Pedestal",
      description: "Space-saving design with integrated cable management",
    },
    {
      image: productPedestal,
      title: "Loop Pedestal",
      description: "Unique loop-style mounting configuration",
    },
    {
      image: productPedestal,
      title: "Add-On Protection",
      description: "Bollards and wallards engineered for EV environments",
    },
  ];

  return (
    <section id="products" className="bg-primary section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark/90">
            Our Product Lines
          </h2>
        </AnimatedSection>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {products.map((product, index) => (
            <DepthCard key={index} index={index}>
              <StaggerItem className="h-full">
              <div className="group cursor-pointer h-full p-4 rounded-2xl border-2 border-primary/40 bg-white hover:border-primary hover:bg-white/80 transition-all duration-300 shadow-sm flex flex-col">
                {/* Product Image Container - 21:9 aspect ratio with rounded corners */}
                <div className="relative aspect-[21/9] mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100/50 to-emerald-50/30">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover scale-125 transition-all duration-500 group-hover:scale-150"
                  />
                </div>
                
                {/* Product Info */}
                <div className="px-1 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
            </DepthCard>
          ))}
        </StaggerContainer>

        {/* Download Brochure Button */}
        <AnimatedSection className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-dark text-cream font-semibold px-8 py-4 rounded-xl hover:bg-dark/90 transition-all duration-300 hover:shadow-xl"
          >
            <ArrowRight className="w-5 h-5" />
            Download Brochure
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
