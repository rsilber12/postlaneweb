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
  ];

  return (
    <section id="products" className="bg-emerald-50 section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark">
            Our Product Lines
          </h2>
        </AnimatedSection>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
        >
          {products.map((product, index) => (
            <DepthCard key={index} index={index}>
              <StaggerItem>
              <div className="group cursor-pointer h-full p-4 rounded-2xl border-2 border-dark/10 bg-white hover:border-primary/40 hover:bg-white/80 transition-all duration-300 shadow-sm">
                {/* Product Image Container - 21:9 aspect ratio with rounded corners */}
                <div className="relative aspect-[21/9] mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-100/50 to-emerald-50/30">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover scale-125 transition-all duration-500 group-hover:scale-150"
                  />
                  
                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-primary text-dark px-4 py-2 rounded-lg font-semibold text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      View Details
                    </span>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="px-1">
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
      </div>
    </section>
  );
};
