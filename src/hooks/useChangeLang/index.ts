import { useState, useEffect } from 'react'

// Utils
import { type LangFunction, type LangProps } from '@/utils/definitions'

// Custom Hook
const useChangeLang = ({ key, initialValue }: LangProps): [string, LangFunction] => {
  const isClient = typeof window !== 'undefined' // Check if it is running in the browser

  const [lang, setLang] = useState(() => {
    // Get the stored value from localStorage if it's available
    const storedValue = isClient ? localStorage.getItem(key) : null

    // Use the stored value or the initial value
    return storedValue !== null ? storedValue : initialValue
  })

  useEffect(() => {
    if (isClient) {
      // Set the lang attribute of the document
      document.documentElement.lang = lang

      // Store the language value in localStorage
      localStorage.setItem(key, lang)
    }
  }, [isClient, key, lang])

  // Toggle language function
  const toggleLang: LangFunction = (value) => {
    setLang(value)
  }

  return [lang, toggleLang]
}

export { useChangeLang }
