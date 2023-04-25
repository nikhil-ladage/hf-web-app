import { FC } from "react";
import MUIRadio, { RadioProps } from "@mui/material/Radio";

const Radio: FC<RadioProps> = ({ ...props }) => {
	return <MUIRadio {...props} />;
};

export default Radio;
