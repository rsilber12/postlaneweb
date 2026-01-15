import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
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
    <section id="products" className="bg-dark section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Our Product Lines
          </h2>
        </AnimatedSection>

        <StaggerContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {products.map((product, index) => (
            <StaggerItem key={index}>
              <div className="card-product group cursor-pointer h-full flex flex-col">
                {/* Product Image - 21:9 aspect ratio */}
                <div className="relative aspect-[21/9] mb-6 overflow-hidden rounded-lg bg-cream/5">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {product.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
                >
                  See products
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
