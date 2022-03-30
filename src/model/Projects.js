import IMG_Etch_A_Sketch from "../IMG/IMG_Etch_A_Sketch.png"
import IMG_Weather_App from "../IMG/IMG_Weather_APP.png"
import IMG_Resume_Builder from "../IMG/IMG_Resume_Builder.png"

const Projects = [
	{
		id: 1,
		img: IMG_Resume_Builder,
		title: "Créateur de CV",
		description: "Site qui permet de créer son propre cv et de le télécharger au format PDF.",
		stacks: ["ReactJS"],
	},
	{
		id: 2,
		img: IMG_Weather_App,
		title: "Weather Researcher",
		description:
			"Site qui permet de chercher une ville pour afficher la météo de la ville recherchée.",
		stacks: ["JavaScript", "Open Weather API", "HTML/CSS"],
	},
	{
		id: 3,
		img: IMG_Etch_A_Sketch,
		title: "Jeu Etch A Sketch",
		description:
			"Site qui permet de jouer au jeu Etch A Sketch, de choisir la couleur voulue et de choisir la taille des cases.",
		stacks: ["Javascript", "CSS Grid"],
	},
]

export default Projects
