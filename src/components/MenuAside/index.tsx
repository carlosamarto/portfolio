// React
import { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Mocks
import { content } from '@/mocks'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// MenuAside
export default function MenuAside (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu } = useContext(ThemeContext)

  return (
    <>
      <aside className={`menu-aside ${openMenu ? 'menu-aside--open' : 'menu-aside--close'}`}>
        <nav className="menu-aside__nav">
          <ul className="menu-aside__menu">
            {content.header.menuItems.map((item) => (
              <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
            ))}

            <li className="menu-aside__button">
              <Button link={content.header.buttonLink} external text={content.header.buttonText} />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
