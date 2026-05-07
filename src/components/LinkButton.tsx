function LinkButton({ link, children }: { link?: string; children?: React.ReactNode }) {
  return (
    <a className="primary-button" href={link}>
      {children}
    </a>
  )
}

export default LinkButton
