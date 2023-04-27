import BannerCarousel from "../shared-components/banner-carousel";
import NavbarCommonContent from "ui/components/navbar-common-content";
import {
	Container,
	FindAHydrafacialist,
	LogoGrid,
	Milestone,
	PhotoGrid,
	SplitPhoto,
	Navbar,
	Footer,
	Button,
} from "ui";
import { HOME_TAB_ROUTES } from "../common/routes";
import styles from "ui/components/button/styles";

export default function En() {
	return (
		<>
			<div>
				<Navbar
					isFixed={true}
					rootClass="top-0 left-0"
					customClass="
					h-[58px] xsmall:h-[62px] small:h-[98px]
					flex justify-between 
					py-[13px] px-[20px]
					small:py-[25px] small:px-[34px] 
					medium:px-[165px] medium:pt-[61px] medium:pb-[32px]"
				>
					<NavbarCommonContent />
				</Navbar>
				<Button
					className={`${styles.styleSolid} flex w-[100%] z-20 fixed top-[3.5rem] font-aktivMedium text-xl small:hidden `}
				>
					<div className="flex justify-between items-start">
						<div className="font-aktivMedium text-xl">
							FIND A HYDRAFACIALITS
						</div>
					</div>
				</Button>
				<Navbar
					isFixed={true}
					rootClass={"top-[6rem]"}
					customClass={
						"flex justify-between text-xl hidden small:flex px-[195px] pb-[100px] medium:px-[165px] medium:pb-[65px]"
					}
				>
					{HOME_TAB_ROUTES.map((item): any => {
						return (
							<div key={item.id}>{item.name}</div>
						);
					})}
				</Navbar>
			</div>
			<BannerCarousel />

			<Container>
				<Milestone />
			</Container>
			<PhotoGrid />
			<Container>
				<SplitPhoto num={1} />
			</Container>
			<Container>
				<SplitPhoto num={2} />
			</Container>
			<LogoGrid />
			<FindAHydrafacialist />
			<div className="medium:flex medium:justify-center">
				<Footer />
			</div>
		</>
	);
}
