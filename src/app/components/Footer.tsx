import { motion } from "motion/react";
import { Instagram, Link as LinkIcon, Linkedin, Facebook } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram size={24} />,
    },
    {
      name: "Linktree",
      url: "https://linktr.ee",
      icon: <LinkIcon size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook size={24} />,
    },
  ];

  return (
    <footer className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-all"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              aria-label={link.name}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-slate-500 dark:text-slate-400 mt-8 text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © 2026 Words of Ahmad. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
