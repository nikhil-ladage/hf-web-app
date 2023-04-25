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
} from "ui";

import { HOME_TAB_ROUTES } from "../common/routes";
import BannerCarousel from "../shared-components/banner-carousel";

export default function En() {
	return (
		<>
			<div>
				<Navbar
					isFixed={true}
					customClass="bg-white top-0 left-0 flex justify-between px-[1.25rem] pt-[0.513rem] small:pt-[1.563rem] small:px-[2.125rem] pb-[4rem] medium:px-[10.313rem] medium:pt-[3.813rem]"
				>
					<div className="flex items-center">
						<div>
							<img
								src="https://www.hydrafacial.com/static/media/hydrafacial.2cb729122ebed9b1fdf89ac3c87c334a.svg"
								className="w-[7.875rem] small:w-[14rem]"
							/>
						</div>
					</div>
					<div className="items-center text-[.813rem] text-[rgba(0,0,0,.5)] hidden small:flex">
						<div className="flex px-4">
							<img src="https://www.hydrafacial.com/static/media/search.998b0144c146a3004de3561ad091c713.svg" />
							<p className="font-medium">SEARCH</p>
						</div>
						<div className="pl-4 whitespace-nowrap">
							<p className="font-medium">FOR PROFESSIONAL</p>
						</div>
					</div>
					<div className="small:hidden">
						<MuiDrawer />
					</div>
				</Navbar>

				<Navbar
					isFixed={true}
					customClass={
						"flex justify-between text-xl hidden small:flex small:px-[10.313rem] top-[8rem]"
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
			<Footer />
		</>
	);
}
