import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE, STATS } from "@/data";
import AboutImage from "@/assets/AboutImage.webp";

const RotatingStat = ({ value, label }: { value: string; label: string }) => {
  const [index, setIndex] = useState(0);
  const items = [
    { value, label },
    { value: "ENS", label: "Graduate" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[4.5rem] md:h-20 relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            {items[index].value}
          </p>
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {items[index].label}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative aspect-[3/4] max-w-md overflow-hidden">
              {/* Border frame */}
              <div className="absolute -inset-4 border border-border-subtle rounded-xl transition-colors duration-300 group-hover:border-foreground/30" />
              <img
                src={AboutImage}
                alt="Azlef Iskandar"
                className="w-full h-full object-cover rounded-lg image-hover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8"
            >
              {PROFILE.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed mb-12"
            >
              {PROFILE.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border-subtle"
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center md:text-left"
                >
                  {stat.label === "Degree" ? (
                    <RotatingStat value={stat.value} label={stat.label} />
                  ) : (
                    <>
                      <p className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
