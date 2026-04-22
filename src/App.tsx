import './App.css'
import Hero from './components/Hero.tsx'

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="app-kicker">AI Med</p>
        <p>Landing page - workspace</p>
        <p className="app-description">Czysta baza pod development.</p>
      </header>

      <section className="hero-section" aria-label="Sekcja hero">
        <Hero />
      </section>

      <section className="section-placeholder" aria-label="Sekcja o nas">
        <h2>O nas</h2>
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
