// Utils
import { type Mocks } from '@/utils/definitions'

// Content
export const content: Mocks = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Intro', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'About', menuLink: '#about' },
      { menuNumber: '03.', menuText: 'Experience', menuLink: '#experience' },
      { menuNumber: '04.', menuText: 'Projects', menuLink: '#projects' },
      { menuNumber: '05.', menuText: 'Contact', menuLink: '#contact' }
    ],
    buttonText: 'Resume',
    buttonLink: 'resume.pdf'
  },
  intro: {
    subtitle: '01. Hello, my name is',
    title: 'Carlos Martínez',
    text: "Passionate <strong class='intro__strong'>Front-End Developer</strong> driven to create websites that stand out for their exceptional style.",
    buttonLink: '#contact',
    buttonText: 'Contact me'
  },
  about: {
    sectionNumber: '02.',
    title: 'About me',
    description:
      "Hello! I am a <strong class='about__strong'>Front-End developer</strong> with more than 1 year of experience, focused on <strong class='about__strong'>React</strong>, <strong class='about__strong'>Next.js</strong>.",
    descriptionb:
      'Passionate about creating attractive and functional interfaces. Always looking for new challenges and opportunities to grow as a professional.',
    descriptionc: 'Here are some of the technologies I`ve been working on most recently:',
    technologies: [
      { technologyName: '<span class="about__symbol">◇</span>HTML' },
      { technologyName: '<span class="about__symbol">◇</span>CSS' },
      { technologyName: '<span class="about__symbol">◇</span>Tailwind' },
      { technologyName: '<span class="about__symbol">◇</span>JavaScript' },
      { technologyName: '<span class="about__symbol">◇</span>TypeScript' },
      { technologyName: '<span class="about__symbol">◇</span>React' },
      { technologyName: '<span class="about__symbol">◇</span>Next.js' },
      { technologyName: '<span class="about__symbol">◇</span>Figma' }
    ],
    imageProfile: '/images/profile.jpg',
    imageCaption: 'Profile picture created by Vana IA'
  },
  experience: {
    sectionNumber: '03.',
    title: 'Previous Experience',
    company: 'MContigo',
    position: 'Front-End Developer <strong class="experiencie__strong">| MContigo</strong>',
    time: 'April 2022 - June 2023',
    tasks: [
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Initiated by participating in the conceptualization and design of components, widgets, and screens in <strong class="experiencie__strong">Figma</strong>, meticulously transcribing them into code.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Employed <strong class="experiencie__strong">Next.js</strong> as the primary framework, utilizing <strong class="experiencie__strong">React</strong> for meticulous component creation and structuring.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Adhered to established patterns and best practices to achieve clean and maintainable code, including the application of auxiliary classes, JSX styling, and a modular component architecture.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Implemented basic testing methodologies to ensure functionality and code performance met project standards.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Utilized <strong class="experiencie__strong">Storybook</strong> as a platform for component documentation, facilitating seamless sharing and presentation of various components among the team.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Assumed the responsibility of creating comprehensive documentation for new team members, ensuring smooth onboarding and effective knowledge transfer.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Effectively communicated and coordinated with design and development teams to align tasks, facilitate seamless workflows, and achieve project milestones.</p>'
      }
    ]
  },
  projects: {
    sectionNumber: '04.',
    title: 'Projects',
    cardProjects: [
      {
        website: 'https://hackers-news-topaz.vercel.app/',
        github: 'https://github.com/carlosmrtzor/hackers-news',
        title: 'Hackers News',
        description: 'Hackers News Project with React and TypeScript, fetching an API for the post and comments.',
        technologies: ['React', 'TypeScript']
      },
      {
        website: 'http://task-app-lovat.vercel.app/',
        github: 'https://github.com/carlosmrtzor/task-app',
        title: 'Task App',
        description: 'Efficient task management app built on React, utilizing cookies for seamless performance.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://pokedex-pearl-two.vercel.app/',
        github: 'https://github.com/carlosmrtzor/pokedex',
        title: 'Pokédex',
        description: 'Pokédex built with React and Tailwind, utilizing Axios for API consumption.',
        technologies: ['React', 'JavaScript', 'Tailwind']
      },
      {
        website: 'https://tic-tac-toe-five-rosy.vercel.app/',
        github: 'https://github.com/carlosmrtzor/tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'Tic Tac Toe game created in React, featuring the use of useEffect and LocalStorage.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://dominiquepanczuch.com/',
        github: '',
        title: 'Dominique',
        description: 'Dominique Panczuch portfolio, built on WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://oshica.com.ve/',
        github: '',
        title: 'Oshica',
        description: 'Oshica, landing page built on WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://homeloversusa.com/',
        github: '',
        title: 'Home Lovers USA',
        description: 'Home Lovers USA, landing page built on WordPress.',
        technologies: ['WordPress']
      }
    ]
  },
  contact: {
    subtitle: '05. What’s the Next Step?',
    title: 'Get in Contact',
    text: "I’m currently open to new job opportunities, if you want to contact me you can do it through my networks or send me an <strong class='contact__strong'>E-mail</strong> to the following link.",
    buttonLink: 'mailto:carlosmrtzo@gmail.com',
    buttonText: "Let's talk!"
  },
  footer: {
    link: 'https://github.com/carlosmrtzor/portfolio',
    text: 'Created by Carlos Martínez.',
    social: {
      codepen: 'https://codepen.io/carlosmrtzo/',
      github: 'https://github.com/carlosmrtzor/',
      linkedin: 'https://www.linkedin.com/in/carlosmrtzo/',
      twitter: 'https://twitter.com/devilsncry3/',
      instagram: 'https://www.instagram.com/devilsncry3/'
    }
  }
}
