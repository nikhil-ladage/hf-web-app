import { ReactNode } from "react";
import { SelectProps as MUISelectProps } from "@mui/material/Select";

export type SelectProps = MUISelectProps & {
	options: { value: any; label: ReactNode }[];
};
