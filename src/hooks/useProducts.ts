import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Product = {
  id: string;
  slug: string;
  title: string;
  short_description: string;
  long_description: string;
  cover_image: string | null;
  gallery: string[];
  display_order: number;
  published: boolean;
};

export function useProducts(includeUnpublished = false) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase.from("products").select("*").order("display_order", { ascending: true });
    if (!includeUnpublished) query = query.eq("published", true);
    const { data, error } = await query;
    if (!error && data) {
      setProducts(
        data.map((p: any) => ({
          ...p,
          gallery: Array.isArray(p.gallery) ? p.gallery : [],
        })),
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [includeUnpublished]);

  return { products, loading, refetch: fetchProducts };
}

export function useProduct(slug: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      setLoading(true);
      const { data } = await supabase.from("products").select("*").eq("slug", slug).maybeSingle();
      if (data) {
        setProduct({
          ...(data as any),
          gallery: Array.isArray((data as any).gallery) ? (data as any).gallery : [],
        });
      } else {
        setProduct(null);
      }
      setLoading(false);
    })();
  }, [slug]);

  return { product, loading };
}
