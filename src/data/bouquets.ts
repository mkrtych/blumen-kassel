export type BouquetStatus = "available" | "reserved" | "sold" | "archived";
export type ProductStatus = "available" | "limited" | "unavailable";

export type AuthorBouquet = {
	id: string;
	code: string;
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

export type FlowerProduct = {
	id: string;
	title: {
		de: string;
		ru: string;
	};
	description: {
		de: string;
		ru: string;
	};
	status: ProductStatus;
	image: string;
	imageAlt: {
		de: string;
		ru: string;
	};
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
		id: "nr0023",
		code: "Nr0023",
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
		id: "nr0024",
		code: "Nr0024",
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
		id: "nr0025",
		code: "Nr0025",
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
		id: "nr0026",
		code: "Nr0026",
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

export const roseProducts: FlowerProduct[] = [
	{
		id: "roses-white",
		title: { de: "Weiße Rosen", ru: "Белые розы" },
		description: {
			de: "Klassisch, ruhig und hell. Für Dankbarkeit, Respekt und klare Gesten.",
			ru: "Классические, спокойные и светлые. Для благодарности, уважения и понятного жеста.",
		},
		status: "available",
		image: "/images/bouquets/white-roses.webp",
		imageAlt: { de: "Großer Strauß weißer Rosen", ru: "Большой букет белых роз" },
		variants: [
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "35 €" },
			{ label: { de: "20 Stück", ru: "20 штук" }, price: "65 €" },
			{ label: { de: "30 Stück", ru: "30 штук" }, price: "95 €" },
		],
	},
	{
		id: "roses-pink",
		title: { de: "Rosa Rosen", ru: "Розовые розы" },
		description: {
			de: "Weich und herzlich. Für Liebe, Nähe und kleine besondere Momente.",
			ru: "Мягкие и тёплые. Для любви, близости и небольших особенных моментов.",
		},
		status: "limited",
		image: "/images/bouquets/blush-rose-eustoma.webp",
		imageAlt: { de: "Rosa Rosen in einem hellen Strauß", ru: "Розовые розы в светлом букете" },
		variants: [
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "39 €" },
			{ label: { de: "20 Stück", ru: "20 штук" }, price: "72 €" },
		],
	},
	{
		id: "roses-mixed",
		title: { de: "Rosen gemischt", ru: "Розы микс" },
		description: {
			de: "Eine flexible Auswahl, wenn die Farbe zum Anlass passen soll.",
			ru: "Гибкий вариант, когда цвет хочется подобрать под повод.",
		},
		status: "available",
		image: "/images/bouquets/pink-celebration.webp",
		imageAlt: { de: "Gemischter Strauß mit rosa Rosen", ru: "Смешанный букет с розовыми розами" },
		variants: [
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "ab 35 €" },
			{ label: { de: "20 Stück", ru: "20 штук" }, price: "ab 65 €" },
		],
	},
];

export const seasonalFlowers: FlowerProduct[] = [
	{
		id: "seasonal-hydrangea",
		title: { de: "Hortensien", ru: "Гортензии" },
		description: {
			de: "Voluminös, weich und besonders ausdrucksstark in saisonalen Farben.",
			ru: "Объёмные, мягкие и выразительные в сезонных оттенках.",
		},
		status: "available",
		image: "/images/bouquets/blue-hydrangea.webp",
		imageAlt: { de: "Blau-weiße Hortensien", ru: "Голубые и белые гортензии" },
		variants: [{ label: { de: "nach Auswahl", ru: "по выбору" }, price: "ab 12 €" }],
	},
	{
		id: "seasonal-chrysanthemums",
		title: { de: "Chrysanthemen", ru: "Хризантемы" },
		description: {
			de: "Frische Einzelblumen oder mehrere Stiele für leichte Arrangements.",
			ru: "Свежие цветы поштучно или несколько стеблей для лёгких композиций.",
		},
		status: "limited",
		image: "/images/bouquets/spring-color.webp",
		imageAlt: { de: "Bunter saisonaler Strauß mit Chrysanthemen", ru: "Яркий сезонный букет с хризантемами" },
		variants: [
			{ label: { de: "1 Stück", ru: "1 штука" }, price: "4 €" },
			{ label: { de: "10 Stück", ru: "10 штук" }, price: "35 €" },
		],
	},
	{
		id: "seasonal-pastel",
		title: { de: "Pastellmix", ru: "Пастельный микс" },
		description: {
			de: "Saisonale helle Blüten für eine ruhige, freundliche Geste.",
			ru: "Светлые сезонные цветы для спокойного и тёплого жеста.",
		},
		status: "available",
		image: "/images/bouquets/pastel-hydrangea.webp",
		imageAlt: { de: "Pastellfarbene saisonale Blumen", ru: "Пастельные сезонные цветы" },
		variants: [{ label: { de: "nach Tagesangebot", ru: "по наличию дня" }, price: "ab 25 €" }],
	},
];
