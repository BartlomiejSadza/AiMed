import Icon from './Icon'
import video from '../assets/bg-video.webm'
import fallbackVideo from '../assets/bg-video-fallback.mp4'
import poster from '../assets/poster.webp'
import { Links } from '../utils/links'

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
      <a href={Links.facebook} aria-label="Facebook" className="icon-circle bg-blur">
        <Icon type="facebook" size={34} />
      </a>
      <a href={Links.github} aria-label="GitHub" className="icon-circle bg-blur">
        <Icon type="github" size={34} />
      </a>
      <a href={Links.instagram} aria-label="Instagram" className="icon-circle bg-blur">
        <Icon type="instagram" size={34} />
      </a>
      <a href={Links.mail} aria-label="Mail" className="icon-circle bg-blur">
        <Icon type="gmail" size={34} />
      </a>
    </div>
  )
}

function BgVideo() {
  return (
    <>
      <div className="bg-video-layer">
        <video className="bg-video-media" poster={poster} autoPlay loop muted playsInline>
          <source src={video} type="video/webm" />
          <source src={fallbackVideo} type="video/mp4" />
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
