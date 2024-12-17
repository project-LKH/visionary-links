import { FileText } from 'lucide-react'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
export default function Brochures({ id }) {

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">Brochures</h2>
        <div className="card-grid">
          <BrochureCard title="Networking Solutions" filename="networking_brochure.pdf" />
          <BrochureCard title="CCTV Systems" filename="cctv_brochure.pdf" />
          <BrochureCard title="Integrated Security" filename="integrated_security_brochure.pdf" />
        </div>
      </div>
    </section>
  )
}

function BrochureCard({ title, filename }) {

  const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
      const card = entry.target;
      

      card.dataset.isAnimating = 'true';

      if (entry.isIntersecting) {
        anime({
          targets: card,
          translateX: [100, 0], 
          opacity: [0, 1], 
          duration: 1000,
          easing: 'easeOutExpo',
     
          complete: () => {
            card.dataset.isAnimating = 'false';
          },
        });
      } else {
        anime({
          targets: card,
          translateX: [0, -100], 
          opacity: [1, 0], // 
          duration: 500,
          easing: 'easeInExpo',
          complete: () => {
            card.dataset.isAnimating = 'false';
          },
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.25,
      rootMargin: '0px 0px -25% 0px', 
    });
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      observer.observe(card);
    });

    return () => {

      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <FileText size={24} className="card-icon" />
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-description">Learn more about our {title.toLowerCase()} in this detailed brochure.</p>
      <a href={`/brochures/${filename}`} className="card-button" download>
        Download PDF
      </a>
    </div>
  )
}

