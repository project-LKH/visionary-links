import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          Visionary Links
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#brochures">Brochures</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="mobile-nav">
          <a href="#services">Services</a>
          <a href="#brochures">Brochures</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </header>
  )
}

