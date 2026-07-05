export type BouquetStatus = "available" | "reserved" | "sold" | "archived";
export type ClassicFlowerStatus = "available" | "limited" | "unavailable";

export type AuthorBouquet = {
	id: string;
	title: {
		de: string;
		ru: string;
	};
	description: {
		de: string;
		ru: string;
	};
	price: string;
	status: BouquetStatus;
	image: string;
	imageAlt: {
		de: string;
		ru: string;
	};
};

export type ClassicFlower = {
	id: string;
	title: {
		de: string;
		ru: string;
	};
	description: {
		de: string;
		ru: string;
	};
	status: ClassicFlowerStatus;
	variants: Array<{
		label: {
			de: string;
			ru: string;
		};
		price: string;
	}>;
};

export const authorBouquets: AuthorBouquet[] = [
	{
		id: "bouquet-blush-rose-eustoma",
		title: {
			de: "Rosa Morgen",
			ru: "Розовое утро",
		},
		description: {
			de: "Zarte Rosen, Eustoma und feines Beiwerk für einen ruhigen, persönlichen Moment.",
			ru: "Нежные розы, эустома и лёгкие акценты для спокойного, личного момента.",
		},
		price: "49 €",
		status: "available",
		image: "/images/bouquets/blush-rose-eustoma.webp",
		imageAlt: {
			de: "Handgebundener Strauß mit rosa Rosen, Eustoma und weißen Blüten",
			ru: "Авторский букет с розовыми розами, эустомой и белыми цветами",
		},
	},
	{
		id: "bouquet-pastel-hydrangea",
		title: {
			de: "Pastellgruß",
			ru: "Пастельное послание",
		},
		description: {
			de: "Ein weicher, heller Strauß mit Hortensie, Rosen und frischen Pastelltönen.",
			ru: "Мягкий светлый букет с гортензией, розами и свежими пастельными оттенками.",
		},
		price: "59 €",
		status: "reserved",
		image: "/images/bouquets/pastel-hydrangea.webp",
		imageAlt: {
			de: "Pastellfarbener Strauß mit blauer Hortensie, rosa Rosen und weißen Blüten",
			ru: "Пастельный букет с голубой гортензией, розовыми розами и белыми цветами",
		},
	},
	{
		id: "bouquet-pink-celebration",
		title: {
			de: "Pink Celebration",
			ru: "Розовый праздник",
		},
		description: {
			de: "Ein farbiger Strauß für Geburtstage, Überraschungen und sichtbare Freude.",
			ru: "Яркий букет для дня рождения, сюрприза и радости, которую хочется показать.",
		},
		price: "64 €",
		status: "sold",
		image: "/images/bouquets/pink-celebration.webp",
		imageAlt: {
			de: "Großer pinker Strauß mit Hortensien, Rosen und weißen Blüten",
			ru: "Большой розовый букет с гортензиями, розами и белыми цветами",
		},
	},
	{
		id: "bouquet-blue-hydrangea",
		title: {
			de: "Blauer Gedanke",
			ru: "Голубая мысль",
		},
		description: {
			de: "Kühle Blau- und Weißtöne für Dankbarkeit, Ruhe und besondere Aufmerksamkeit.",
			ru: "Свежие голубые и белые оттенки для благодарности, спокойствия и внимания.",
		},
		price: "69 €",
		status: "available",
		image: "/images/bouquets/blue-hydrangea.webp",
		imageAlt: {
			de: "Blau-weißer Strauß mit Hortensien und weißen Blüten",
			ru: "Голубо-белый букет с гортензиями и белыми цветами",
		},
	},
];

export const classicFlowers: ClassicFlower[] = [
	{
		id: "classic-roses",
		title: {
			de: "Rosen",
			ru: "Розы",
		},
		description: {
			de: "Klassische Rosen für klare Gesten: Liebe, Dankbarkeit oder Aufmerksamkeit.",
			ru: "Классические розы для понятного жеста: любовь, благодарность или внимание.",
		},
		status: "available",
		variants: [
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "35 €" },
			{ label: { de: "20 Stück", ru: "20 штук" }, price: "65 €" },
			{ label: { de: "30 Stück", ru: "30 штук" }, price: "95 €" },
		],
	},
	{
		id: "classic-chrysanthemums",
		title: {
			de: "Chrysanthemen",
			ru: "Хризантемы",
		},
		description: {
			de: "Frische Einzelblumen oder mehrere Stiele für leichte, helle Arrangements.",
			ru: "Свежие цветы поштучно или несколько стеблей для лёгких светлых композиций.",
		},
		status: "limited",
		variants: [
			{ label: { de: "1 Stück", ru: "1 штука" }, price: "4 €" },
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "35 €" },
		],
	},
];

