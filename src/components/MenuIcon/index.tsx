// React
import { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// MenuIcon
export default function MenuIcon (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu, setOpenMenu } = useContext(ThemeContext)

  return (
    <>
      <button type="button" aria-label="Menu Icon" className="menu-icon">
        <div
          className={`menu-icon__content ${openMenu ? 'menu-icon__content--active' : 'menu-icon__content--inactive'}`}
          onClick={() => {
            setOpenMenu((prevState) => !prevState)
          }}
        >
          <div className="menu-icon__inner"></div>
        </div>
      </button>
    </>
  )
}
