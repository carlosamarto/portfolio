// Utils
import { type Mocks } from '@/utils/definitions'

// English content
export const english: Mocks = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Intro', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'About', menuLink: '#about' },
      { menuNumber: '03.', menuText: 'Experience', menuLink: '#experience' },
      { menuNumber: '04.', menuText: 'Projects', menuLink: '#projects' },
      { menuNumber: '05.', menuText: 'Contact', menuLink: '#contact' }
    ],
    buttonText: 'Resume',
    buttonLink: 'resumes/resume.pdf'
  },
  intro: {
    subtitle: '01. Hello, my name is',
    title: 'Carlos Martínez',
    text: "<strong class='intro__strong'>Front-End Developer</strong> passionate about creating web pages that stand out for their great style.",
    buttonLink: '#contact',
    buttonText: 'Contact Details'
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
      { technologyName: '<span class="about__symbol">◇</span>HTML5' },
      { technologyName: '<span class="about__symbol">◇</span>CSS3' },
      { technologyName: '<span class="about__symbol">◇</span>TailwindCSS' },
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
          '<span class="experience__symbol">◇</span><span class="experience__description">Deliver the design of the interfaces and components to code, layout with <strong class="experiencie__strong">React</strong>, on <strong class="experiencie__strong">Next.js</strong>, following certain patterns in the code and good practices to pass the layout to production.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Creation and search of solutions for new designs for certain components or pages within the different websites of the company, delivering the finished and approved design in <strong class="experiencie__strong">Figma</strong>.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Collaborate with other members of the front design team, project managers and other team engineers for certain tasks.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Update the project documentation in the layout section, for new team members.</span>'
      }
    ]
  },
  projects: {
    sectionNumber: '04.',
    title: 'Projects',
    cardProjects: [
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
        description: 'Pokédex built with React and TailwindCSS, utilizing Axios for API consumption.',
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
    },
    langEn: 'en',
    langEs: 'es'
  }
}

// Spanish Content
export const spanish: Mocks = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Intro', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'Sobre mí', menuLink: '#about' },
      { menuNumber: '03.', menuText: 'Experiencia', menuLink: '#experience' },
      { menuNumber: '04.', menuText: 'Proyectos', menuLink: '#projects' },
      { menuNumber: '05.', menuText: 'Contacto', menuLink: '#contact' }
    ],
    buttonText: 'Curriculum',
    buttonLink: 'resumes/curriculum.pdf'
  },
  intro: {
    subtitle: '01. Hola, me llamo',
    title: 'Carlos Martínez',
    text: "<strong class='intro__strong'>Front-End Developer</strong> apasionado en crear páginas webs que destaquen por su gran estilo.",
    buttonLink: '#contact',
    buttonText: 'Detalles de contacto'
  },
  about: {
    sectionNumber: '02.',
    title: 'Sobre mí',
    description:
      "¡Hola! Soy un <strong class='about__strong'>Desarrollador Front-End</strong> con mas de un 1 año de experiencia, enfocado en <strong class='about__strong'>React</strong>, <strong class='about__strong'>Next.js</strong>.",
    descriptionb:
      'Apasionado por crear interfaces atractivas y funcionales. Siempre en busca de nuevos desafíos y oportunidades para crecer como profesional.',
    descriptionc: 'Estas son algunas de las tecnologías en las que he estado trabajando más recientemente:',
    technologies: [
      { technologyName: '<span class="about__symbol">◇</span>HTML5' },
      { technologyName: '<span class="about__symbol">◇</span>CSS3' },
      { technologyName: '<span class="about__symbol">◇</span>TailwindCSS' },
      { technologyName: '<span class="about__symbol">◇</span>JavaScript' },
      { technologyName: '<span class="about__symbol">◇</span>TypeScript' },
      { technologyName: '<span class="about__symbol">◇</span>React' },
      { technologyName: '<span class="about__symbol">◇</span>Next.js' },
      { technologyName: '<span class="about__symbol">◇</span>Figma' }
    ],
    imageProfile: '/images/profile.jpg',
    imageCaption: 'Foto de perfil creada por Vana IA'
  },
  experience: {
    sectionNumber: '03.',
    title: 'Experiencia previa',
    company: 'MContigo',
    position: 'Desarrollador Front-End <strong class="experiencie__strong">| MContigo</strong>',
    time: 'Abril 2022 - Junio 2023',
    tasks: [
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Entregue el diseño de las interfaces y los componentes llevado al código, construido con <strong class="experiencie__strong">React</strong>, sobre <strong class="experiencie__strong">Next.js</strong>, siguiendo ciertos patrones en el código y buenas prácticas para llevar la maquetación a producción.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Creación y búsqueda de soluciones de nuevos diseños para determinados componentes o páginas dentro de los diferentes sitios web de la empresa, entregando el diseño terminado y aprobado en <strong class="experiencia__strong">Figma</strong>.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Colabore con otros miembros del equipo del Front-End, gerentes de proyecto y otros ingenieros del equipo para ciertas tareas.</span>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><span class="experience__description">Actualice la documentación del proyecto en la parte del Front-End, para los nuevos miembros del equipo.</span>'
      }
    ]
  },
  projects: {
    sectionNumber: '04.',
    title: 'Proyectos',
    cardProjects: [
      {
        website: 'http://task-app-lovat.vercel.app/',
        github: 'https://github.com/carlosmrtzor/task-app',
        title: 'App de Tareas',
        description: 'Aplicación de tareas eficiente basada en React, que utiliza cookies para un rendimiento optimo.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://pokedex-pearl-two.vercel.app/',
        github: 'https://github.com/carlosmrtzor/pokedex',
        title: 'Pokédex',
        description: 'Pokédex construido con React y TailwindCSS, utilizando Axios para el consumo de API.',
        technologies: ['React', 'JavaScript', 'Tailwind']
      },
      {
        website: 'https://tic-tac-toe-five-rosy.vercel.app/',
        github: 'https://github.com/carlosmrtzor/tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'Juego Tic Tac Toe creado en React, que presenta el uso de useEffect y LocalStorage.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://dominiquepanczuch.com/',
        github: '',
        title: 'Dominique',
        description: 'Portafolio de Dominique Panczuch, construido en WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://oshica.com.ve/',
        github: '',
        title: 'Oshica',
        description: 'Oshica, landing page construida en WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://homeloversusa.com/',
        github: '',
        title: 'Home Lovers USA',
        description: 'Home Lovers USA, landing page construida en WordPress.',
        technologies: ['WordPress']
      }
    ]
  },
  contact: {
    subtitle: '06. ¿Cuál es el siguiente paso?',
    title: 'Ponerse en contacto',
    text: "Actualmente estoy abierto a nuevas oportunidades laborales, si quieres contactarme puedes hacerlo por mis redes o enviarme un <strong class='contact__strong'>E-mail</strong> al siguiente enlace.",
    buttonLink: 'mailto:carlosmrtzo@gmail.com',
    buttonText: 'Hablemos!'
  },
  footer: {
    link: 'https://github.com/carlosmrtzor/portfolio',
    text: 'Creado por Carlos Martínez.',
    social: {
      codepen: 'https://codepen.io/carlosmrtzo/',
      github: 'https://github.com/carlosmrtzor/',
      linkedin: 'https://www.linkedin.com/in/carlosmrtzo/',
      twitter: 'https://twitter.com/devilsncry3/',
      instagram: 'https://www.instagram.com/devilsncry3/'
    },
    langEn: 'en',
    langEs: 'es'
  }
}
