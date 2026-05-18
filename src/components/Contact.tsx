import Icon from './Icon'
import LinkButton from './LinkButton'
import myChinaPalIconUrl from '../assets/my-china-pal.svg'

function ContactHeader() {
  return (
    <div className="contact-header">
      <h2>Napisz do nas!</h2>
      <p>Zostań naszym partnerem, współpracuj z nami i buduj przyszłość medycyny. </p>

      <div className="contact-header-buttons">
        <LinkButton link="mailto:aimed@agh.edu.pl">Email</LinkButton>
        <LinkButton link="https://www.facebook.com/people/Ko%C5%82o-Naukowe-AI-Med/61570629163949/">
          Facebook
        </LinkButton>
        <LinkButton link="https://github.com/AI-MED-AGH">GitHub</LinkButton>
        <LinkButton link="https://skn.agh.edu.pl/pl/kolo/kn-ai-med/">SKN AGH</LinkButton>
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
          <LinkButton link="https://www.facebook.com/people/Ko%C5%82o-Naukowe-AI-Med/61570629163949/">
            <Icon type="facebook" />
          </LinkButton>
          <LinkButton link="https://github.com/AI-MED-AGH">
            <Icon type="github" />
          </LinkButton>
          <LinkButton link="https://www.instagram.com/ai.med.agh/">
            <Icon type="instagram" />
          </LinkButton>
          <LinkButton link="mailto:aimed@agh.edu.pl">
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
