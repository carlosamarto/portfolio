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
    buttonLink: 'resumes/curriculum-front-end.pdf'
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
      "Soy <strong class='intro__strong'>Desarrollador Front-End</strong>, tengo dos años de experiencia trabajando en esta área, usando tecnologías como <strong class='intro__strong'>React</strong>, <strong class='intro__strong'>JavaScript</strong> y <strong class='intro__strong'>CSS</strong>. Especializándome en estas mismas tecnologías mientras voy mejorando y aprendiendo cosas nuevas como: <strong class='intro__strong'>Next.js</strong>, <strong class='intro__strong'>TypeScript</strong>, <strong class='intro__strong'>Tailwind CSS</strong>, etc.",
    descriptionb:
      'En mi experiencia, tengo buena comunicación con el equipo, buen desempeñó individual y siempre colaboro en lo posible.',
    descriptionc: 'Aquí hay algunas de las tecnologías en las que he estado trabajando recientemente:',
    technologies: [
      { technologyName: '<span class="about__symbol">◇</span>HTML' },
      { technologyName: '<span class="about__symbol">◇</span>CSS' },
      { technologyName: '<span class="about__symbol">◇</span>JavaScript' },
      { technologyName: '<span class="about__symbol">◇</span>TypeScript' },
      { technologyName: '<span class="about__symbol">◇</span>React' },
      { technologyName: '<span class="about__symbol">◇</span>Next.js' },
      { technologyName: '<span class="about__symbol">◇</span>Tailwind' },
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
          '<span class="experience__symbol">◇</span><p class="experience__description">Logre en el proceso aprender <strong class="intro__strong">Figma</strong> para encargarme de la conceptualización y diseño de componentes, widgets y pantallas, que luego lleve a la maquetación en código utilizando <strong class="intro__strong">React</strong> sobre un proyecto en <strong class="intro__strong">Next.js</strong>.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Colabore con otros miembros del equipo de distintas áreas para avanzar en ciertas tareas, comunicándome de manera efectiva y clara con temas relacionados con el <strong class="intro__strong">Front-End</strong>.</p>'
      },
      {
        description:
          '<span class="experience__symbol">◇</span><p class="experience__description">Seguí patrones y mejore prácticas establecidas para obtener un código limpio y mantenible, incluyendo la aplicación de clases auxiliares, estilo JSX y una arquitectura modular de componentes.</p>'
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

// Work
export const work: Work = {
  header: {
    menuItems: [
      { menuNumber: '01.', menuText: 'Introducción', menuLink: '#intro' },
      { menuNumber: '02.', menuText: 'Proyectos', menuLink: '#projects' },
      { menuNumber: '03.', menuText: 'Contacto', menuLink: '#contact' }
    ],
    buttonLink: 'resumes/curriculum-wordpress.pdf'
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
