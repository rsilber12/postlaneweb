import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Plus, Trash2, Edit, X, Upload, LogOut, ArrowUp, ArrowDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useIsAdmin } from "@/hooks/useAdmin";
import { useProducts, type Product } from "@/hooks/useProducts";
import { resolveProductImage } from "@/lib/productImage";
import { toast } from "sonner";

const emptyForm = {
  slug: "",
  title: "",
  short_description: "",
  long_description: "",
  cover_image: "",
  gallery: [] as string[],
  display_order: 0,
  published: true,
};

const Admin = () => {
  const navigate = useNavigate();
  const { session, isAdmin, loading: adminLoading } = useIsAdmin();
  const { products, refetch } = useProducts(true);

  const [editing, setEditing] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);

  useEffect(() => {
    if (!adminLoading && !session) navigate("/auth");
  }, [adminLoading, session, navigate]);

  const openNew = () => {
    setEditing(null);
    setForm({ ...emptyForm, display_order: products.length + 1 });
    setOpen(true);
  };

  const openEdit = (p: Product) => {
    setEditing(p);
    setForm({
      slug: p.slug,
      title: p.title,
      short_description: p.short_description,
      long_description: p.long_description,
      cover_image: p.cover_image || "",
      gallery: [...p.gallery],
      display_order: p.display_order,
      published: p.published,
    });
    setOpen(true);
  };

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  const uploadFile = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const { error } = await supabase.storage.from("product-images").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingCover(true);
    try {
      const url = await uploadFile(file);
      setForm((f) => ({ ...f, cover_image: url }));
      toast.success("Cover image uploaded");
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploadingCover(false);
      e.target.value = "";
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploadingGallery(true);
    try {
      const urls: string[] = [];
      for (const f of Array.from(files)) urls.push(await uploadFile(f));
      setForm((fm) => ({ ...fm, gallery: [...fm.gallery, ...urls] }));
      toast.success(`${urls.length} image(s) added`);
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploadingGallery(false);
      e.target.value = "";
    }
  };

  const removeGalleryImage = (i: number) => {
    setForm((f) => ({ ...f, gallery: f.gallery.filter((_, idx) => idx !== i) }));
  };

  const handleSave = async () => {
    if (!form.title) return toast.error("Title is required");
    setSaving(true);
    try {
      const slug = form.slug || slugify(form.title);
      const payload = { ...form, slug };
      if (editing) {
        const { error } = await supabase.from("products").update(payload).eq("id", editing.id);
        if (error) throw error;
        toast.success("Product updated");
      } else {
        const { error } = await supabase.from("products").insert(payload);
        if (error) throw error;
        toast.success("Product created");
      }
      setOpen(false);
      refetch();
    } catch (err: any) {
      toast.error(err.message || "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (p: Product) => {
    if (!confirm(`Delete "${p.title}"?`)) return;
    const { error } = await supabase.from("products").delete().eq("id", p.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      refetch();
    }
  };

  const reorder = async (p: Product, dir: -1 | 1) => {
    const { error } = await supabase
      .from("products")
      .update({ display_order: p.display_order + dir })
      .eq("id", p.id);
    if (!error) refetch();
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  if (adminLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading…</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-cream">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
          <div className="max-w-md text-center bg-white rounded-2xl border-2 border-primary/30 p-8">
            <h1 className="text-2xl font-bold text-dark mb-3">Access required</h1>
            <p className="text-muted-foreground mb-6">
              Your account ({session?.user.email}) doesn't have admin access yet. Ask an existing admin
              to grant you the <strong>admin</strong> role, or sign in with a different account.
            </p>
            <div className="flex flex-col gap-2">
              <Button onClick={signOut} variant="outline">
                <LogOut className="w-4 h-4 mr-2" /> Sign out
              </Button>
              <Link to="/" className="text-sm text-primary hover:underline">
                Back to home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark">Manage Products</h1>
              <p className="text-muted-foreground mt-1">Signed in as {session?.user.email}</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={openNew}>
                <Plus className="w-4 h-4 mr-2" /> New product
              </Button>
              <Button variant="outline" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-2" /> Sign out
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {products.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-4 bg-white border-2 border-primary/20 rounded-xl p-4"
              >
                <img
                  src={resolveProductImage(p.cover_image)}
                  alt={p.title}
                  className="w-20 h-20 object-contain bg-cream rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-dark truncate">{p.title}</h3>
                    {!p.published && (
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">Hidden</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">/{p.slug}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button size="icon" variant="ghost" onClick={() => reorder(p, -1)} title="Move up">
                    <ArrowUp className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" onClick={() => reorder(p, 1)} title="Move down">
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="outline" onClick={() => openEdit(p)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="destructive" onClick={() => handleDelete(p)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Product" : "New Product"}</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div>
              <Label>Slug (URL)</Label>
              <Input
                value={form.slug}
                placeholder={slugify(form.title) || "auto-from-title"}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
              />
            </div>
            <div>
              <Label>Short description</Label>
              <Input
                value={form.short_description}
                onChange={(e) => setForm({ ...form, short_description: e.target.value })}
              />
            </div>
            <div>
              <Label>Long description</Label>
              <Textarea
                rows={5}
                value={form.long_description}
                onChange={(e) => setForm({ ...form, long_description: e.target.value })}
              />
            </div>

            <div>
              <Label>Cover image</Label>
              <div className="flex items-center gap-3 mt-2">
                {form.cover_image && (
                  <img
                    src={resolveProductImage(form.cover_image)}
                    alt=""
                    className="w-20 h-20 object-contain bg-cream rounded-lg border"
                  />
                )}
                <label className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 border rounded-lg hover:bg-muted">
                  <Upload className="w-4 h-4" />
                  {uploadingCover ? "Uploading…" : "Upload"}
                  <input type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
                </label>
                {form.cover_image && (
                  <Button variant="ghost" size="sm" onClick={() => setForm({ ...form, cover_image: "" })}>
                    Remove
                  </Button>
                )}
              </div>
            </div>

            <div>
              <Label>Gallery</Label>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                {form.gallery.map((img, i) => (
                  <div key={i} className="relative aspect-square">
                    <img src={img} alt="" className="w-full h-full object-cover rounded-lg border" />
                    <button
                      onClick={() => removeGalleryImage(i)}
                      className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <label className="aspect-square cursor-pointer flex flex-col items-center justify-center gap-1 border-2 border-dashed rounded-lg hover:bg-muted text-xs text-muted-foreground">
                  <Upload className="w-5 h-5" />
                  {uploadingGallery ? "Uploading…" : "Add"}
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={handleGalleryUpload}
                  />
                </label>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                checked={form.published}
                onCheckedChange={(v) => setForm({ ...form, published: v })}
              />
              <Label>Published (visible on site)</Label>
            </div>

            <div>
              <Label>Display order</Label>
              <Input
                type="number"
                value={form.display_order}
                onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value || "0", 10) })}
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving…" : "Save"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
