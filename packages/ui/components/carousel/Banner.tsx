import styles from "./Carousel.module.scss";

const Banner = (props: any) => {
	return (
		<div className={`flex justify-center ${styles.carouselItemWrapper}`}>
			{props.item}
		</div>
	);
};

export default Banner;
