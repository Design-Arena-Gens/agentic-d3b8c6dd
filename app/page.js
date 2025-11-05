"use client";
import { useState } from 'react';
import styles from './page.module.css';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Jogerő a szabálysértési törvény alapján",
      subtitle: "A jogerő fogalma és szerepe a szabálysértési eljárásban",
      content: [
        "A jogerő a határozatok végleges érvényét jelenti",
        "A 2012. évi II. törvény (Sztv.) szabályozza",
        "Biztosítja a jogbiztonságot és az eljárás véglegességét",
        "A jogerős határozat nem változtatható meg rendes jogorvoslattal"
      ],
      icon: "⚖️"
    },
    {
      title: "A jogerő beálltának feltételei",
      subtitle: "Mikor válik véglegesé a szabálysértési határozat",
      content: [
        "Fellebbezési határidő lejárta után (15 nap)",
        "Ha a jogosult lemondott a fellebbezésről",
        "Másodfokú határozat kihirdetésével vagy közlésével",
        "Törvényben meghatározott kivételes esetekben eltérés lehetséges"
      ],
      icon: "📋"
    },
    {
      title: "A jogerő joghatásai",
      subtitle: "Mit jelent a jogerős határozat az érintettek számára",
      content: [
        "Ne bis in idem elv: ugyanazon cselekmény miatt nem büntethető újra",
        "Végrehajthatóság: a büntetés vagy intézkedés végrehajtható",
        "Kényszerítő erő: megváltozhatatlanság és kötelező jelleg",
        "Igazsághatás: a tényállás megállapítása végleges"
      ],
      icon: "✅"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slideWrapper}>
        <div className={styles.slide}>
          <div className={styles.slideHeader}>
            <div className={styles.icon}>{slides[currentSlide].icon}</div>
            <h1 className={styles.title}>{slides[currentSlide].title}</h1>
          </div>

          <div className={styles.subtitle}>
            {slides[currentSlide].subtitle}
          </div>

          <div className={styles.content}>
            {slides[currentSlide].content.map((item, index) => (
              <div key={index} className={styles.contentItem}>
                <span className={styles.bullet}>▸</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.slideNumber}>
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        <div className={styles.navigation}>
          <button
            onClick={prevSlide}
            className={styles.navButton}
            disabled={currentSlide === 0}
          >
            ← Előző
          </button>

          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className={styles.navButton}
            disabled={currentSlide === slides.length - 1}
          >
            Következő →
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <p>Használd a nyilakat vagy kattints a pontokra a navigáláshoz</p>
      </div>
    </div>
  );
}
