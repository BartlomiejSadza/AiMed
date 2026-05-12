import LinkButton from './LinkButton'
import Icon from './Icon'

function JoinUsHeader() {
  return (
    <div className="join-us-header">
      <span className="join-us-header-icon">
        <Icon type="aiMed" size={64} />
      </span>
      <h2>Dołącz do nas!</h2>
    </div>
  )
}

// TODO: nie znalazłem linkóww do rekrutacji, więc dałem placeholdery
const recruitmentData = [
  {
    position: 'Software Engineer',
    href: '#',
  },
  {
    position: 'UX/UI Designer',
    href: '#',
  },
  {
    position: 'Project Manager',
    href: '#',
  },
]

function JoinUsTableRow({ position, href }: { position: string; href: string }) {
  return (
    <div className="join-us-table-row">
      <h3>{position}</h3>
      <LinkButton link={href}>
        Wysyłam CV <Icon type="arrowRight" size={24} />
      </LinkButton>
    </div>
  )
}

function JoinUsTable() {
  return (
    <div className="join-us-table">
      {recruitmentData.map((item, index) => (
        <JoinUsTableRow key={index} position={item.position} href={item.href} />
      ))}
    </div>
  )
}

function JoinUs() {
  return (
    <>
      <JoinUsHeader />
      <JoinUsTable />
    </>
  )
}

export default JoinUs
