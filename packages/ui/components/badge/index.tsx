import { FC } from "react";
import MUIChip, { ChipProps } from "@mui/material/Chip";

const Badge: FC<ChipProps> = ({ ...props }) => {
	return <MUIChip {...props} />;
};

export default Badge;
