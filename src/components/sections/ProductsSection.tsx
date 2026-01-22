import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { DepthCard } from "@/components/ui/Parallax3D";
import { ArrowRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import universal5ftPedestal from "@/assets/universal-5ft-pedestal.jpeg";
import slim4ftPedestal from "@/assets/4ft-slim-pedestal.jpeg";
import productComingSoon from "@/assets/product-coming-soon.jpeg";
import universalCableManagement from "@/assets/universal-cable-management-pedestal.jpeg";

export const ProductsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const products = [
    {
      image: universal5ftPedestal,
      title: "Universal 5ft Pedestal",
      description: "Standard mounting pedestal for most EV chargers",
    },
    {
      image: universalCableManagement,
      title: "Universal Cable Management Pedestal",
      description: "Built-in spring or counterweight cable retraction system",
    },
    {
      image: slim4ftPedestal,
      title: "4ft Slim Pedestal",
      description: "Compact design for tight parking installations",
    },
    {
      image: productComingSoon,
      title: "Counterweight Slim Pedestal",
      description: "Space-saving design with integrated cable management",
    },
    {
      image: productComingSoon,
      title: "Loop Pedestal",
      description: "Unique loop-style mounting configuration",
    },
    {
      image: productComingSoon,
      title: "Pedestal",
      description: "",
    },
  ];

  const handleImageClick = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <>
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
                <StaggerItem>
                <div 
                  className="group cursor-pointer flex flex-col p-4 rounded-2xl border-2 border-primary/40 bg-white hover:border-primary hover:bg-white/80 transition-all duration-300 shadow-sm h-[340px]"
                  onClick={() => handleImageClick(product.image, product.title)}
                >
                  {/* Product Image Container - Fixed height */}
                  <div className="relative h-48 mb-4 overflow-hidden rounded-xl bg-white flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Product Info - Fixed height */}
                  <div className="px-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
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
              href="https://drive.google.com/file/d/12cFWpWefua4dlY1_BqLcHNxRdg6eb0ip/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-dark text-cream font-semibold px-8 py-4 rounded-xl hover:bg-dark/90 transition-all duration-300 hover:shadow-xl"
            >
              <ArrowRight className="w-5 h-5" />
              Download Brochure
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 bg-white border-none">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-dark/80 p-2 text-white hover:bg-dark transition-colors">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="p-4">
            <img 
              src={selectedImage || ""} 
              alt={selectedTitle}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center mt-4 text-lg font-semibold text-dark">{selectedTitle}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
