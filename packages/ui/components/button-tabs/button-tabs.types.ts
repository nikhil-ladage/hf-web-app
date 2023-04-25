import { ReactNode } from "react";
import { ButtonGroupProps } from "@mui/material/ButtonGroup";

export type ButtonTabProps = ButtonGroupProps & {
	options: { value: any; label: ReactNode }[];
};
