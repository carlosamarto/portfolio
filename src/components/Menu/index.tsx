// Mocks
import { content } from '@/mocks'

// Components
import Button from '@/components/Button'
import MenuItem from '@/components/MenuItem'

// Menu
export default function Menu (): JSX.Element {
  return (
    <>
      <ul className="menu">
        {content.header.menuItems.map((item) => (
          <MenuItem key={item.menuNumber} menuLink={item.menuLink} menuNumber={item.menuNumber} menuText={item.menuText} />
        ))}

        <li className="menu__button">
          <Button link={content.header.buttonLink} external text={content.header.buttonText} />
        </li>
      </ul>
    </>
  )
}
