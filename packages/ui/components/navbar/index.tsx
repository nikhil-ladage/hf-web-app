import { INavbarProps } from "./Navbar.types";

export const Navbar = (props: INavbarProps) => {
	const { isFixed, customClass, children } = props;
	const navbarPositionClass = isFixed ? "fixed " : "";
	return (
		<div className={`${navbarPositionClass} ${customClass} w-full z-50`}>
			{children}
		</div>
	);
};
