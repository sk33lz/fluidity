import pic_1 from "./pictures/pic_1.jpg";
import pic_2 from "./pictures/pic_2.jpg";
import pic_3 from "./pictures/pic_3.jpg";
import pic_4 from "./pictures/pic_4.jpg";
import pic_5 from "./pictures/pic_5.jpg";
import pic_6 from "./pictures/pic_6.jpg";
import pic_7 from "./pictures/pic_7.jpg";
import pic_8 from "./pictures/pic_8.png";
import pic_9 from "./pictures/pic_9.jpg";

export type dataElem = {
	label: string,
	value: string,
}

export type linkGroup = {
	title: string;
	links: dataElem[];
}

/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ DELIVER THE GOODS!
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
export const links: linkGroup[] = [
	{
		title: "Jawns",
		links: [
			{
				label: "Gmail",
				value: "https://mail.google.com/mail/u/0/#inbox",
			},
			{
				label: "GitHub Repos",
				value: "https://github.com/sk33lz?tab=repositories",
			},
			{
				label: "Old Reddit",
				value: "https://old.reddit.com/",
			},
			{
				label: "YouTube",
				value: "https://www.youtube.com",
			},
			{
				label: "Twitter Trending",
				value: "https://twitter.com/explore/tabs/trending",
			},
		]
	},
	{
		title: "3D Modelling",
		links: [
			{
				label: "Blender",
				value: "https://www.blender.org/",
			},
			{
				label: "BlenderGuru",
				value: "https://www.blenderguru.com/",
			},
			{
				label: "Poliigon",
				value: "https://www.poliigon.com/",
			},
			{
				label: "Blender tutorial",
				value: "https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U",
			},
			{
				label: "The other Blender tutorial",
				value: "https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1",
			},
		]
	},
	{
		title: "Design",
		links: [
			{
				label: "PixlrX",
				value: "https://pixlr.com/x/",
			},
			{
				label: "AI Image Enlarger",
				value: "https://bigjpg.com/en",
			},
			{
				label: "Img to Svg Converter",
				value: "https://picsvg.com/",
			},
			{
				label: "Affinity",
				value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/",
			},
			{
				label: "Affinity - YT",
				value: "https://www.youtube.com/c/AffinityRevolution/playlists",
			},
		]
	},
	{
		title: "Music",
		links: [
			{
				label: "3AM Eternal",
				value: "https://www.youtube.com/watch?v=HDsCeC6f0zc",
			},
			{
				label: "Under Mi Sensi",
				value: "https://www.youtube.com/watch?v=uozhx1xeTDg",
			},
			{
				label: "Can You Feel It?",
				value: "https://www.youtube.com/watch?v=hCSkw4roTEQ",
			},
			{
				label: "Boogie",
				value: "https://www.youtube.com/watch?v=tRYKAMjKgto",
			},
			{
				label: "B-Side",
				value: "https://www.youtube.com/watch?v=CgugkEB-q_Q",
			},
			{
				label: "Fette's Vette",
				value: "https://www.youtube.com/watch?v=2z9XTeeA43o",
			},
		]
	},
	{
		title: "Sauce",
		links: [
			{
				label: "Fluidity Startpage",
				value: "https://github.com/PrettyCoffee/fluidity",
			},
			{
				label: "Icons - FontAwesome",
				value: "https://fontawesome.com/icons",
			},
			{
				label: "Text Flicker - CodeMyUI",
				value: "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/",
			},
			{
				label: "Wave Animation - mburakerman",
				value: "https://codepen.io/mburakerman/pen/eRZZEv",
			},
		]
	},
]

export const images: dataElem[] = [
	{ label: "pic_1", value: pic_1 },
	{ label: "pic_2", value: pic_2 },
	{ label: "pic_3", value: pic_3 },
	{ label: "pic_4", value: pic_4 },
	{ label: "pic_5", value: pic_5 },
	{ label: "pic_6", value: pic_6 },
	{ label: "pic_7", value: pic_7 },
	{ label: "pic_8", value: pic_8 },
];

export const searchEngines: dataElem[] = [
	{
		label: "DuckDuckGo",
		value: "duckduckgo.com/",
	},
	{
		label: "Google",
		value: "google.com/search",
	},
	{
		label: "Qwant",
		value: "qwant.com/",
	},
];

export type FastForwards = {
	[key: string]: string,
}

export type Search = {
	engine: string,
	fastForward: FastForwards,
}

export const searchSettings: Search = {
	engine: searchEngines[0].value,
	fastForward: {
		"deepl": "https://deepl.com/",
		"maps": "https://google.de/maps/",
		"reddit": "https://reddit.com/",
		"github": "https://github.com/",
		"gitlab": "https://gitlab.com/",
		"youtube": "https://youtube.com/",
	}
}

export type colorsType = {
	[key: string]: string
	"--bg-color": string,
	"--default-color": string,
	"--accent-color": string,
	"--accent-color2": string,
}

export type Theme = {
	name: string;
	colors: colorsType;
	image: string;
}

export const themes: Theme[] = [
	{
		name: "Sk33lz Jawn",
		image: pic_9,
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#9ad1a2",
			"--accent-color2": "#F9E18F",
		}
	},
	{
		name: "DeathAndMilk",
		image: pic_1,
		colors: {
			"--bg-color": "#2E2E2E",
			"--default-color": "#E6E6E6",
			"--accent-color": "#FFB4E6",
			"--accent-color2": "#B4FFE6",
		},
	},
	{
		name: "Pop!OS",
		image: "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
		colors: {
			"--bg-color": "#333136",
			"--default-color": "#2BC5EB",
			"--accent-color": "#FCD307",
			"--accent-color2": "#2BC5EB",
		},
	},
	{
		name: "Dark Souls",
		image: "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
		colors: {
			"--bg-color": "#32323C",
			"--default-color": "#A0A08C",
			"--accent-color": "#9A6650",
			"--accent-color2": "#461E28",
		},
	},
	{
		name: "S.E.Lain",
		image: "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
		colors: {
			"--bg-color": "#0a1a25",
			"--default-color": "#a6b7ab",
			"--accent-color": "#94656b",
			"--accent-color2": "#57182e"
		}
	},
	{
		name: "Kitties",
		image: "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
		colors: {
			"--bg-color": "#495662",
			"--default-color": "#d1f1fa",
			"--accent-color": "#80aad4",
			"--accent-color2": "#e8a9b7"
		}
	},
	{
		name: "pretty chill",
		image: "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
		colors: {
			"--bg-color": "#397d76",
			"--default-color": "#f1daba",
			"--accent-color": "#c5bdb5",
			"--accent-color2": "#93a662"
		}
	}
]
