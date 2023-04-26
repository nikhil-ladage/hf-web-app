import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

interface IContainerProps extends PropsWithChildren {
	defaultBgColor?: string | "" | undefined;
}

export const Container: React.FC<IContainerProps> = ({
	defaultBgColor = "bg-[#F3F8FD]",
	children,
}) => {
	return (
		<Box
			className={
				`${defaultBgColor} 
			p-0 m-auto text-[#000] max-w-[1440px]
            xsmall:px-[20px] xsmall:py-[40px]
            small:px-[30px] small:py-[40px]
            medium:pt-[90px] medium:pb-[190px] medium:px-[165px] 
                  `}
		>
			{children}
		</Box>
	);
};
