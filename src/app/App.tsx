import { motion } from "motion/react";
import BookletCard from "./components/BookletCard";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import profileImage from "../assets/59bdb75c671f626198cb74a71944a56e15def094.png";

export default function App() {
  const booklets = [
    {
      title: "Become Architect of your Future",
      description:
        "A motivational guide empowering youth to take charge of their destinies, build strong foundations, and design the future they envision through purposeful action.",
      pages: 24,
      coverImage: "/becomeanarchitechtofyourfuture.png",
      pdfUrl: "/Become Architect of your Future.pdf",
    },
    {
      title: "The Story of the Pak-India War",
      description:
        "An in-depth historical account of the Pak-India War, examining its causes, key events, and lasting impact on the subcontinent's geopolitical landscape.",
      pages: 32,
      coverImage: "/storyofpakindiawar.jpeg",
      pdfUrl: "/The Story of the Pak-India War.pdf",
    },
    {
      title: "Unveiling Pakistan's Economy",
      description:
        "A research-driven exploration of Pakistan's economic structure, challenges, and opportunities — written to inform and inspire the next generation of economic thinkers.",
      pages: 20,
      coverImage: "/unvelingpakistaneconomy.jpeg",
      pdfUrl: "/Unveiling Pakistan's Economy.pdf",
    },
  ];

  const writerBio = `Muhammad Ahmad Raza is a passionate student, researcher, and youth leader from Pakistan. As the founder of Youth Awareness Network (YAN), he is dedicated to spreading awareness, empowering young people, and creating opportunities for growth and learning.

He is an alumnus of the Access Microscholarship Program and was selected among top students across Pakistan to attend the Access Pakistan Student Summit 2025. Ahmad has actively led impactful community projects such as "Fuel the Future," supported by RELO and the U.S. Embassy Islamabad.

With a strong interest in research, writing, and innovation, he has authored multiple awareness-based booklets aimed at educating and inspiring youth. Alongside his academic excellence, he works as a UI/UX designer, creating simple and user-friendly digital solutions.

Through his work, Ahmad aims to connect youth globally, promote knowledge-sharing, and inspire positive change in society.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <DarkModeToggle />

      {/* Header */}
      <header className="pt-20 pb-16 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-7xl md:text-8xl mb-4 text-slate-900 dark:text-slate-50 tracking-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Words of Ahmad
          </motion.h1>
          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Project of Youth Awareness Network
          </motion.p>
        </motion.div>
      </header>

      {/* Booklets Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          className="text-5xl text-center mb-20 text-slate-900 dark:text-slate-50"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Booklets
        </motion.h2>

        <div className="space-y-16">
          {booklets.map((booklet, index) => (
            <BookletCard
              key={index}
              {...booklet}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection
        name="Muhammad Ahmad Raza"
        bio={writerBio}
        imageUrl={profileImage}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}