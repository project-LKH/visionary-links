import { Network, Camera, Shield } from 'lucide-react'
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';
export default function Services({ id }) {
  
  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <ServiceCard
            icon={<Network size={48} />}
            title="Networking Solutions"
            description="Cutting-edge networking infrastructure for businesses of all sizes."
          />
          <ServiceCard
            icon={<Camera size={48} />}
            title="CCTV Surveillance"
            description="State-of-the-art CCTV systems for enhanced security and monitoring."
          />
          <ServiceCard
            icon={<Shield size={48} />}
            title="Security Integration"
            description="Seamless integration of networking and surveillance for comprehensive security."
          />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
   const handleScrollAnimation = (entries, observer) => {
    entries.forEach(entry => {
      const card = entry.target;
      
      if (card.dataset.isAnimating === 'true') return;  

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
          opacity: [1, 0], 
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
        threshold: 0.20, 
        rootMargin: '0px 0px -20% 0px',

      });
      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => {
        observer.observe(card);
      });
  
      return () => {
        cards.forEach(card => observer.unobserve(card));
      };
    }, []);

  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  )
}

