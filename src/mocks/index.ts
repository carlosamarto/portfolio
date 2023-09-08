// Utils
import { type Content } from '@/utils/definitions'

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
    buttonLink: 'resumes/curriculum.pdf'
  },
  intro: {
    subtitle: '01. Hola, mi nombre es',
    title: 'Carlos Martínez',
    text: "<strong class='intro__strong'>Desarrollador Front-End</strong> apasionado en crear páginas webs que destaquen por su gran estilo.",
    buttonLink: '#contact',
    buttonText: 'Contáctame'
  },
  about: {
    sectionNumber: '02.',
    title: 'Acerca de mí',
    description:
      'Me especializo en el área de <strong class="about__strong">Front-End</strong>, con experiencia en el diseño y desarrollo de componentes y páginas web utilizando las últimas tecnologías, tales como <strong class="about__strong">React</strong>, <strong class="about__strong">Next.js</strong>, <strong class="about__strong">Node.js</strong>, <strong class="about__strong">JavaScript</strong>, <strong class="about__strong">TypeScript</strong> y <strong class="about__strong">CSS</strong>.',
    descriptionb:
      'Además, ocasionalmente trabajo en proyectos con <strong class="about__strong">WordPress</strong>. Siempre estoy en búsqueda de oportunidades para aprender y mejorar tanto en mi trabajo individual como en equipos. ✨💻',
    descriptionc: 'Aquí hay algunas de las tecnologías en las que he estado trabajando recientemente:',
    technologies: [
      { technologyName: '<span class="about__symbol">◇</span>HTML' },
      { technologyName: '<span class="about__symbol">◇</span>CSS' },
      { technologyName: '<span class="about__symbol">◇</span>JavaScript' },
      { technologyName: '<span class="about__symbol">◇</span>TypeScript' },
      { technologyName: '<span class="about__symbol">◇</span>React' },
      { technologyName: '<span class="about__symbol">◇</span>Next.js' },
      { technologyName: '<span class="about__symbol">◇</span>Node.js' },
      { technologyName: '<span class="about__symbol">◇</span>Tailwind' },
      { technologyName: '<span class="about__symbol">◇</span>WordPress' },
      { technologyName: '<span class="about__symbol">◇</span>Figma' }
    ],
    imageProfile: '/images/profile.jpg',
    imageCaption: 'Imagen de perfil creada por Vana IA'
  },
  experience: {
    sectionNumber: '03.',
    title: 'Experiencia Profesional',
    jobs: [
      {
        company: 'MContigo',
        position: 'Desarrollador Front-End',
        location: 'España - Trabajo Remoto',
        time: 'Abril de 2022 - Junio de 2023',
        tasks: [
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Propuse y conceptualicé diseños de componentes, widgets y pantallas utilizando <strong class="intro__strong">Figma.</strong>.</p>'
          },
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Realicé la maquetación de componentes, widgets y pantallas con <strong class="intro__strong">React</strong> en proyectos basados en <strong class="intro__strong">Next.js</strong>.</p>'
          },
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Colaboré estrechamente con otros desarrolladores y miembros del equipo para avanzar en diversas tareas y proyectos.</p>'
          }
        ]
      },
      {
        company: 'Freelance',
        position: 'Desarrollador Front-End / Diseñador Web',
        location: 'Latinoamérica - Trabajo Remoto',
        time: 'Septiembre 2020 - Abril 2022',
        tasks: [
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Creación y diseño de diversos sitios web para mis clientes utilizando <strong class="intro__strong">WordPress</strong> o código a medida.</p>'
          },
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Comunicación y reuniones con los clientes para dar seguimiento al progreso del trabajo.</p>'
          },
          {
            description:
              '<span class="experience__symbol">◇</span><p class="experience__description">Instalación de plugins y configuración de sitios web en <strong class="intro__strong">WordPress</strong>.</p>'
          }
        ]
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
          'Proyecto Hackers News con React y TypeScript, obteniendo una API para las historias, comentarios y lista de favoritos.',
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
    subtitle: '05. ¿Cuál es el siguiente paso?',
    title: 'Ponte en Contacto',
    text: "Actualmente estoy abierto a nuevas oportunidades de trabajo. Puedes ponerte en contacto conmigo a través de mis redes o enviarme un <strong class='contact__strong'>correo electrónico</strong>.",
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
