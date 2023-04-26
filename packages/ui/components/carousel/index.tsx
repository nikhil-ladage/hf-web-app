import { PropsWithChildren, ReactElement } from "react";
import Carousel from "react-material-ui-carousel";
import Banner from "./Banner";

interface RCarouselProps extends PropsWithChildren {
	items: Array<ReactElement>;
	cycleNavigation: boolean;
	animation: "fade" | "slide" | undefined;
	strictIndexing: boolean;
	autoPlay: boolean;
	navButtonsAlwaysInvisible: boolean;
}

const RCarousel = (props: RCarouselProps) => {
	const { items, ...rest } = props;
	return (
		<Carousel
			{...rest}
			indicatorContainerProps={{
				style: {
					padding: "2rem 0"
				},
			}}
		>
			{!!items?.length &&
				items?.map((item: any, index: number) => {
					return <Banner item={item} key={index} />;
				})}
		</Carousel>
	);
};

export default RCarousel;
