// Mock with the content of the website
export const content = {
	english: {
		header: {
			menuItems: [
				{ menuNumber: "01.", menuText: "Introduction", menuLink: "#introduction" },
				{ menuNumber: "02.", menuText: "About", menuLink: "#about" },
				{ menuNumber: "03.", menuText: "Projects", menuLink: "#projects" },
				{ menuNumber: "04.", menuText: "Contact", menuLink: "#contact" },
			],
			buttonText: "Resume",
			buttonLink: "Resume.pdf",
		},
		introduction: {
			subtitle: "Hello, my name is",
			title: "Carlos Martínez",
			text: "<strong class='introduction__strong'>Front-End Developer</strong> passionate about creating web pages that stand out for their great style.",
			buttonLink: "#contact",
			buttonText: "Contact me",
		},
		about: {
			sectionNumber: "02.",
			title: "About me",
			description:
				"With a strong background in <strong class='about__strong'>computer engineering</strong>, Over the past two years, I have been able to work with companies, where I have applied my skills in technologies such as <strong class='about__strong'>HTML</strong>, <strong class='about__strong'>CSS</strong>, <strong class='about__strong'>JavaScript</strong>.<br /><br /> My focus is on creating attractive and intuitive user interfaces. I am passionate about keeping up with the latest trends in the field of <strong class='about__strong'>web development</strong>, and I'm always looking for opportunities to learn and improve my skills.<br /><br /> These are some of the technologies I've been working on the most recently:",
			technologies: [
				{ technologyName: "HTML5" },
				{ technologyName: "CSS3" },
				{ technologyName: "Javascript" },
				{ technologyName: "ReactJS" },
				{ technologyName: "Figma" },
				{ technologyName: "WordPress" },
			],
			imageProfile: "/Profile.jpg",
			imageCaption: "Profile picture created by Vana IA",
		},
		projects: {
			sectionNumber: "03.",
			title: "Projects",
			cardProjects: [
				{
					website: "http://task-app-lovat.vercel.app/",
					github: "https://github.com/carlosmrtzor/task-app",
					title: "Task App",
					description: "Application to manage tasks efficiently using cookies, built on React.",
					technologies: ["ReactJS"],
				},
				{
					website: "https://pokedex-pearl-two.vercel.app/",
					github: "https://github.com/carlosmrtzor/pokedex",
					title: "Pokédex",
					description: "Pokédex in React, TailwindCSS working with the consumption of an API with Axios.",
					technologies: ["ReactJS", "Tailwind CSS"],
				},
				{
					website: "https://tic-tac-toe-five-rosy.vercel.app/",
					github: "https://github.com/carlosmrtzor/tic-tac-toe",
					title: "Tic Tac Toe",
					description: "Tic Tac Toe in React using useEffect and LocalStorage, from Midudev's course.",
					technologies: ["ReactJS"],
				},
				{
					website: "https://dominiquepanczuch.com/",
					title: "Dominique",
					description: "Designer Portfolio for Dominique Panczuch built on WordPress.",
					technologies: ["WordPress"],
				},
				{
					website: "https://oshica.com.ve/",
					title: "Oshica",
					description: "Oshica is a landing page to promote and sell your services built on WordPress.",
					technologies: ["WordPress"],
				},
				{
					website: "https://homeloversusa.com/",
					title: "Home Lovers USA",
					description: "Home Lovers USA is a landing page to promote and sell your services built on WordPress.",
					technologies: ["WordPress"],
				},
			],
		},
		contact: {
			subtitle: "04. What’s next?",
			title: "Get in touch",
			text: "I’m currently open to new job opportunities, if you want to contact me you can do it through my networks or send me an <strong class='contact__strong'>E-mail</strong> to the following link.",
			buttonLink: "mailto:carlosmrtzo@gmail.com",
			buttonText: "Let's talk",
		},
		footer: {
			text: "Created by Carlos Martínez.",
			social: {
				github: "https://github.com/carlosmrtzor",
				instagram: "https://www.instagram.com/devilsncry3/",
				twitter: "https://twitter.com/devilsncry3",
				linkedin: "https://www.linkedin.com/in/carlosmrtzo/",
				codepen: "https://codepen.io/carlosmrtzo",
			},
			langEn: "en",
			langEs: "es",
		},
	},

	spanish: {
		header: {
			menuItems: [
				{ menuNumber: "01.", menuText: "Introducción", menuLink: "#intro" },
				{ menuNumber: "02.", menuText: "Sobre mí", menuLink: "#about" },
				{ menuNumber: "03.", menuText: "Proyectos", menuLink: "#projects" },
				{ menuNumber: "04.", menuText: "Contacto", menuLink: "#contact" },
			],
			buttonText: "Curriculum",
			buttonLink: "Curriculum.pdf",
		},
		introduction: {
			subtitle: "Hola, me llamo",
			title: "Carlos Martínez",
			text: "<strong class='introduction__strong'>Front-End Developer</strong> apasionado en crear páginas webs que destaquen por su gran estilo.",
			buttonLink: "#contact",
			buttonText: "Contáctame",
		},
		about: {
			sectionNumber: "02.",
			title: "Sobre mí",
			description:
				"Con una sólida formación en <strong class='about__strong'>ingeniería informática</strong>, en los últimos dos años he podido trabajar con empresas, donde he aplicado mis habilidades en tecnologías como <strong class='about__strong'>HTML</strong>, <strong class='about__strong'>CSS</strong>, <strong class='about__strong'>JavaScript</strong>.<br /><br />Mi enfoque es crear interfaces de usuario atractivas e intuitivas. Me apasiona mantenerme al día con las últimas tendencias en el campo del <strong class='about__strong'>desarrollo web</strong>, y siempre estoy buscando oportunidades para aprender y mejorar mis habilidades.<br /><br /> Estas son algunas de las tecnologías en las que he estado trabajando más recientemente:",
			technologies: [
				{ technologyName: "HTML5" },
				{ technologyName: "CSS3" },
				{ technologyName: "Javascript" },
				{ technologyName: "ReactJS" },
				{ technologyName: "Figma" },
				{ technologyName: "WordPress" },
			],
			imageProfile: "/Profile.jpg",
			imageCaption: "Foto de perfil creada por Vana IA",
		},
		projects: {
			sectionNumber: "03.",
			title: "Proyectos",
			cardProjects: [
				{
					website: "http://task-app-lovat.vercel.app/",
					github: "https://github.com/carlosmrtzor/task-app",
					title: "Aplicación de tareas",
					description: "Aplicación para administrar tareas mediante cookies, construida en React.",
					technologies: ["ReactJS"],
				},
				{
					website: "https://pokedex-pearl-two.vercel.app/",
					github: "https://github.com/carlosmrtzor/pokedex",
					title: "Pokédex",
					description: "Pokédex en React, TailwindCSS trabajando con el consumo de una API con Axios.",
					technologies: ["ReactJS", "Tailwind CSS"],
				},
				{
					website: "https://tic-tac-toe-five-rosy.vercel.app/",
					github: "https://github.com/carlosmrtzor/tic-tac-toe",
					title: "Tic Tac Toe",
					description: "Tic Tac Toe en React usando useEffect y LocalStorage, del curso de Midudev.",
					technologies: ["ReactJS"],
				},
				{
					website: "https://dominiquepanczuch.com/",
					title: "Dominique",
					description: "Portafolio de diseñador para Dominique Panczuch, construido en WordPress.",
					technologies: ["WordPress"],
				},
				{
					website: "https://oshica.com.ve/",
					title: "Oshica",
					description: "Oshica, landing page para promocionar sus servicios, construida en WordPress.",
					technologies: ["WordPress"],
				},
				{
					website: "https://homeloversusa.com/",
					title: "Home Lovers USA",
					description: "Home Lovers USA, landing page para promocionar sus servicios, construida en WordPress.",
					technologies: ["WordPress"],
				},
			],
		},
		contact: {
			subtitle: "04. ¿Que sigue?",
			title: "Ponte en contacto",
			text: "Actualmente estoy abierto a nuevas oportunidades laborales, si quieres contactarme puedes hacerlo por mis redes o enviarme un <strong class='contact__strong'>E-mail</strong> al siguiente enlace.",
			buttonLink: "mailto:carlosmrtzo@gmail.com",
			buttonText: "Hablemos",
		},
		footer: {
			text: "Creado por Carlos Martínez.",
			social: {
				github: "https://github.com/carlosmrtzor",
				instagram: "https://www.instagram.com/devilsncry3/",
				twitter: "https://twitter.com/devilsncry3",
				linkedin: "https://www.linkedin.com/in/carlosmrtzo/",
				codepen: "https://codepen.io/carlosmrtzo",
			},
			langEn: "en",
			langEs: "es",
		},
	},
};
