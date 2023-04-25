import { ReactNode } from "react";
import { RadioGroupProps as MUIRadioGroupProps } from "@mui/material/RadioGroup";

export type RadioGroupProps = MUIRadioGroupProps & {
	options: { value: any; label: ReactNode }[];
};
