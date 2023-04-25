import { Button, MuiDrawer, Navbar } from "ui";
export default function En() {
	return (
		<>
			<div>
				<Navbar
					isFixed={true}
					customClass="bg-white flex justify-between pt-14 px-44 pb-8 medium:pt-6 px-8 "
				>
					<div className="flex px-4 items-center">
						<div>
							<img src="https://www.hydrafacial.com/static/media/hydrafacial.2cb729122ebed9b1fdf89ac3c87c334a.svg" />
						</div>
					</div>
					<div className="flex px-4 items-center text-[rgba(0,0,0,.5)] small:hidden">
						<div className="flex px-4">
							<img src="https://www.hydrafacial.com/static/media/search.998b0144c146a3004de3561ad091c713.svg" />
							<span>SEARCH</span>
						</div>
						<div className="px-4 whitespace-nowrap">
							FOR PROFESSIONAL
						</div>
					</div>
					<div className="xxlarge:hidden small:!flex ">
						<MuiDrawer />
					</div>
				</Navbar>
			</div>
		</>
	);
}
