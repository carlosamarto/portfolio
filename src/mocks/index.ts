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
    buttonLink: '/Curriculum.pdf'
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
    description: 'Actualmente me desempeño como <strong class="about__strong">Front-End Developer</strong>, especializándome principalmente en la maquetación y creación de interfaces de usuario para la web utilizando tecnologías como <strong class="about__strong">React</strong>/<strong class="about__strong">Next.js</strong>.',
    descriptionb: 'También tengo experiencia en la conceptualización de diseños web con <strong class="about__strong">Figma</strong>. Además, he trabajado en el lado del <strong class="about__strong">Back-End</strong> para complementar el <strong class="about__strong">Front-End</strong> con <strong class="about__strong">Node.js</strong> y ocasionalmente trabajo en proyectos con <strong class="about__strong">WordPress</strong>. Siempre estoy abierto a aprender nuevas tecnologías, poseo habilidades de comunicación sólidas y me desenvuelvo bien tanto en equipos de trabajo como de forma individual. 💻',
    descriptionc: 'Aquí hay algunas de las tecnologías en las que he estado trabajando recientemente:',
    technologies: [{ technologyName: '<span class="about__symbol">◇</span>HTML' }, { technologyName: '<span class="about__symbol">◇</span>CSS' }, { technologyName: '<span class="about__symbol">◇</span>JavaScript' }, { technologyName: '<span class="about__symbol">◇</span>TypeScript' }, { technologyName: '<span class="about__symbol">◇</span>React' }, { technologyName: '<span class="about__symbol">◇</span>Next.js' }, { technologyName: '<span class="about__symbol">◇</span>Node.js' }, { technologyName: '<span class="about__symbol">◇</span>Tailwind' }, { technologyName: '<span class="about__symbol">◇</span>WordPress' }, { technologyName: '<span class="about__symbol">◇</span>Figma' }],
    imageProfile: '/images/profile-work.jpg',
    imageCaption: 'Imagen de perfil creada por Vana IA'
  },
  experience: {
    sectionNumber: '03.',
    title: 'Experiencia Profesional',
    jobs: [
      {
        company: 'Freelance',
        position: 'Front-End Developer | Web Developer',
        location: 'Trabajo Remoto',
        time: 'Septiembre de 2023 - Presente',
        tasks: [
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Crear y maquetar diversos sitios web para clientes, utilizando tanto <strong class="intro__strong">WordPress</strong> como código personalizado.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">En el ámbito del código personalizado, trabajo con tecnologías como vanilla <strong class="intro__strong">JavaScript</strong>, <strong class="intro__strong">React</strong>/<strong class="intro__strong">Next.js</strong>, entre otras.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Configurar el consumo del uso de alguna <strong class="intro__strong">API</strong> para traer informacíon a la web.</p>'
          }
        ]
      },
      {
        company: 'MContigo',
        position: 'Front-End Developer',
        location: 'Trabajo Remoto',
        time: 'Abril de 2022 - Junio de 2023',
        tasks: [
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Propuse y conceptualicé diseños de componentes, widgets y pantallas utilizando <strong class="intro__strong">Figma.</strong>.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Realicé la maquetación de componentes, widgets y pantallas con <strong class="intro__strong">React</strong> en proyectos basados en <strong class="intro__strong">Next.js</strong>.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Colaboré estrechamente con otros desarrolladores y miembros del equipo para avanzar en diversas tareas y proyectos.</p>'
          }
        ]
      },
      {
        company: 'Freelance',
        position: 'Front-End Developer | Web Developer',
        location: 'Trabajo Remoto',
        time: 'Septiembre 2020 - Abril 2022',
        tasks: [
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Creación y diseño de diversos sitios web para mis clientes utilizando <strong class="intro__strong">WordPress</strong> o código a medida.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Comunicación y reuniones con los clientes para dar seguimiento al progreso del trabajo.</p>'
          },
          {
            description: '<span class="experience__symbol">◇</span><p class="experience__description">Instalación de plugins y configuración de sitios web en <strong class="intro__strong">WordPress</strong>.</p>'
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
        github: 'https://github.com/carlosamarto/hackers-news',
        title: 'Hackers News',
        description: 'Proyecto Hackers News con React y TypeScript, obteniendo una API para las historias, comentarios y lista de favoritos.',
        technologies: ['React', 'TypeScript']
      },
      {
        website: 'http://task-app-lovat.vercel.app/',
        github: 'https://github.com/carlosamarto/task-app',
        title: 'Task App',
        description: 'Aplicación eficiente de gestión de tareas construida en React, utilizando cookies para un rendimiento sin problemas.',
        technologies: ['React', 'JavaScript']
      },
      {
        website: 'https://pokedex-pearl-two.vercel.app/',
        github: 'https://github.com/carlosamarto/pokedex',
        title: 'Pokédex',
        description: 'Pokédex construido con React y Tailwind, utilizando Axios para consumir una API.',
        technologies: ['React', 'JavaScript', 'Tailwind']
      },
      {
        website: 'https://tic-tac-toe-five-rosy.vercel.app/',
        github: 'https://github.com/carlosamarto/tic-tac-toe',
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
      },
      {
        website: 'https://getvenueclick.com',
        github: '',
        title: 'Get VenueClick',
        description: 'Get VenueClick, sitio web construido en WordPress.',
        technologies: ['WordPress']
      },
      {
        website: 'https://artisannow.org/',
        github: '',
        title: 'artisanNow',
        description: 'artisanNow, sitio web construido en WordPress.',
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
    link: 'https://github.com/carlosamarto/portfolio',
    text: 'Creado por Carlos Martínez.',
    social: {
      github: 'https://github.com/carlosamarto/',
      linkedin: 'https://www.linkedin.com/in/carlosamarto/',
      twitter: 'https://twitter.com/carlosamartoz/',
      instagram: 'https://www.instagram.com/carlosamartoz/'
    }
  }
}
