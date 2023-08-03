// Client Component
'use client'

// React
import { useContext } from 'react'

// Next
import Link from 'next/link'

// Context
import { ThemeContext } from '@/context'

// Components
import Menu from '@/components/Menu'
import Logo from '@/components/Logo'
import MenuIcon from '@/components/MenuIcon'
import MenuAside from '@/components/MenuAside'

// Header
export default function Header (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { isHeaderVisible, prevScrollPos } = useContext(ThemeContext)

  return (
    <>
      <header
        className={`header ${isHeaderVisible ? 'header--show' : 'header--hide'} ${
          prevScrollPos > 32 ? 'header--active' : 'header--inactive'
        }`}
      >
        <nav className="nav">
          <Link href="/" title="Home" className="nav__logo">
            <Logo width={48} height={48} />
          </Link>

          <MenuIcon />

          <MenuAside />

          <Menu />
        </nav>
      </header>
    </>
  )
}
