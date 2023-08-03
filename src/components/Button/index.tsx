// Button
export default function Button ({ link, external, text }: { link: string, external: boolean, text: string }): JSX.Element {
  return (
    <>
      <a href={`/${link}`} target={external ? '_blank' : ''} rel={external ? 'noopener noreferrer' : ''} className="button">
        <span className="button__inner">
          <span className="button__content">{text}</span>
        </span>
      </a>
    </>
  )
}
