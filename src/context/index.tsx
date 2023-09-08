// Client Component
'use client'

// React
import { createContext, useEffect } from 'react'

// Hooks
import { useOpenMenu } from '@/hooks/useOpenMenu'
import { useHeaderScroll } from '@/hooks/useHeaderScroll'
import { useExperienceTabs } from '@/hooks/useExperienceTabs'

// Utils
import { type Context } from '@/utils/definitions'

// Create Context
export const ThemeContext = createContext<Context>({
  isHeaderVisible: false,
  prevScrollPos: 0,
  openMenu: false,
  setOpenMenu: () => {},
  activeTab: 0,
  handleClick: () => {}
})

export default function ThemeProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      void navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        console.log('Register SW', registration)
      })
    }
  }, [])

  // Handle the navegation tabs for the experience section
  const { activeTab, handleClick } = useExperienceTabs()

  // Tracks header visibility and previous scroll position
  const [isHeaderVisible, prevScrollPos] = useHeaderScroll()

  // Controls the open/close state of the menu
  const [openMenu, setOpenMenu] = useOpenMenu()

  return (
    <ThemeContext.Provider
      value={{
        isHeaderVisible,
        prevScrollPos,
        openMenu,
        setOpenMenu,
        activeTab,
        handleClick
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
