import './App.css'
import Hero from './components/Hero.tsx'
import AboutBox from './components/About'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section" aria-label="Sekcja hero">
        <Hero />
      </section>

      <section className="section-placeholder" aria-label="Sekcja o nas">
        <AboutBox />
      </section>

      <section className="section-placeholder" aria-label="Sekcja projekty">
        <h2>Projekty</h2>
      </section>

      <section className="section-placeholder" aria-label="Sekcja kontakt">
        <h2>Kontakt</h2>
      </section>
    </main>
  )
}

export default App
