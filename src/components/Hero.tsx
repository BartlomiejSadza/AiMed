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
      <a href="#" aria-label="Facebook" className="icon-circle bg-blur">
        <Icon type="facebook" size={34} />
      </a>
      <a href="#" aria-label="GitHub" className="icon-circle bg-blur">
        <Icon type="github" size={34} />
      </a>
      <a href="#" aria-label="Instagram" className="icon-circle bg-blur">
        <Icon type="instagram" size={34} />
      </a>
      <a href="#" aria-label="Gmail" className="icon-circle bg-blur">
        <Icon type="gmail" size={34} />
      </a>
    </div>
  )
}

function BgVideo() {
  return (
    <>
      <div className="bg-video">
        <video className="bg-video" autoPlay loop muted>
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
