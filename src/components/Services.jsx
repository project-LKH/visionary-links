import { Network, Camera, Shield } from 'lucide-react'

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
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  )
}

