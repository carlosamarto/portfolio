// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// MenuAside
export default function MenuAside (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu, data } = useContext(ThemeContext)

  return (
    <>
      <aside className={`menu-aside ${openMenu ? 'menu-aside--open' : 'menu-aside--close'}`}>
        <nav className="menu-aside__nav">
          <ul className="menu-aside__menu">
            {data.header.menuItems.map((item) => (
              <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
            ))}

            <li className="menu-aside__button">
              <Button link={data.header.buttonLink} external text={data.header.buttonText} />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
