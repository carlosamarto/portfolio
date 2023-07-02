export const content = {
	english: {
		header: {
			menu: [
				{ number: "01.", text: "Intro", link: "#intro" },
				{ number: "02.", text: "About", link: "#about" },
				{ number: "03.", text: "Projects", link: "#projects" },
				{ number: "04.", text: "Contact", link: "#contact" },
			],
			button: "Resume",
			link: "Resume.pdf",
		},
		intro: {
			subtitle: "Hello, my name is",
			title: "Carlos Martínez",
			text: "<strong class='intro__strong'>Front-End Developer</strong> passionate about creating web pages that stand out for their great style.",
			link: "#contact",
			button: "Contact me",
		},
		about: {
			number: "02.",
			title: "About me",
			description:
				"With a strong background in <strong class='about__strong'>computer engineering</strong>, Over the past two years, I have been able to work with companies, where I have applied my skills in technologies such as <strong class='about__strong'>HTML</strong>, <strong class='about__strong'>CSS</strong>, <strong class='about__strong'>JavaScript</strong>.<br /><br /> My focus is on creating attractive and intuitive user interfaces. I am passionate about keeping up with the latest trends in the field of <strong class='about__strong'>web development</strong>, and I'm always looking for opportunities to learn and improve my skills.<br /><br /> These are some of the technologies I've been working on the most recently:",
			skills: [
				{ name: "HTML" },
				{ name: "CSS" },
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "Figma" },
				{ name: "WordPress" },
			],
			profile: "/Profile.jpg",
			caption: "Profile picture created by Vana IA",
		},
		projects: {
			number: "03.",
			title: "Projects",
			cards: [
				{
					github: "https://github.com/carlosmrtzor/portfolio",
					title: "Portfolio",
					description: "My personal portfolio to collect my experience and work, built in React.",
					skills: ["React"],
				},
				{
					website: "http://task-app-lovat.vercel.app/",
					github: "https://github.com/carlosmrtzor/task-app",
					title: "Task App",
					description: "Application to manage tasks efficiently using cookies, built on React.",
					skills: ["React"],
				},
				{
					website: "https://pokedex-app-rouge.vercel.app/",
					github: "https://github.com/carlosmrtzodev/pokedex-app",
					title: "Pokédex",
					description: "Pokédex in Next.js to consult the information of all pokemon by consuming an api.",
					skills: ["React", "Next.js", "Tailwind"],
				},
				{
					website: "https://dominiquepanczuch.com/",
					title: "Dominique",
					description: "Designer Portfolio for Dominique Panczuch built on WordPress.",
					skills: ["WordPress"],
				},
				{
					website: "https://oshica.com.ve/",
					title: "Oshica",
					description: "Oshica is a landing page to promote and sell your services built on WordPress.",
					skills: ["WordPress"],
				},
			],
		},
		contact: {
			subtitle: "04. What’s next?",
			title: "Get in touch",
			text: "I’m currently open to new job opportunities, if you want to contact me you can do it through my networks or send me an <strong class='contact__strong'>E-mail</strong> to the following link.",
			link: "mailto:carlosmrtzo@gmail.com",
			button: "Let's talk",
		},
		footer: {
			text: "Created by Carlos Martínez.",
			social: {
				github: "https://github.com/carlosmrtzor",
				instagram: "https://www.instagram.com/devilsncry3/",
				twitter: "https://twitter.com/devilsncry3",
				linkedin: "https://www.linkedin.com/in/carlosmrtzo/",
			},
			link: "https://github.com/carlosmrtzor/portfolio",
			en: "en",
			es: "es",
		},
	},

	spanish: {
		header: {
			menu: [
				{ number: "01.", text: "Introducción", link: "#intro" },
				{ number: "02.", text: "Sobre mí", link: "#about" },
				{ number: "03.", text: "Proyectos", link: "#projects" },
				{ number: "04.", text: "Contacto", link: "#contact" },
			],
			button: "Curriculum",
			link: "Curriculum.pdf",
		},
		intro: {
			subtitle: "Hola, me llamo",
			title: "Carlos Martínez",
			text: "<strong class='intro__strong'>Front-End Developer</strong> apasionado en crear páginas webs que destaquen por su gran estilo.",
			link: "#contact",
			button: "Contáctame",
		},
		about: {
			number: "02.",
			title: "Sobre mí",
			description:
				"Con una sólida formación en <strong class='about__strong'>ingeniería informática</strong>, en los últimos dos años he podido trabajar con empresas, donde he aplicado mis habilidades en tecnologías como <strong class='about__strong'>HTML</strong>, <strong class='about__strong'>CSS</strong>, <strong class='about__strong'>JavaScript</strong>.<br /><br />Mi enfoque es crear interfaces de usuario atractivas e intuitivas. Me apasiona mantenerme al día con las últimas tendencias en el campo del <strong class='about__strong'>desarrollo web</strong>, y siempre estoy buscando oportunidades para aprender y mejorar mis habilidades.<br /><br /> Estas son algunas de las tecnologías en las que he estado trabajando más recientemente:",
			skills: [
				{ name: "HTML" },
				{ name: "CSS" },
				{ name: "Javascript" },
				{ name: "React" },
				{ name: "Figma" },
				{ name: "WordPress" },
			],
			profile: "/Profile.jpg",
			caption: "Foto de perfil creada por Vana IA",
		},
		projects: {
			number: "03.",
			title: "Proyectos",
			cards: [
				{
					github: "https://github.com/carlosmrtzor/portfolio",
					title: "Portafolio",
					description: "Mi portafolio para recopilar mi experiencia y trabajo, construido en React.",
					skills: ["React"],
				},
				{
					website: "http://task-app-lovat.vercel.app/",
					github: "https://github.com/carlosmrtzor/task-app",
					title: "Aplicación de tareas",
					description: "Aplicación para administrar tareas mediante cookies, construida en React.",
					skills: ["React"],
				},
				{
					website: "https://pokedex-app-rouge.vercel.app/",
					github: "https://github.com/carlosmrtzodev/pokedex-app",
					title: "Pokédex",
					description: "Pokédex en Next.js, para hacer consultas consumiendo una api.",
					skills: ["React", "Next.js", "Tailwind"],
				},
				{
					website: "https://dominiquepanczuch.com/",
					title: "Dominique",
					description: "Portafolio de diseñador para Dominique Panczuch, construido en WordPress.",
					skills: ["WordPress"],
				},
				{
					website: "https://oshica.com.ve/",
					title: "Oshica",
					description: "Oshica, landing page para promocionar sus servicios, construida en WordPress.",
					skills: ["WordPress"],
				},
			],
		},
		contact: {
			subtitle: "04. ¿Que sigue?",
			title: "Ponte en contacto",
			text: "Actualmente estoy abierto a nuevas oportunidades laborales, si quieres contactarme puedes hacerlo a través de mis redes o enviarme un <strong class='contact__strong'>E-mail</strong> al siguiente enlace.",
			link: "mailto:carlosmrtzo@gmail.com",
			button: "Hablemos",
		},
		footer: {
			text: "Creado por Carlos Martínez.",
			social: {
				github: "https://github.com/carlosmrtzor",
				instagram: "https://www.instagram.com/devilsncry3/",
				twitter: "https://twitter.com/devilsncry3",
				linkedin: "https://www.linkedin.com/in/carlosmrtzo/",
			},
			link: "https://github.com/carlosmrtzor/portfolio",
			en: "en",
			es: "es",
		},
	},
};
