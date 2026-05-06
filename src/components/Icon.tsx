import facebookIconUrl from '../assets/facebook.svg'
import githubIconUrl from '../assets/github.svg'
import instagramIconUrl from '../assets/instagram.svg'
import gmailIconUrl from '../assets/gmail.svg'
import aiMedIconUrl from '../assets/ai-med.svg'
import arrowRight from '../assets/arrow-right.svg'

const Icons = {
  facebook: facebookIconUrl,
  github: githubIconUrl,
  instagram: instagramIconUrl,
  gmail: gmailIconUrl,
  aiMed: aiMedIconUrl,
  arrowRight: arrowRight,
}

function Icon({ type, size }: { type: keyof typeof Icons; size?: number }) {
  return <img src={Icons[type]} style={{ width: `${size || 36}px`, height: `${size || 36}px` }} />
}

export default Icon
