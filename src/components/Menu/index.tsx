// Next
import { usePathname } from 'next/navigation'

// Mocks
import { content, work } from '@/mocks'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// Menu
export default function Menu (): JSX.Element {
  // Get the path of the url
  const path = usePathname()

  // Use the path to verify if the content needs to change
  const pageContent = path === '/work' ? work : content

  return (
    <>
      <ul className="menu">
        {pageContent.header.menuItems.map((item) => (
          <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
        ))}

        <li className="menu__button">
          <Button link={pageContent.header.buttonLink} external text={content.header.buttonText} />
        </li>
      </ul>
    </>
  )
}
