import {
	Container,
	FindAHydrafacialist,
	LogoGrid,
	Milestone,
	PhotoGrid,
	SplitPhoto,
	MuiDrawer,
	Navbar,
	Footer,
	CountryMenu,
} from "ui";

import { HOME_TAB_ROUTES } from "../common/routes";
import BannerCarousel from "../shared-components/banner-carousel";

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
					<div className="flex items-center">
						<div>
							<img
								src="https://www.hydrafacial.com/static/media/hydrafacial.2cb729122ebed9b1fdf89ac3c87c334a.svg"
								className="w-[126px] small:w-[160px]"
							/>
						</div>
						<div className="hidden xsmall:block">
							<CountryMenu />
						</div>
					</div>
					<div className="items-center text-[13px] text-[rgba(0,0,0,.5)] hidden small:flex">
						<div className="flex px-3 items-center p-1">
							<img src="https://www.hydrafacial.com/static/media/search.998b0144c146a3004de3561ad091c713.svg" className="w-5 h-5" />
							<a className="font-aktivLight">SEARCH</a>
						</div>
						<div className="pl-3 whitespace-nowrap">
							<a className="font-aktivLight p-1">FOR PROFESSIONALS</a>
						</div>
					</div>
					<div className="small:hidden">
						<MuiDrawer />
					</div>
				</Navbar>

				<Navbar
					isFixed={true}
					rootClass={"top-[6rem]"}
					customClass={
						"flex justify-between text-xl hidden small:flex px-[195px] pb-[100px] medium:px-[165px] medium:pb-[65px]"
					}
				>
					{HOME_TAB_ROUTES.map((item): any => {
						return (
							<>
								<div key={item.id}>{item.name}</div>
							</>
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
