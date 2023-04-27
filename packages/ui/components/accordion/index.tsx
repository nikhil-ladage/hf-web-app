import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import MUIAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { IAccordionProps } from "./accordion.types";

const Accordion: FC<IAccordionProps> = (props) => {
	const { title, children, ...rest } = props;
	return (
		<MUIAccordion {...rest} disableGutters elevation={0} square {...props}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className="font-aktivBold">{title}</Typography>
			</AccordionSummary>
			<AccordionDetails >{children}</AccordionDetails>
		</MUIAccordion>
	);
};

export default Accordion;
