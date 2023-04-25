import { FC } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import MUIRadioGroup from "@mui/material/RadioGroup";
import Radio from "../radio";
import { RadioGroupProps } from "./radio-group.types";

const RadioGroup: FC<RadioGroupProps> = ({ options, ...rest }) => {
	if (!options.length) return null;
	return (
		<MUIRadioGroup {...rest}>
			{options.map(({ value, label }) => (
				<FormControlLabel
					value={value}
					key={value}
					label={label}
					control={<Radio />}
				/>
			))}
		</MUIRadioGroup>
	);
};

export default RadioGroup;
