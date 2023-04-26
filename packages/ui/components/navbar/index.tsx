import { INavbarProps } from "./Navbar.types";

export const Navbar = (props: INavbarProps) => {
	const { isFixed, customClass, children, rootClass } = props;
	const navbarPositionClass = isFixed ? "fixed " : "";
	return (
		<div className={`${navbarPositionClass} ${rootClass} w-full z-50 flex flex-rox justify-center bg-white`}>
			<div className={`${customClass} max-w-[1440px] w-full`} >
				{children}
			</div>
		</div>
	);
};