import { motion } from "framer-motion";
import { Globe, Languages, Mic, GraduationCap, ArrowRight } from "lucide-react";
import { SERVICES } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} strokeWidth={1.5} />,
  Languages: <Languages size={28} strokeWidth={1.5} />,
  Mic: <Mic size={28} strokeWidth={1.5} />,
  GraduationCap: <GraduationCap size={28} strokeWidth={1.5} />,
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            What I Offer
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to meet the needs of students and educational institutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.2 }
              }}
              className="group p-8 bg-background border border-border-subtle rounded-xl transition-all duration-200 hover:border-border-hover hover:bg-elevated"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-elevated flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {iconMap[service.icon]}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                      Services Include:
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-sm text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Professional and personalized services tailored to your needs
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-xl border-2 border-foreground hover:bg-background hover:text-foreground transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Book a Session Now
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
