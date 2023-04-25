import { ReactElement, MouseEventHandler } from "react";
import { DialogProps } from "@mui/material/Dialog";
export type ModalProps = {
	onClose: DialogProps["onClose"];
	onCancel: MouseEventHandler<HTMLButtonElement> | undefined;
	onOk: MouseEventHandler<HTMLButtonElement> | undefined;
	open: boolean;
	scroll?: "body" | "paper";
	title: string;
	children: ReactElement;
};
