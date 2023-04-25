import { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ModalProps } from "./modal.types";

const Modal: FC<ModalProps> = (props) => {
	const {
		onClose,
		open,
		scroll = "paper",
		title,
		onCancel,
		onOk,
		children,
	} = props;
	return (
		<Dialog open={open} onClose={onClose} scroll={scroll} fullWidth>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent dividers>{children}</DialogContent>
			<DialogActions>
				<Button onClick={onCancel}>Cancel</Button>
				<Button onClick={onOk}>Ok</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
