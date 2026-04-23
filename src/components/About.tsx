import teamPicture from '../assets/team.png'
import infoIcon from '../assets/Info.svg'

function AboutText() {
  return (
    <div className="about-text-container">
      <div className="about-header">
        <img src={infoIcon} alt="info icon" />
        <h1> Kim jesteśmy? </h1>
      </div>
      <h2>
        Jesteśmy AI Med, czyli Artificial Intelligence in Medicine. Jako koło naukowe Akademii
        Górniczo-Hutniczej w Krakowie, łączymy medycynę z nowoczesnymi technologiami sztucznej
        inteligencji.
        <br />
        <br />
        Naszą misją jest rozwój innowacyjnych rozwiązań wspierających diagnostykę, terapię oraz
        analizę danych medycznych. Ale przede wszystkim staramy się łączyć pasje z nauką i w
        przyjaznej atmosferze tworzyć własne rozwiązania różnych problemów.
      </h2>
    </div>
  )
}

function AboutBox() {
  return (
    <div className="about-box">
      <AboutText />
      <img src={teamPicture} alt="Nasz zespół" className="about-picture"></img>
    </div>
  )
}

export default AboutBox
