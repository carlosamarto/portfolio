// Client Component
'use client'

// React
import React from 'react'

// React Icons
import { ImCodepen } from '@react-icons/all-files/im/ImCodepen'
import { FiGithub } from '@react-icons/all-files/fi/FiGithub'
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin'
import { FiTwitter } from '@react-icons/all-files/fi/FiTwitter'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'

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
          <FiGithub size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.linkedin} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <FiLinkedin size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.twitter} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <FiTwitter size="2.4rem" className="social-bar__icon" />
        </a>

        <a href={links.instagram} aria-label="linkedin" target="_blank" rel="noopener noreferrer" className="social-bar__link">
          <FiInstagram size="2.4rem" className="social-bar__icon" />
        </a>
      </div>
    </>
  )
}
