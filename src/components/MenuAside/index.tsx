// React
import { useContext } from 'react'

// Next
import { usePathname } from 'next/navigation'

// Context
import { ThemeContext } from '@/context'

// Mocks
import { content, work } from '@/mocks'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// MenuAside
export default function MenuAside (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu } = useContext(ThemeContext)

  // Get the path of the url
  const path = usePathname()

  // Use the path to verify if the content needs to change
  const pageContent = path === '/work' ? work : content

  return (
    <>
      <aside className={`menu-aside ${openMenu ? 'menu-aside--open' : 'menu-aside--close'}`}>
        <nav className="menu-aside__nav">
          <ul className="menu-aside__menu">
            {pageContent.header.menuItems.map((item) => (
              <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
            ))}

            <li className="menu-aside__button">
              <Button link={pageContent.header.buttonLink} external text={content.header.buttonText} />
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}
