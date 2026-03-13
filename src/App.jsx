import React from "react";
import Booklet from "./components/Booklet";

const booklets = [
  {
    id: 1,
    title: "Become Architect of your Future",
    img: "/becomeanarchitechtofyourfuture.png",
    pdfView: "/Become Architect of your Future.pdf",
    pdfDownload: "/becomeanarchitechtofyourfuture.pdf",
    pages: "10",
    bullets: [
      "The Age Between 11 to 20 – Not Just for Fun",
      "The Power of Small Decisions",
      "The Importance of Education – Clear the Myths",
      "Choosing the Right Profession",
      "Final Words – Build Before It's Too Late"
    ]
  },
  {
    id: 2,
    title: "Unveiling Pakistan's Economy",
    img: "/unvelingpakistaneconomy.jpeg",
    pdfView: "/Unveiling Pakistan's Economy.pdf",
    pdfDownload: "/Unveiling Pakistan's Economy.pdf",
    pages: "13",
    bullets: [
      "What is GDP?",
      "What is GDP per Capita?",
      "What is PPP?",
      "What is PPP per Capita?",
      "When Did Pakistan's GDP Rise and Fall the Most?",
      "How Much Money Do People Need VS What They Actually Earn in Pakistan?",
      "Corruption in Pakistan",
      "Currency Misconceptions"
    ]
  },
  {
    id: 3,
    title: "The Story of the Pak-India War",
    img: "/storyofpakindiawar.jpeg",
    pdfView: "/The Story of the Pak-India War.pdf",
    pdfDownload: "/The Story of the Pak-India War.pdf",
    pages: "12",
    bullets: [
      "The Pahalgam Attack (the spark)",
      "The Indus Water Treaty and Its Importance",
      "Who Attacked First and Where?",
      "Mission Sindoor and Bunyan Al Marsoos",
      "Who Actually Won?"
    ]
  }
];

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
          <img src="/logo.jfif" alt="logo" className="logo" />
          <div>
            <h1>Words of Ahmad</h1>
            <p className="tag">A Project of Youth Awareness Network</p>
          </div>
        </div>
      </header>

      <main className="container">
        {booklets.map((b) => (
          <Booklet key={b.id} book={b} />
        ))}
      </main>

      <footer className="site-footer">
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=61551895114490" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.linkedin.com/in/ahmadraza2k09/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
        <p>Contact: M. Ahmad Raza | <a href="mailto:ahmadrazahfa@gmail.com">ahmadrazahfa@gmail.com</a> | +923405463601</p>
        <p><a className="whatsapp" href="https://wa.me/923405463601" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i> Chat on WhatsApp</a></p>
        <p>&copy; 2025 All Rights Reserved. Designed with ❤️ by Ahmad</p>
      </footer>
    </div>
  );
}
