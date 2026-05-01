import Project from './Project'

const projects = [
  {
    id: 1,
    name: 'Badania Kliniczne',
    desc: 'Zrealizowano szereg badań mających na celu weryfikację skuteczności opracowanych modeli w praktyce klinicznej.',
    imgPath: 'src/assets/current_projects/badania-kliniczne.png',
  },
  {
    id: 2,
    name: 'Wykrywanie Kardiomegalii',
    desc: 'Projekt opierał się na znalezieniu i opracowaniu odpowiednich cech, które były potem wykorzystane do wyuczenia wybranych modelów do prawidłowej predykcji osoby chorej lub zdrowej.',
    imgPath: 'src/assets/current_projects/wykrywanie-kardiomegalii.png',
  },
  {
    id: 3,
    name: 'Analiza Obrazów Medycznych',
    desc: 'Badanie miało na celu przetwarzanie obrazów medycznych w celu identyfikacji strukturalnych anomalii w sercu.',
    imgPath: 'src/assets/current_projects/analiza-obrazow-medycznych.png',
  },
  {
    id: 4,
    name: 'Rozwój Aplikacji Mobilnych',
    desc: 'Projektując aplikację, skupiliśmy się na użyteczności i funkcjonalności, aby ułatwić użytkownikom monitorowanie stanu zdrowia.',
    imgPath: 'src/assets/current_projects/rozwoj-aplikacji-mobilnych.png',
  },
]

function CurrentProjects() {
  return (
    <>
      <div className="current-projects-header">
        <h2>Aktualne projekty</h2>
      </div>
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
