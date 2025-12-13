import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { EXPERIENCE } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            My Journey
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Experience
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-border-subtle to-transparent" />

            <div className="space-y-6">
              {EXPERIENCE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-4 md:left-8 top-6 w-2.5 h-2.5 rounded-full bg-foreground -translate-x-1/2 ring-4 ring-background shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                  />

                  <div className="p-5 md:p-6 rounded-xl border border-border-subtle bg-card/30 hover:bg-card/50 hover:border-border-hover transition-all group">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground border border-border-subtle">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">
                      {item.title}
                    </h3>

                    {'organizationUrl' in item && item.organizationUrl ? (
                      <a
                        href={item.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-foreground font-bold underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground transition-colors mb-3"
                      >
                        {item.organization}
                        <ExternalLink size={12} className="opacity-50" />
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground font-medium mb-3">
                        {item.organization}
                      </p>
                    )}

                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
