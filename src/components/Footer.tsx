import { motion } from "framer-motion";
import { DEVELOPER, PROFILE } from "@/data";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <>
      <BackToTop />
      <footer className="py-16 border-t border-border-subtle">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-signature text-3xl text-foreground/80"
            >
              {PROFILE.name}
            </motion.p>
            
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            
            <p className="text-muted-foreground/60 text-sm">
              Designed & Developed by{" "}
              <motion.a
                href={DEVELOPER.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors link-underline"
                whileHover={{ scale: 1.02 }}
              >
                {DEVELOPER.name}
              </motion.a>
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
