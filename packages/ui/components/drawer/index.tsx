import TransitionWrapper from "../transitionWrapper";
import { IDrawerProps } from "./drawer.types";
import "./drawer.css";

const Drawer = (props: IDrawerProps) => {
	const { children, isOpen } = props;

	return (
		<>
			<TransitionWrapper open={isOpen} animationClassName="drawer">
				<div className="drawer">
					<div>{children}</div>
				</div>
			</TransitionWrapper>
		</>
	);
};

export default Drawer;
