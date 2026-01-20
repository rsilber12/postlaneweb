import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Phone, Mail, Clock, Upload, X, Check } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    "Commercial Installation",
    "Residential Complex",
    "Municipal Project",
    "Fleet Charging",
    "Other",
  ];

  const productOptions = [
    "Bollards",
    "Pedestals",
    "Wallards",
    "Signage",
    "Bundles",
  ];

  const handleProductInterestToggle = (product: string) => {
    setProductInterests(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
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
              <h1 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-light-muted text-lg mb-8">
                Your quote request has been submitted. Our team will get back to you within 1 business day.
              </p>
              <a href="/" className="btn-primary">
                Return to Home
              </a>
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
            <h1 className="text-3xl md:text-4xl font-bold text-light-foreground mb-4">
              Request a Quote
            </h1>
            <p className="text-light-muted text-lg">
              Get in touch with our team for custom solutions and project quotes
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company */}
                <div>
                  <label className="form-label">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
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
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="form-label">
                    Project Type <span className="text-primary">*</span>
                  </label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="form-input"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Product Interest */}
                <div>
                  <label className="form-label">
                    Product Interest <span className="text-primary">*</span>
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {productOptions.map((product) => (
                      <label 
                        key={product}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={productInterests.includes(product)}
                          onChange={() => handleProductInterestToggle(product)}
                          className="w-5 h-5 rounded border-light-border text-primary focus:ring-primary"
                        />
                        <span className="text-light-foreground">{product}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="form-label">
                    Quantity <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="form-input"
                    placeholder="e.g., 10 units"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="form-label">
                    Upload Logo (Optional)
                  </label>
                  <p className="text-sm text-light-muted mb-3">
                    Upload vector (.ai/.eps/.svg) or high-res PNG. We'll confirm artwork within 1-2 business days.
                  </p>
                  <div className="relative">
                    {!uploadedFile ? (
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-light-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-light-card">
                        <Upload className="w-8 h-8 text-light-muted mb-2" />
                        <span className="text-light-muted">Click to upload or drag and drop</span>
                        <input
                          type="file"
                          className="hidden"
                          accept=".ai,.eps,.svg,.png"
                          onChange={handleFileChange}
                        />
                      </label>
                    ) : (
                      <div className="flex items-center justify-between p-4 bg-light-card border border-light-border rounded-lg">
                        <span className="text-light-foreground">{uploadedFile.name}</span>
                        <button
                          type="button"
                          onClick={() => setUploadedFile(null)}
                          className="p-1 hover:bg-light-border rounded transition-colors"
                        >
                          <X className="w-5 h-5 text-light-muted" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input min-h-[120px] resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  GET IN TOUCH
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info Sidebar */}
            <AnimatedSection delay={0.4} className="space-y-6">
              {/* Contact Cards */}
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

              {/* Quick Response Note */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h4 className="font-semibold text-light-foreground mb-2">
                  Quick Response Time
                </h4>
                <p className="text-light-muted text-sm">
                  Our team typically responds to quote requests within 1 business day. 
                  For urgent projects, call us directly.
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
