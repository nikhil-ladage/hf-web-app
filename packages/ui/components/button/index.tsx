import { FC } from "react";
import MUIButton from "@mui/material/Button";
import { IButtonProps } from "./button.types";

export const Button: FC<IButtonProps> = (props) => {
	const {
		children,
		className,
		disabled = false,
		disableStyle,
		...rest
	} = props;
	return (
		<MUIButton
			{...rest}
			className={`${className} ${disabled && disableStyle}`}
		>
			{children}
		</MUIButton>
	);
};

