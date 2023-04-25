import RCarousel from "ui/components/carousel";
import styles from "./Carousel.module.scss";
import CarouselItem from "./CarouselItem";

const carouselItemObj = [
	{
		bgContent:
			"https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt19f0537715772822/6389aeb4235cae52f0f8039b/Client_HP_Banner_1.png",
		title: "Get the Best Skin of Your Life",
		subTitle:
			"Our non-invasive, personalized treatment tackles your unique skin concerns, leaving you looking and feeling radiant. ",
		CTA: "see how it works",
	},
	{
		bgContent:
			"https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt7522f3ce56493245/6389ae9debfc405e2908ae30/Client_HP_Banner_3.png",
		title: "How it Works",
		subTitle:
			"Unlike traditional facials, it’s performed via device rather than by hand, for deeper penetration and longer lasting results. ",
		CTA: "view the Treatment",
	},
];

const BannerCarousel = () => {
	const items = [
		...carouselItemObj.map((contentObj, index) => (
			<CarouselItem item={contentObj} key={index} />
		)),
	];

	return (
		<div className={styles.carouselBannerWrapper}>
			<RCarousel
				items={items}
				cycleNavigation={true}
				animation={"slide"}
				strictIndexing
				autoPlay={false}
				navButtonsAlwaysInvisible={true}
			/>
		</div>
	);
};

export default BannerCarousel;
