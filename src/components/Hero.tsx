import Icon from './Icon'
import video from '../assets/bg-video.mp4'

function SloganBox() {
  return (
    <div className="slogan-box box-border bg-blur">
      <h1>Zdobądź wiedzę kształtującą przyszłość</h1>
      <h2>
        Wspólnie z nami naucz się wykorzystywać AI i uczenie maszynowe w różnych zastosowaniach
        medycznych i nie tylko.
      </h2>
    </div>
  )
}

function IconBox() {
  return (
    <div className="icon-box">
      <a
        href="https://www.facebook.com/people/Ko%C5%82o-Naukowe-AI-Med/61570629163949/"
        aria-label="Facebook"
        className="icon-circle bg-blur"
      >
        <Icon type="facebook" size={34} />
      </a>
      <a href="https://github.com/AI-MED-AGH" aria-label="GitHub" className="icon-circle bg-blur">
        <Icon type="github" size={34} />
      </a>
      <a
        href="https://www.instagram.com/aimed_agh/"
        aria-label="Instagram"
        className="icon-circle bg-blur"
      >
        <Icon type="instagram" size={34} />
      </a>
      <a href="mailto:aimed@agh.edu.pl" aria-label="Mail" className="icon-circle bg-blur">
        <Icon type="gmail" size={34} />
      </a>
    </div>
  )
}

function BgVideo() {
  return (
    <>
      <div className="bg-video-layer">
        <video className="bg-video-media" autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

function Hero() {
  return (
    <>
      <BgVideo />
      <SloganBox />
      <IconBox />
    </>
  )
}

export default Hero
