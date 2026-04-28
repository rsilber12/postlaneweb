import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useProduct } from "@/hooks/useProducts";
import { resolveProductImage } from "@/lib/productImage";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { product, loading } = useProduct(slug);
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-dark hover:text-primary font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          {loading ? (
            <p className="text-muted-foreground">Loading…</p>
          ) : !product ? (
            <div className="text-center py-20">
              <h1 className="text-3xl font-bold text-dark mb-4">Product not found</h1>
              <Link to="/#products" className="text-primary underline">
                Back to products
              </Link>
            </div>
          ) : (
            <>
              <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
                <div className="rounded-2xl overflow-hidden bg-white border-2 border-primary/30 p-6 flex items-center justify-center">
                  <img
                    src={resolveProductImage(product.cover_image)}
                    alt={product.title}
                    className="w-full h-auto max-h-[500px] object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                    {product.title}
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.long_description || product.short_description}
                  </p>
                </div>
              </div>

              {product.gallery && product.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightbox(img)}
                        className="group relative aspect-square overflow-hidden rounded-xl bg-white border border-primary/20 hover:border-primary transition-colors"
                      >
                        <img
                          src={img}
                          alt={`${product.title} ${i + 1}`}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-white border-none">
          <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-dark/80 p-2 text-white hover:bg-dark transition-colors">
            <X className="h-6 w-6" />
          </DialogClose>
          <div className="p-4">
            <img src={lightbox || ""} alt="" className="w-full h-auto max-h-[85vh] object-contain rounded-lg" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
