import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { DepthCard } from "@/components/ui/Parallax3D";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { resolveProductImage } from "@/lib/productImage";

export const ProductsSection = () => {
  const { products } = useProducts();

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
            <DepthCard key={product.id} index={index}>
              <StaggerItem>
                <div className="group relative flex flex-col p-4 rounded-2xl border-2 border-primary/40 bg-white hover:border-primary hover:bg-white/80 transition-all duration-300 shadow-sm h-[340px]">
                  {/* Product Image */}
                  <div className="relative h-48 mb-4 overflow-hidden rounded-xl bg-white flex-shrink-0">
                    <img
                      src={resolveProductImage(product.cover_image)}
                      alt={product.title}
                      className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Info */}
                  <div className="px-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-dark mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {product.short_description}
                    </p>
                  </div>

                  {/* See more button - bottom right */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-1 text-xs font-semibold bg-dark text-cream px-3 py-2 rounded-lg hover:bg-dark/90 transition-all"
                  >
                    See more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </StaggerItem>
            </DepthCard>
          ))}
        </StaggerContainer>

        {/* Download Brochure */}
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
  );
};
