import { CSSTransition } from "react-transition-group";
import { TRANSITION_TIMEOUT } from "../common/constants";
import { ITransitionWrapperProps } from "./transitionWrapper.types";

const TransitionWrapper = (props: ITransitionWrapperProps) => {
	const {
		children,
		open = false,
		timeout = TRANSITION_TIMEOUT,
		animationClassName = "alert",
	} = props;
	return (
		<CSSTransition
			in={open}
			timeout={timeout}
			classNames={animationClassName}
			unmountOnExit
		>
			{children}
		</CSSTransition>
	);
};
export default TransitionWrapper;
