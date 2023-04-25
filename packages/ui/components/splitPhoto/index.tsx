import Grid from "@mui/material/Grid";

export const SplitPhoto = ({ num }: { num: 1 | 2 }) => {
	switch (num) {
		case 1:
			return (
				<Grid
					container
					className="xsmall:flex-row-reverse relative box-border flex w-full flex-col"
				>
					<div className="bg-white block h-full absolute w-[calc(100%_-_115px)] z-0 left-0 right-[115px] top-0 hidden small:block"></div>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						xl={6}
						className="z-[1] xsmall:basis-6/12 grow-0 xsmall:max-w-[50%] box-border m-0 w-full"
					>
						<img
							src="https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt501b9c052bd8d06b/637f181a34bc7f10b6f3ae24/client_homepage_results.jpg"
							alt="client_homepage_results.jpg"
							className="relative block max-w-full xsmall:top-[100px]"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						xl={6}
						className="z-[1] min-h-[585px] xsmall:basis-6/12 grow-0 width-full xsmall:max-w-[50%] box-border items-start flex flex-col justify-center ml-auto m-0 pt-[40px] px-[20px]"
					>
						<div className="ml-auto small:pl-[60px] small:pr-[65px] small:pt-[92px] small:pb-[50px]">
							<h2 className="text-[35px] small:text-5xl font-medium leading-[61px]">
								Boost Your Skin. Boost Your Confidence.
							</h2>
							<div className="font-light small:text-2xl tracking-[0] leading-8 pt-5 text-[20px]">
								Add a concentrated booster to your treatment to target your specific
								skin concerns and achieve even better results.
							</div>
							<div className="flex flex-row justify-center">
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
									explore boosters
									<span className="overflow-hidden pointer-events-none absolute z-0 rounded-[inherit] inset-0"></span>
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			);
		//xsmall:flex-row-reverse relative box-border flex w-full flex-col
		case 2:
			return (
				<Grid container className="relative box-border flex w-full flex-col xsmall:flex-row">
					<div className="bg-white block h-full absolute w-[calc(100%_-_115px)] z-0 left-[115px] right-0 top-0 hidden small:block"></div>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						xl={6}
						className="z-[1] xsmall:basis-6/12 grow-0 xsmall:max-w-[50%] box-border m-0 w-full"
					>
						<img
							src="https://images.contentstack.io/v3/assets/blt504d36ed00347088/blt874a50c2cc7252ff/637f18198db6e810ab77c55e/Rectangle_460_(1).jpg"
							alt="Rectangle_460_(1).jpg"
							className="relative block max-w-full xsmall:top-[100px]"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sm={12}
						md={6}
						lg={6}
						xl={6}
						className="z-[1] min-h-[585px] xsmall:basis-6/12 grow-0 xsmall:max-w-[50%] w-full box-border items-start flex flex-col justify-center ml-auto m-0 pt-[40px] px-[20px]"
					>
						<div className="ml-auto small:pl-[60px] small:pr-[65px] small:pt-[92px] small:pb-[50px]">
							<h2 className="small:text-5xl font-medium leading-[61px] text-[35px]">
								Interested in Becoming a Provider?
							</h2>
							<div className="font-light small:text-2xl tracking-[0] leading-8 pt-5 text-[20px]">
								Discover more about our devices, treatments,
								and training and education opportunities-
								plus, all the ways a Hydrafacial device can
								transform your business.
							</div>
							<div className="flex flex-row justify-center">
								<a
									className="whitespace-normal inline-flex items-center justify-center relative box-border cursor-pointer select-none align-middle appearance-none bg-[initial] border text-[#147bd1] text-xl font-medium tracking-wider leading-[26px] uppercase no-underline min-w-[64px] mt-[30px] m-0 px-[61.5px] py-[18px] rounded-none border-solid border-[#147bd1]"
									tabIndex={0}
									href="/enhancements/boosters/"
								>
									find out more
									<span className="overflow-hidden pointer-events-none absolute z-0 rounded-[inherit] inset-0"></span>
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			);
		default:
			return <></>;
	}
};
