// Utils
import { type Work, type Content } from '@/utils/definitions'

// Home
export const content: Content = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Introducción', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'Acerca de mí', menuLink: '#about' },
      { menuNumber: '03.', menuText: 'Experiencia', menuLink: '#experience' },
      { menuNumber: '04.', menuText: 'Proyectos', menuLink: '#projects' },
      { menuNumber: '05.', menuText: 'Contacto', menuLink: '#contact' }
    ],
    buttonText: 'Curriculum',
    buttonLink: 'curriculum-front-end-developer.pdf'
  },
  intro: {
    subtitle: '01. Hola, mi nombre es',
    title: 'Carlos Martínez',
    text: "<strong class='intro__strong'>Front-End Developer</strong> apasionado en crear páginas webs que destaquen por su gran estilo.",
    buttonLink: '#contact',
    buttonText: 'Contáctame'
  },
  about: {
    sectionNumber: '02.',
    title: 'Acerca de mí',
    description:
      "¡Hola! Soy <strong class='about__strong'>Desarrollador Front-End</strong> con más de 1 año de experiencia, enfocado en <strong class='about__strong'>React</strong> y <strong class='about__strong'>Next.js</strong>.",
    descriptionb:
      'Apasionado por crear interfaces atractivas y funcionales. Siempre en busca de nuevos desafíos y oportunidades para crecer como profesional.',
    descriptionc: 'Aquí hay algunas de las tecnologías en las que he estado trabajando recientemente:',
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
    imageCaption: 'Imagen de perfil creada por Vana IA'
  },
  experience: {
    sectionNumber: '03.',
    title: 'Experiencia Previa',
    company: 'MContigo',
    position: 'Desarrollador Front-End <strong class="experiencie__strong">| MContigo</strong>',
    time: 'Abril de 2022 - Junio de 2023',
    tasks: [
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Inicialmente participé en la conceptualización y diseño de componentes, widgets y pantallas en <strong class="experiencie__strong">Figma</strong>, que luego se transcribieron meticulosamente en código.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Utilicé <strong class="experiencie__strong">Next.js</strong> como el marco principal, aplicando <strong class="experiencie__strong">React</strong> para la creación y estructuración meticulosa de componentes.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Seguí patrones y mejores prácticas establecidas para obtener un código limpio y mantenible, incluyendo la aplicación de clases auxiliares, estilo JSX y una arquitectura modularizada de componentes.</p>'
      }
    ]
  },
  projects: {
    sectionNumber: '04.',
    title: 'Proyectos',
    cardProjects: [
      {
        website: 'https://hackers-news-topaz.vercel.app/',
        github: 'https://github.com/carlosmrtzor/hackers-news',
        title: 'Hackers News',
        description:
          'Proyecto Hackers News con React y TypeScript, obteniendo datos de una API para publicaciones y comentarios.',
        technologies: ['React', 'TypeScript']
      },
      {
        website: 'http://task-app-lovat.vercel.app/',
        github: 'https://github.com/carlosmrtzor/task-app',
        title: 'Task App',
        description:
          'Aplicación eficiente de gestión de tareas construida en React, utilizando cookies para un rendimiento sin problemas.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://pokedex-pearl-two.vercel.app/',
        github: 'https://github.com/carlosmrtzor/pokedex',
        title: 'Pokédex',
        description: 'Pokédex construido con React y Tailwind, utilizando Axios para consumir una API.',
        technologies: ['React', 'JavaScript', 'Tailwind']
      },
      {
        website: 'https://tic-tac-toe-five-rosy.vercel.app/',
        github: 'https://github.com/carlosmrtzor/tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'Juego de Tic Tac Toe creado en React, con el uso de useEffect y LocalStorage.',
        technologies: ['React', 'JavaScript']
      }
    ]
  },
  contact: {
    subtitle: '05. ¿Cuál es el siguiente paso?',
    title: 'Ponte en Contacto',
    text: "Actualmente estoy abierto a nuevas oportunidades laborales. Si quieres ponerte en contacto conmigo, puedes hacerlo a través de mis redes o enviarme un <strong class='contact__strong'>correo electrónico</strong> al siguiente enlace.",
    buttonLink: 'mailto:carlosmrtzo@gmail.com',
    buttonText: '¡Hablemos!'
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
    }
  }
}

// Work
export const work: Work = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Introducción', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'Proyectos', menuLink: '#projects' },
      { menuNumber: '03.', menuText: 'Contacto', menuLink: '#contact' }
    ],
    buttonLink: 'curriculum-wordpress-web-design.pdf'
  },
  intro: {
    text: "<strong class='intro__strong'>Diseñador Web WordPress</strong> apasionado en crear páginas webs que destaquen por su gran estilo."
  },
  projects: {
    sectionNumber: '02.',
    cardProjects: [
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
        description: 'Oshica, Landing Page construida en WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://homeloversusa.com/',
        github: '',
        title: 'Home Lovers USA',
        description: 'Home Lovers USA, Landing Page construida en WordPress.',
        technologies: ['WordPress']
      }
    ]
  },
  contact: {
    subtitle: '05. ¿Cuál es el siguiente paso?'
  }
}
