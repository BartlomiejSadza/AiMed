import Project from './Project'
import badanieKliniczneImg from '../assets/current_projects/badania-kliniczne.png'
import wykrywanieKardiomegaliiImg from '../assets/current_projects/wykrywanie-kardiomegalii.png'
import analizaObrazowMedycznychImg from '../assets/current_projects/analiza-obrazow-medycznych.png'
import rozwojAplikacjiMobilnychImg from '../assets/current_projects/rozwoj-aplikacji-mobilnych.png'

const projects = [
  {
    id: 1,
    name: 'Badania Kliniczne',
    desc: 'Zrealizowano szereg badań mających na celu weryfikację skuteczności opracowanych modeli w praktyce klinicznej.',
    imgPath: badanieKliniczneImg,
  },
  {
    id: 2,
    name: 'Wykrywanie Kardiomegalii',
    desc: 'Projekt opierał się na znalezieniu i opracowaniu odpowiednich cech, które były potem wykorzystane do wyuczenia wybranych modelów do prawidłowej predykcji osoby chorej lub zdrowej.',
    imgPath: wykrywanieKardiomegaliiImg,
  },
  {
    id: 3,
    name: 'Analiza Obrazów Medycznych',
    desc: 'Badanie miało na celu przetwarzanie obrazów medycznych w celu identyfikacji strukturalnych anomalii w sercu.',
    imgPath: analizaObrazowMedycznychImg,
  },
  {
    id: 4,
    name: 'Rozwój Aplikacji Mobilnych',
    desc: 'Projektując aplikację, skupiliśmy się na użyteczności i funkcjonalności, aby ułatwić użytkownikom monitorowanie stanu zdrowia.',
    imgPath: rozwojAplikacjiMobilnychImg,
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
          />
        ))}
      </div>
    </>
  )
}

export default CurrentProjects
