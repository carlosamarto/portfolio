// React
import { useState, useEffect } from 'react'

// Utils
import { type LangFunction, type LangProps } from '@/utils/definitions'

// Custom Hook
const useChangeLang = ({ key, initialValue }: LangProps): [string, LangFunction] => {
  const [lang, setLang] = useState(() => {
    // Get the stored value from localStorage
    const storedValue = localStorage.getItem(key)

    // Use the stored value or the initial value
    return storedValue !== null ? storedValue : initialValue
  })

  useEffect(() => {
    // Set the lang attribute of the document
    document.documentElement.lang = lang

    // Store the language value in localStorage
    localStorage.setItem(key, lang)
  }, [key, lang])

  // Toggle language function
  const toggleLang: LangFunction = (value) => {
    setLang(value)
  }

  return [lang, toggleLang]
}

export { useChangeLang }
