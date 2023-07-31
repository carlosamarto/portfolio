// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// Menu
export default function Menu (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <ul className="menu">
        {data.header.menuItems.map((item) => (
          <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
        ))}

        <li className="menu__button">
          <Button link={data.header.buttonLink} external text={data.header.buttonText} />
        </li>
      </ul>
    </>
  )
}
