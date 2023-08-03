// Client Component
'use client'

// React
import { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Main
export default function Main ({ children }: { children: React.ReactNode }): JSX.Element {
  // Accessing values from the context using useContext hook
  const { openMenu } = useContext(ThemeContext)

  return (
    <>
      <main className={`main ${openMenu ? 'main--lock' : 'main--unlock'}`}>
        <article className="article">{children}</article>
      </main>
    </>
  )
}
