function Project({
  name,
  desc,
  imgPath,
  webpPath,
  avifPath,
}: {
  name: string
  desc: string
  imgPath: string
  webpPath: string
  avifPath: string
}) {
  return (
    <div>
      <picture>
        <source srcSet={avifPath} type="image/avif" />
        <source srcSet={webpPath} type="image/webp" />
        <img src={imgPath} alt={name} />
      </picture>
      <h3>{name}</h3>
      <p>{desc}</p>
      <a href="#"> Zobacz więcej...</a>
    </div>
  )
}

export default Project
