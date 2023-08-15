// Client Component
'use client'

// React
import { useContext } from 'react'

// Next
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

// React Icons
import { FiGitBranch } from '@react-icons/all-files/fi/FiGitBranch'

// Context
import { ThemeContext } from '@/context'

// Mocks
import { content } from '@/mocks'

// Components
const SocialBar = dynamic(async () => await import('@/components/SocialBar'))

// Footer
export default function Footer (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu } = useContext(ThemeContext)

  // Get the path of the url
  const path = usePathname()

  return (
    <>
      <footer className={`footer ${openMenu ? 'footer--lock' : 'footer--unlock'}`}>
        {path !== '/work' && <SocialBar links={content.footer.social} />}

        <a
          href={content.footer.link}
          aria-label="repository"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__repository"
        >
          <FiGitBranch size="1.8rem" color="#ff0000" className="footer__icon" />
          {content.footer.text}
        </a>
      </footer>
    </>
  )
}
