import { Button } from "ui";
import styles from "./Carousel.module.scss";
import Image from "next/image";

const CarouselItem = ({ item }) => {
	return (
		<div className={styles.carouselItemWrapper}>
			<img
				src={item?.bgContent}
				alt={""}
				className={`${styles.carouselItemBgContent}`}
			/>
			<div className={`${styles.carouselItemContent}`}>
				<div className={styles.carouselItemTitle}>{item?.title}</div>
				<div className={styles.carouselItemSubTitle}>
					{item?.subTitle}
				</div>
				{!!item?.CTA && (
					<a
						className="
				whitespace-normal 
				inline-flex 
				items-center 
				justify-center 
				relative 
				box-border 
				cursor-pointer 
				select-none 
				align-middle 
				appearance-none 
				bg-[initial] 
				border text-[#147bd1] 
				text-xl 
				font-medium 
				tracking-wider 
				leading-[26px] 
				uppercase 
				no-underline 
				min-w-[64px] 
				mt-[30px] 
				m-0 
				xsmall:px-[61.5px] 
				px-[30px]
				py-[18px] rounded-none border-solid border-[#147bd1]"
						tabIndex={0}
						href="/device/"
					>
						{item?.CTA}
						<span className="overflow-hidden pointer-events-none absolute z-0 rounded-[inherit] inset-0"></span>
					</a>
				)}
			</div>
		</div>
	);
};

export default CarouselItem;
