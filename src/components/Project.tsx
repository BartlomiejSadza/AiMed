function Project({ name, desc, imgPath }: { name: string; desc: string; imgPath: string }) {
  return (
    <div>
      <img src={imgPath} alt={name}></img>
      <h3>{name}</h3>
      <p>{desc}</p>
      <a href="#"> Zobacz więcej...</a>
    </div>
  )
}

export default Project
