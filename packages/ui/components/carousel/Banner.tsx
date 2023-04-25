import Container from "../container";
import styles from "./Carousel.module.scss";

const Banner = (props: any) => {
	return (
		// <Container defaultBgColor="">
			<div className={`flex justify-center ${styles.carouselItemWrapper}`}>
				{props.item}
			</div>
		// </Container>
	);
};

export default Banner;
