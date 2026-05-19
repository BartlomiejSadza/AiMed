import Icon from './Icon'
import LinkButton from './LinkButton'
import myChinaPalIconUrl from '../assets/my-china-pal.svg'
import { Links } from '../utils/links'

function ContactHeader() {
  return (
    <div className="contact-header">
      <h2>Napisz do nas!</h2>
      <p>Zostań naszym partnerem, współpracuj z nami i buduj przyszłość medycyny.</p>

      <div className="contact-header-buttons">
        <LinkButton link={Links.mail}>Email</LinkButton>
        <LinkButton link={Links.facebook}>Facebook</LinkButton>
        <LinkButton link={Links.github}>GitHub</LinkButton>
        <LinkButton link={Links.instagram}>Instagram</LinkButton>
      </div>
    </div>
  )
}

function ContactFooter() {
  return (
    <div className="contact-footer-wrapper">
      <div className="contact-footer">
        <img src={myChinaPalIconUrl} alt="My China Pal" className="my-china-pal-icon" />
        <div className="contact-footer-buttons">
          <LinkButton link={Links.facebook}>
            <Icon type="facebook" />
          </LinkButton>
          <LinkButton link={Links.github}>
            <Icon type="github" />
          </LinkButton>
          <LinkButton link={Links.instagram}>
            <Icon type="instagram" />
          </LinkButton>
          <LinkButton link={Links.mail}>
            <Icon type="gmail" />
          </LinkButton>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <>
      <ContactHeader />
      <ContactFooter />
    </>
  )
}

export default Contact
