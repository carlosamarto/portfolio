// Client Component
'use client'

// React
import React, { useContext } from 'react'

// React Icons
import { SlRocket } from 'react-icons/sl'

// Context
import { ThemeContext } from '@/context'

// Components
import SocialBar from '@/components/SocialBar'
import ToggleLanguage from '@/components/ToggleLanguage'

// Footer
export default function Footer (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu, data } = useContext(ThemeContext)

  return (
    <>
      <footer className={`footer ${openMenu ? 'footer--lock' : 'footer--unlock'}`}>
        <SocialBar links={data.footer.social} />

        <a
          href={data.footer.link}
          aria-label="repository"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__repository"
        >
          <SlRocket size="1.8rem" color="#ef233c" className="footer__icon" />
          {data.footer.text}
        </a>

        <ToggleLanguage langTagEn={data.footer.langEn} langTagEs={data.footer.langEs} />
      </footer>
    </>
  )
}
