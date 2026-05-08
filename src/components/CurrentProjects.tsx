import Project from './Project'
import badanieKliniczneImg from '../assets/current_projects/badania-kliniczne.png'
import badanieKliniczneWebp from '../assets/current_projects/badania-kliniczne.webp'
import badanieKliniczneAvif from '../assets/current_projects/badania-kliniczne.avif'

import wykrywanieKardiomegaliiImg from '../assets/current_projects/wykrywanie-kardiomegalii.png'
import wykrywanieKardiomegaliiWebp from '../assets/current_projects/wykrywanie-kardiomegalii.webp'
import wykrywanieKardiomegaliiAvif from '../assets/current_projects/wykrywanie-kardiomegalii.avif'

import analizaObrazowMedycznychImg from '../assets/current_projects/analiza-obrazow-medycznych.png'
import analizaObrazowMedycznychWebp from '../assets/current_projects/analiza-obrazow-medycznych.webp'
import analizaObrazowMedycznychAvif from '../assets/current_projects/analiza-obrazow-medycznych.avif'

import rozwojAplikacjiMobilnychImg from '../assets/current_projects/rozwoj-aplikacji-mobilnych.png'
import rozwojAplikacjiMobilnychWebp from '../assets/current_projects/rozwoj-aplikacji-mobilnych.webp'
import rozwojAplikacjiMobilnychAvif from '../assets/current_projects/rozwoj-aplikacji-mobilnych.avif'

const projects = [
  {
    id: 1,
    name: 'Badania Kliniczne',
    desc: 'Zrealizowano szereg badań mających na celu weryfikację skuteczności opracowanych modeli w praktyce klinicznej.',
    imgPath: badanieKliniczneImg,
    webpPath: badanieKliniczneWebp,
    avifPath: badanieKliniczneAvif,
  },
  {
    id: 2,
    name: 'Wykrywanie Kardiomegalii',
    desc: 'Projekt opierał się na znalezieniu i opracowaniu odpowiednich cech, które były potem wykorzystane do wyuczenia wybranych modelów do prawidłowej predykcji osoby chorej lub zdrowej.',
    imgPath: wykrywanieKardiomegaliiImg,
    webpPath: wykrywanieKardiomegaliiWebp,
    avifPath: wykrywanieKardiomegaliiAvif,
  },
  {
    id: 3,
    name: 'Analiza Obrazów Medycznych',
    desc: 'Badanie miało na celu przetwarzanie obrazów medycznych w celu identyfikacji strukturalnych anomalii w sercu.',
    imgPath: analizaObrazowMedycznychImg,
    webpPath: analizaObrazowMedycznychWebp,
    avifPath: analizaObrazowMedycznychAvif,
  },
  {
    id: 4,
    name: 'Rozwój Aplikacji Mobilnych',
    desc: 'Projektując aplikację, skupiliśmy się na użyteczności i funkcjonalności, aby ułatwić użytkownikom monitorowanie stanu zdrowia.',
    imgPath: rozwojAplikacjiMobilnychImg,
    webpPath: rozwojAplikacjiMobilnychWebp,
    avifPath: rozwojAplikacjiMobilnychAvif,
  },
]

function CurrentProjects() {
  return (
    <>
      <div className="current-projects-header">
        <h2>Aktualne projekty</h2>
        <div className="glow-header"></div>
      </div>
      {/* glow effects */}
      <div
        className="glow-ball-big visually-hidden-mobile"
        style={{ transform: 'translate(36vw, 1vw)' }}
      ></div>
      <div
        className="glow-ball-big visually-hidden-mobile"
        style={{ transform: 'translate(-55vw, 30vw)' }}
      ></div>
      <div
        className="glow-ball-big visually-hidden-mobile"
        style={{ transform: 'translate(36vw, 44vw)' }}
      ></div>{' '}
      <div
        className="glow-ball-big visually-hidden-mobile"
        style={{ transform: 'translate(6vw, 9vw)' }}
      ></div>
      <div
        className="glow-ball-small visually-hidden-mobile"
        style={{ transform: 'translate(-10vw, 59vw)' }}
      ></div>
      {/* projects */}
      <div className="current-projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            desc={project.desc}
            imgPath={project.imgPath}
            webpPath={project.webpPath}
            avifPath={project.avifPath}
          />
        ))}
      </div>
    </>
  )
}

export default CurrentProjects
