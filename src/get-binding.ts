//!native
//!optimize 2

import Symbol from "./symbol";
import { createBinding, type Binding } from "@rbxts/roact";
import Ripple, { type MotionGoal } from "@rbxts/ripple";

const AssignedBinding = Symbol("AssignedBinding");

/**
 * Gets a binding from a motion. Creates it if it doesn't exist.
 * @param motion
 * @returns
 */
export default function getBinding<T extends MotionGoal>(motion: Ripple.Motion<T>) {
	if (AssignedBinding in motion) return (motion as unknown as { [key: symbol]: Binding<T> })[AssignedBinding];

	const [binding, setBinding] = createBinding(motion.get());
	motion.onStep(setBinding);
	(motion as unknown as { [key: symbol]: Binding<T> })[AssignedBinding] = binding;
	return binding;
}
