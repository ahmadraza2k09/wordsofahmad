import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Download, BookOpen, X } from "lucide-react";

interface BookletCardProps {
  title: string;
  description: string;
  pages: number;
  coverImage: string;
  pdfUrl: string;
  index: number;
}

export default function BookletCard({
  title,
  description,
  pages,
  coverImage,
  pdfUrl,
  index,
}: BookletCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      style={{ perspective: "1200px" }}
      className="w-full max-w-[340px] mx-auto cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={() => setIsFlipped((f) => !f)}
    >
      {/* Flip hint badge */}
      <AnimatePresence>
        {!isFlipped && (
          <motion.div
            className="text-center text-xs text-slate-400 dark:text-slate-500 mb-2"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Tap to flip
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{
          position: "relative",
          aspectRatio: "1414 / 2000",
          transformStyle: "preserve-3d",
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 80, damping: 14 }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* title on front */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p
              className="text-white text-xl font-semibold drop-shadow"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </p>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 shadow-2xl p-7 flex flex-col justify-between"
        >
          {/* Close / flip back indicator */}
          <div className="flex justify-between items-start mb-3">
            <h3
              className="text-2xl leading-tight text-slate-900 dark:text-slate-50 flex-1 pr-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {title}
            </h3>
            <button
              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors mt-1"
              onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
              aria-label="Flip back"
            >
              <X size={18} />
            </button>
          </div>

          <p
            className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm flex-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {description}
          </p>

          <p
            className="text-xs text-slate-400 dark:text-slate-500 mt-3 mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {pages} pages
          </p>

          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 py-3 px-5 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-slate-700 dark:hover:bg-white transition-colors shadow-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={(e) => {
                e.stopPropagation();
                window.open(pdfUrl, "_blank");
              }}
            >
              <BookOpen size={18} />
              Read Online
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full border-2 border-slate-900 dark:border-slate-100 text-slate-900 dark:text-slate-100 py-3 px-5 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-slate-900 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
              onClick={(e) => {
                e.stopPropagation();
                const a = document.createElement("a");
                a.href = pdfUrl;
                a.download = `${title}.pdf`;
                a.click();
              }}
            >
              <Download size={18} />
              Download PDF
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
