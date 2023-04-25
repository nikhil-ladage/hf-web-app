import { FC } from "react";
import Button from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";
import { ButtonTabProps } from "./button-tabs.types";

const ButtonTabs: FC<ButtonTabProps> = ({ options, ...rest }) => {
	if (!options.length) return null;
	return (
		<MUIButtonGroup {...rest}>
			{options.map(({ value, label }) => (
				<Button value={value} key={value}>
					{label}
				</Button>
			))}
		</MUIButtonGroup>
	);
};

export default ButtonTabs;
