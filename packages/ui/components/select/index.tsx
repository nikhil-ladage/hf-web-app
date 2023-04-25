import { FC } from "react";
import MUISelect from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectProps } from "./select.types";

const Select: FC<SelectProps> = ({ options, ...rest }) => {
	if (!options.length) return null;
	return (
		<MUISelect {...rest}>
			{options.map(({ value, label }) => (
				<MenuItem value={value} key={value}>
					{label}
				</MenuItem>
			))}
		</MUISelect>
	);
};

export default Select;
