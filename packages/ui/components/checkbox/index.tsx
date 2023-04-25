import { FC } from "react";
import MUICheckbox, { CheckboxProps } from "@mui/material/Checkbox";

const Checkbox: FC<CheckboxProps> = ({ ...props }) => {
	return <MUICheckbox {...props} />;
};

export default Checkbox;
