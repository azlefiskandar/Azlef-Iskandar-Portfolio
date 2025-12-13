import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Copy, Check, Download, Send, Loader2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { PROFILE } from "@/data";
import CV from "@/assets/C.V 2026- Azlef Iskandar (avec photo).pdf";

const Contact = () => {
  const [state, handleSubmit] = useForm("xanrvano");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: PROFILE.location,
      delay: 0.1,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PROFILE.phone,
      href: `tel:${PROFILE.phone}`,
      delay: 0.2,
    },
    {
      icon: Mail,
      label: "Email",
      value: PROFILE.email,
      href: `mailto:${PROFILE.email}`,
      copyable: true,
      delay: 0.3,
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Contact
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: item.delay }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-border-subtle hover:bg-card/50 transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-elevated flex items-center justify-center">
                    <item.icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    <div className="flex items-center gap-2">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-muted-foreground transition-colors truncate"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{item.value}</p>
                      )}
                      {item.copyable && (
                        <motion.button
                          onClick={copyEmail}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors p-1"
                          title="Copy to clipboard"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CV Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="pt-4"
            >
              <motion.a
                href={CV}
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-4 w-full justify-center rounded-xl border-2 border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-300 font-medium"
              >
                <Download size={18} strokeWidth={1.5} />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="p-8 md:p-10 rounded-2xl border border-border-subtle bg-card/30 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {state.succeeded ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="h-full min-h-[300px] flex items-center justify-center"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center mx-auto mb-6"
                      >
                        <Check size={32} className="text-foreground" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-heading font-bold text-foreground mb-3"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-muted-foreground"
                      >
                        Thank you for reaching out. I'll get back to you soon.
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-muted-foreground">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:ring-1 focus:ring-foreground/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-muted-foreground">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:ring-1 focus:ring-foreground/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-muted-foreground">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:ring-1 focus:ring-foreground/20 outline-none transition-all"
                        placeholder="How can I help you?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-muted-foreground">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-background/50 border border-border-subtle rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:border-foreground focus:ring-1 focus:ring-foreground/20 outline-none transition-all resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={state.submitting}
                      whileHover={{ scale: state.submitting ? 1 : 1.02 }}
                      whileTap={{ scale: state.submitting ? 1 : 0.98 }}
                      className="w-full px-8 py-4 bg-foreground text-background font-medium rounded-xl border-2 border-foreground hover:bg-background hover:text-foreground transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    >
                      <AnimatePresence mode="wait">
                        {state.submitting ? (
                          <motion.span
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </motion.span>
                        ) : (
                          <motion.span
                            key="send"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-3"
                          >
                            <Send size={18} />
                            Send Message
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
