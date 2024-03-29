// Mocks interface with the content of the website
export interface Content {
  header: {
    menuItems: Array<{
      menuNumber: string
      menuText: string
      menuLink: string
    }>
    buttonText: string
    buttonLink: string
  }
  intro: {
    subtitle: string
    title: string
    text: string
    buttonLink: string
    buttonText: string
  }
  about: {
    sectionNumber: string
    title: string
    description: string
    descriptionb: string
    descriptionc: string
    technologies: Array<{ technologyName: string }>
    imageProfile: string
    imageCaption: string
  }
  experience: {
    sectionNumber: string
    title: string
    jobs: Array<{
      company: string
      position: string
      location: string
      time: string
      tasks: Array<{
        description: string
      }>
    }>
  }
  projects: {
    sectionNumber: string
    title: string
    cardProjects: Array<{
      website: string
      github: string
      title: string
      description: string
      technologies: string[]
    }>
  }
  contact: {
    subtitle: string
    title: string
    text: string
    buttonLink: string
    buttonText: string
  }
  footer: {
    link: string
    text: string
    social: {
      github: string
      linkedin: string
      twitter: string
      instagram: string
    }
  }
}

// Context interface for provide all the values to the app
export interface Context {
  isHeaderVisible: boolean
  prevScrollPos: number
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  activeTab: number
  handleClick: (tabNum: number) => void
}

// Footer social links
export interface Links {
  github: string
  linkedin: string
  twitter: string
  instagram: string
}
