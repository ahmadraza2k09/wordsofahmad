import { motion } from "motion/react";

interface AboutSectionProps {
  name: string;
  bio: string;
  imageUrl: string;
}

export default function AboutSection({ name, bio, imageUrl }: AboutSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-5xl text-center mb-16 text-slate-900 dark:text-slate-50"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          About the Writer
        </h2>

        <div className="rounded-2xl p-8 bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 shadow-lg">
          <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl ring-4 ring-slate-200 dark:ring-slate-700 flex items-center justify-center bg-slate-100 dark:bg-slate-700">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover object-center"
                style={{maxWidth: '100%', maxHeight: '100%'}}
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p
              className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {bio}
            </p>
          </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
