// Client Component
'use client'

// React
import React from 'react'

// React Icons
import { ImCodepen } from 'react-icons/im'
import { SlSocialGithub, SlSocialLinkedin, SlSocialTwitter, SlSocialInstagram } from 'react-icons/sl'

// Utils
import { type Links } from '@/utils/definitions'

// SocialBar
export default function SocialBar ({ links }: { links: Links }): JSX.Element {
  return (
    <>
      <div className="social-bar">
        <a href={links.codepen} aria-label="codepen" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <ImCodepen size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.github} aria-label="github" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <SlSocialGithub size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.linkedin} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <SlSocialLinkedin size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.twitter} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <SlSocialTwitter size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.instagram} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <SlSocialInstagram size="2.4rem" className="social-bar__icon" />
        </a>
      </div>
    </>
  )
}
