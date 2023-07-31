// Client Component
'use client'

// React
import React, { createContext } from 'react'

// Mocks
import { english, spanish } from '@/mocks'

// Hooks
import { useOpenMenu } from '@/hooks/useOpenMenu'
import { useChangeLang } from '@/hooks/useChangeLang'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'

// Utils
import { type Context } from '@/utils/definitions'

// Create Context
export const ThemeContext = createContext<Context>({
  lang: '',
  toggleLang: () => {},
  isHeaderVisible: false,
  prevScrollPos: 0,
  openMenu: false,
  setOpenMenu: () => {},
  data: english
})

export default function ThemeProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  // Toggles between language options
  const [lang, toggleLang] = useChangeLang({ key: 'LANG_V1', initialValue: 'en' })

  // Tracks header visibility and previous scroll position
  const [isHeaderVisible, prevScrollPos] = useHeaderScroll()

  // Controls the open/close state of the menu
  const [openMenu, setOpenMenu] = useOpenMenu()

  // Selects the content data based on the current language
  const data = lang === 'en' ? english : spanish

  return (
    <ThemeContext.Provider
      value={{
        lang,
        toggleLang,
        isHeaderVisible,
        prevScrollPos,
        openMenu,
        setOpenMenu,
        data
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
