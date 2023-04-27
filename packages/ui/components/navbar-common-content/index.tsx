import { useState } from "react";
import { CountryMenu } from "../dropdown";
import Drawer from "../drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Accordion from "../accordion";

const NavbarCommonContent = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<>
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
					<img src="https://www.hydrafacial.com/static/media/search.998b0144c146a3004de3561ad091c713.svg" />
					<p className="font-aktivLight">SEARCH</p>
				</div>
				<div className="pl-3 whitespace-nowrap">
					<p className="font-aktivLight p-1">FOR PROFESSIONAL</p>
				</div>
			</div>
			<div className="small:hidden">
				<MenuIcon onClick={() => setIsOpen(!isOpen)} />
				<Drawer isOpen={isOpen}>
					<Accordion title="HYDRAFACIAL">
						<p>How it Works</p>
						<p>Treatment Types</p>
						<p>Learn About Skin Concerns</p>
						<p>Find a Hydrafacialist</p>
					</Accordion>
					<Accordion title={"FOR PROFESSIONALS"}>
						<p>Home</p>
						<p>Device</p>
						<p>Treatments</p>
						<p>Boosters</p>
						<p>Rewards</p>
						<p>Training</p>
						<p>Store</p>
						<p>Talk With Sales</p>
					</Accordion>
					<Accordion title={"ABOUT US"}>
						<p>About Us</p>
						<p>Investor Relations</p>
						<p>Careers</p>
						<p>Claims</p>
					</Accordion>
				</Drawer>
			</div>
		</>
	);
};

export default NavbarCommonContent;
