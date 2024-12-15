import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Brochures from './components/Brochures'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';


export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services id="services" />
        <Brochures id="brochures" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  )
}