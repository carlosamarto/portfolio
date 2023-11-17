// MenuItem
export default function MenuItem ({ menuLink, menuNumber, menuText }: { menuLink: string, menuNumber: string, menuText: string }): JSX.Element {
  return (
    <>
      <li className="menu-item">
        <a href={`/${menuLink}`} className="menu-item__link">
          <span className="menu-item__number">{menuNumber}</span>
          <span className="menu-item__text">{menuText}</span>
        </a>
      </li>
    </>
  )
}
