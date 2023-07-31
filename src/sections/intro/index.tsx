// Client Component
'use client'

// React
import React, { useContext } from 'react'

// Context
import { ThemeContext } from '@/context'

// Components
import Button from '@/components/Button'

// Intro
export default function Intro (): JSX.Element {
  // Accessing values from the context using useContext hook
  const { data } = useContext(ThemeContext)

  return (
    <>
      <section id="intro" className="intro">
        <h3 className="intro__subtitle">{data.intro.subtitle}</h3>

        <h1 className="intro__title">{data.intro.title}</h1>

        <p dangerouslySetInnerHTML={{ __html: data.intro.text }} className="intro__text" />

        <Button link={data.intro.buttonLink} external={false} text={data.intro.buttonText} />
      </section>
    </>
  )
}
