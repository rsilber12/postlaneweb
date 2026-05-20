import { useRef, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Phone, Mail, Clock, Upload, X, Check, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";


const PROJECT_TYPES = [
  "Commercial Installation",
  "Residential Complex",
  "Municipal Project",
  "Fleet Charging",
  "Other",
];

const PRODUCT_OPTIONS = ["Bollards", "Pedestals", "Wallards", "Signage", "Bundles"];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "bbea414f-7a01-4979-9e58-4d9bb0ecec13";

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    company: "",
    email: "",
    phone: "",
    projectType: "",
    quantity: "",
    message: "",
  });
  const [productInterests, setProductInterests] = useState<string[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSubmitted = searchParams.get("submitted") === "1";

  const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB

  const toggleProduct = (product: string) => {
    setProductInterests((prev) =>
      prev.includes(product) ? prev.filter((p) => p !== product) : [...prev, product],
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size > MAX_FILE_SIZE) {
      toast({
        title: "File Too Large",
        description: "Logo must be under 25MB.",
        variant: "destructive",
      });
      if (fileInputRef.current) fileInputRef.current.value = "";
      setUploadedFile(null);
      return;
    }
    setUploadedFile(file ?? null);
  };

  const clearFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (productInterests.length === 0) {
      toast({
        title: "Product Interest Required",
        description: "Please select at least one product interest.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload file to storage if present
      let logoUrl: string | null = null;
      let logoFileName: string | null = null;

      if (uploadedFile) {
        const ext = uploadedFile.name.split(".").pop() ?? "bin";
        const safeName = uploadedFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const path = `${Date.now()}-${crypto.randomUUID()}-${safeName}`;
        const { error: uploadError } = await supabase.storage
          .from("quote-attachments")
          .upload(path, uploadedFile, {
            contentType: uploadedFile.type || `application/${ext}`,
            upsert: false,
          });
        if (uploadError) throw uploadError;
        const { data: publicData } = supabase.storage
          .from("quote-attachments")
          .getPublicUrl(path);
        logoUrl = publicData.publicUrl;
        logoFileName = uploadedFile.name;
      }

      // 2. Submit form details + logo link to Web3Forms via JSON
      const payload: Record<string, string> = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Quote Request from ${formData.company || "Website Contact Form"}`,
        from_name: "Postlane Website",
        replyto: formData.email,
        Company: formData.company,
        Email: formData.email,
        Phone: formData.phone,
        "Project Type": formData.projectType,
        "Product Interests": productInterests.join(", "),
        Quantity: formData.quantity,
        Message: formData.message,
      };
      if (logoUrl) {
        payload["Logo File"] = logoFileName ?? "";
        payload["Logo Download Link"] = logoUrl;
      }

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || "Failed to submit form");
      }

      navigate("/contact?submitted=1");
    } catch (err) {
      console.error("Form submission error:", err);
      toast({
        title: "Submission Failed",
        description: err instanceof Error ? err.message : "Please try again or email Info@postlaneusa.com.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };




  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-light">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">Thank You!</h1>
              <p className="text-light-muted text-lg mb-8">
                Your quote request has been submitted. Our team will get back to you within 1 business day.
              </p>
              <a href="/" className="btn-primary">Return to Home</a>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">Request a Quote</h1>
            <p className="text-light-muted text-lg">
              Get in touch with our team for custom solutions and project quotes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <form
                action={WEB3FORMS_ENDPOINT}
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value={`New Quote Request from ${formData.company || "Website Contact Form"}`} />
                <input type="hidden" name="from_name" value="Postlane Website" />
                <input type="hidden" name="redirect" value={successUrl} />
                <input type="hidden" name="replyto" value={formData.email} />
                <input type="hidden" name="Product Interests" value={productInterests.join(", ")} />
                <div>
                  <label className="form-label">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="Company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="form-label">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      name="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Project Type <span className="text-primary">*</span>
                  </label>
                  <select
                    name="Project Type"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Select project type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label">
                    Product Interest <span className="text-primary">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {PRODUCT_OPTIONS.map((product) => (
                      <label key={product} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={productInterests.includes(product)}
                          onChange={() => toggleProduct(product)}
                          className="w-5 h-5 rounded border-light-border text-primary focus:ring-primary"
                        />
                        <span className="text-light-foreground">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">
                    Quantity <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="Quantity"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="form-input"
                    placeholder="e.g., 10 units"
                  />
                </div>

                <div>
                  <label className="form-label">Upload Logo (Optional)</label>
                  <p className="text-sm text-light-muted mb-3">
                    Upload vector (.ai/.eps/.svg) or high-res PNG, max 800KB. For larger files, email Info@postlaneusa.com. We'll confirm artwork within 1-2 business days.
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="attachment"
                    className="hidden"
                    accept=".ai,.eps,.svg,.png"
                    onChange={handleFileChange}
                  />
                  {!uploadedFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-light-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-light-card"
                    >
                      <Upload className="w-8 h-8 text-light-muted mb-2" />
                      <span className="text-light-muted">Click to upload or drag and drop</span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between p-4 bg-light-card border border-light-border rounded-lg">
                      <span className="text-light-foreground">{uploadedFile.name}</span>
                      <button
                        type="button"
                        onClick={clearFile}
                        className="p-1 hover:bg-light-border rounded transition-colors"
                      >
                        <X className="w-5 h-5 text-light-muted" />
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    name="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input min-h-[120px] resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "GET IN TOUCH"
                  )}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="space-y-6">
              <div className="bg-light-card border border-light-border rounded-xl p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-foreground mb-1">Phone</h4>
                    <a href="tel:+17183551808" className="text-light-muted hover:text-primary transition-colors">
                      718.355.1808
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-foreground mb-1">Email</h4>
                    <a href="mailto:Info@postlaneusa.com" className="text-light-muted hover:text-primary transition-colors">
                      Info@postlaneusa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-light-foreground mb-1">Business Hours</h4>
                    <p className="text-light-muted">
                      Monday - Friday<br />
                      8:00 AM - 6:00 PM EST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-light-foreground mb-2">Quick Response Time</h4>
                <p className="text-light-muted text-sm">
                  Our team typically responds to quote requests within 1 business day. For urgent projects, call us directly.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
