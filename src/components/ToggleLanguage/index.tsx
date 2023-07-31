// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// ToggleLanguage
export default function ToggleLanguage ({ langTagEn, langTagEs }: { langTagEn: string, langTagEs: string }): JSX.Element {
  // Accessing values from the context using useContext hook
  const { lang, toggleLang } = useContext(ThemeContext)

  return (
    <>
      <div className={`toggle-language ${lang === langTagEn ? 'toggle-language--en' : 'toggle-language--es'}`}>
        <button
          type="button"
          onClick={() => {
            toggleLang(langTagEn)
          }}
          className="toggle-language__button"
        >
          {langTagEn}
        </button>

        <button
          type="button"
          onClick={() => {
            toggleLang(langTagEs)
          }}
          className="toggle-language__button"
        >
          {langTagEs}
        </button>
      </div>
    </>
  )
}
