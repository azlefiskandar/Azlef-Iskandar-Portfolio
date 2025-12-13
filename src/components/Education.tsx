import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { EDUCATION } from "@/data";

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Academic Background
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {EDUCATION.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="p-6 md:p-8 rounded-xl border border-border-subtle bg-background hover:border-border-hover transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-elevated flex items-center justify-center text-muted-foreground group-hover:bg-foreground/10 transition-colors">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground/10 text-foreground border border-foreground/20">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {'institutionUrl' in item && item.institutionUrl ? (
                    <a
                      href={item.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground font-bold underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground transition-colors mb-1"
                    >
                      {item.institution}
                      <ExternalLink size={12} className="opacity-50" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      {item.institution}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground/70 mb-3">
                    {item.period}
                  </p>

                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
