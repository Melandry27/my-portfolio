import IMG_Etch_A_Sketch from "../IMG/IMG_Etch_A_Sketch.png"
import IMG_Weather_App from "../IMG/IMG_Weather_APP.png"
import IMG_Resume_Builder from "../IMG/IMG_Resume_Builder.png"
import IMG_Space_Shop from "../IMG/IMG_Space_Shop.png"

const Projects = [
	{
		id: 1,
		img: IMG_Space_Shop,
		title: "Space Shop",
		description:
			"Site maquette de vente de planete nft, projet réaliser pour apprendre à utiliser react-router-dom.",
		stacks: ["ReactJS", "React-route-dom", "CSS Flex"],
		link: "https://github.com/Melandry27/Shop-Space",
		link2: "https://melandry-space.netlify.app/",
	},
	{
		id: 2,
		img: IMG_Resume_Builder,
		title: "Créateur de CV",
		description: "Site qui permet de créer son propre cv et de le télécharger au format PDF.",
		stacks: ["ReactJS"],
		link: "https://github.com/Melandry27/resume-builder",
	},
	{
		id: 3,
		img: IMG_Weather_App,
		title: "Weather Researcher",
		description:
			"Site qui permet de chercher une ville pour afficher la météo de la ville recherchée.",
		stacks: ["JavaScript", "Open Weather API", "HTML/CSS"],
		link: "https://github.com/Melandry27/Weather-App",
	},
	{
		id: 4,
		img: IMG_Etch_A_Sketch,
		title: "Jeu Etch A Sketch",
		description:
			"Site qui permet de jouer au jeu Etch A Sketch, de choisir la couleur voulue et de choisir la taille des cases.",
		stacks: ["Javascript", "CSS Grid"],
		link: "https://github.com/Melandry27/Etch-A-Sketch",
	},
]

export default Projects
