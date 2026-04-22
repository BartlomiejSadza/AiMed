import facebookIconUrl from '../assets/facebook.svg'
import githubIconUrl from '../assets/github.svg'
import instagramIconUrl from '../assets/instagram.svg'
import gmailIconUrl from '../assets/gmail.svg'

const Icons = {
  facebook: facebookIconUrl,
  github: githubIconUrl,
  instagram: instagramIconUrl,
  gmail: gmailIconUrl,
}

function Icon({ type, size }: { type: keyof typeof Icons; size?: number }) {
  return (
    <img
      src={Icons[type]}
      alt={`${type} icon`}
      style={{ width: `${size || 36}px`, height: `${size || 36}px` }}
    />
  )
}

export default Icon
