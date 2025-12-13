import { motion } from "framer-motion";
import { Play, Headphones } from "lucide-react";
import { MEDIA } from "@/data";

const Media = () => {
  return (
    <section id="media" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Learn With Me
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Educational Resources
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
            className="group bg-background border border-border-subtle overflow-hidden transition-all duration-300"
          >
            <div className="relative aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${MEDIA.youtube.videoId}`}
                title={MEDIA.youtube.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Play size={16} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-wider">YouTube</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {MEDIA.youtube.title}
              </h3>
            </div>
          </motion.div>

          {/* Spotify Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
            className="group bg-background border border-border-subtle overflow-hidden transition-all duration-300"
          >
            <div className="relative aspect-video bg-elevated flex items-center justify-center">
              <iframe
                src={MEDIA.spotify.embedUrl}
                width="100%"
                height="100%"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-none"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Headphones size={16} strokeWidth={1.5} />
                <span className="text-sm uppercase tracking-wider">Podcast</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {MEDIA.spotify.title}
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Social Proof Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-muted-foreground">
            Join <span className="text-foreground font-bold">30,000+</span> Learners on Instagram & YouTube
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Media;
