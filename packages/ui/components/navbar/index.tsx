import { INavbarProps } from "./Navbar.types";

const Navbar = (props: INavbarProps) => {
	const { isFixed, customClass, children } = props;
	const navbarPositionClass = isFixed ? "fixed top-0 left-0 " : "";
	return (
		<div
			className={`${navbarPositionClass} ${customClass} p-4 w-full z-50`}
		>
			{children}
		</div>
	);
};

export default Navbar;
