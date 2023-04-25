import { FC } from "react";
import { IFooterProps } from "./footer.types";
import { footerData } from "./footerData";
import Link from "next/link";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import * as React from "react";
import Radio from "@mui/material/Radio";
import styles from "../button/styles";
import { Button } from "../button";
import Accordion from "../accordion";

export const Footer: FC<IFooterProps> = (props) => {
	const { ...rest } = props;
	const [selectedValue, setSelectedValue] = React.useState("a");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value);
	};
	return (
		<footer>
			<div
				className={
					"bg-[#fff] medium:bg-[#7e7e7e] h-[2px] max-w-[100%] opacity-[10%]"
				}
			></div>
			<div className={"medium:px-[120px] pt-[90px] pb-[32px]"}>
				<div className="">
					<div className="flex flex-col medium:flex-row">
						<div className="hidden medium:flex flex-row">
							{footerData?.lists.map((list, idx) => (
								<div className="flex-auto pr-[70px]" key={idx}>
									<div className="text-[16px] font-[700] tracking-wider leading-5 color-[#000]">
										<span className="font-light">
											{list.title}
										</span>
									</div>
									{list?.items.map((item, id) => (
										<div key={id}>
											<Link
												href=""
												className="text-[13px] font-extralight px-[0px] py-[5px] hover:text-[#147bd1]"
											>
												{item.label}
											</Link>
										</div>
									))}
									{list.title === "HYDRAFACIAL" ? (
										<div className="mt-[28px]">
											<FacebookTwoToneIcon fontSize="large" />
											<InstagramIcon
												fontSize="large"
												className="ml-[10px]"
											/>
										</div>
									) : (
										""
									)}
								</div>
							))}
						</div>
						<div className="block medium:hidden">
							<Accordion title={"HYDRAFACIAL"}>
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
						</div>
						<div className="flex-auto pl-[15px] pt-[10px] medium:pl-[0px] medium:pt-[0px]">
							<p className="text-[16px] font-[200] leading-6 mb-[10px] medium:text-[24px]">
								Subscribe for updates
							</p>
							<p className="text-[14px] leading-5 font-[100]">
								Stay up-to-date with Hydrafacial special offers
								and exciting updates.
							</p>

							<div className="mt-[5px] pl-[0px]">
								<div className="flex flex-row">
									<div>
										<Radio
											checked={selectedValue === "a"}
											onChange={handleChange}
											value="a"
											name="radio-buttons"
											inputProps={{ "aria-label": "A" }}
											size="small"
										/>
										<span>Customer</span>
									</div>
									<div>
										<Radio
											checked={selectedValue === "b"}
											onChange={handleChange}
											value="b"
											name="radio-buttons"
											inputProps={{ "aria-label": "B" }}
											size="small"
										/>
										<span>Professional</span>
									</div>
								</div>
							</div>
							<div className="flex flex-row mt-[20px]">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="border px-[16px] py-[9px] border-[#000] border-[0.67841px]"
								/>
								<Button
									className={`${styles.styleSolid} ml-[10px]`}
								>
									sign up
								</Button>
							</div>
						</div>
					</div>
					<div className="">
						<div className="mt-[28px] block pl-[15px] medium:hidden ">
							<FacebookTwoToneIcon fontSize="large" />
							<InstagramIcon
								fontSize="large"
								className="ml-[10px]"
							/>
						</div>
						<div className="hidden medium:pt-[20px] medium:block">
							<span className="text-[12px] text-[grey] text-left font-[400]">
								<i>
									*Results may vary from business to business
								</i>
							</span>
						</div>
						<div
							className={
								"flex flex-col justify-between mt-[10px] pl-[15px] medium:flex-row medium:pl-[0px]"
							}
						>
							<div className={"medium:flex flex-row"}>
								<span
									className={
										"text-[rgba(0,0,0,.5)] text-[13px] mr-[14px] font-light"
									}
								>
									Copyright © 2023. HydraFacial LLC.
								</span>
								<span
									className={
										"text-[rgba(0,0,0,.5)] text-[13px] mr-[14px]"
									}
								>
									All Rights Reserved.
								</span>
								<span
									className={
										"text-[rgba(0,0,0,.5)] text-[13px] mr-[14px]"
									}
								>
									Privacy Policy
								</span>
							</div>
							<div className="block medium:hidden">
								<span className="text-[12px] text-[grey] text-left font-[400]">
									<i>
										*Results may vary from business to
										business
									</i>
								</span>
							</div>
							<div className={"medium:flex flex-row"}>
								<span
									className={
										"text-[rgba(0,0,0,.5)] text-[13px] mr-[14px]"
									}
								>
									Contact us: 1-800-603-4996
								</span>
								<span
									className={
										"text-[rgba(0,0,0,.5)] text-[13px] mr-[14px] uderline"
									}
								>
									orders@hydrafacial.com
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
