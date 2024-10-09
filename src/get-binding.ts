import Ripple from "@rbxts/ripple";
import Symbol from "./symbol";
import React from "@rbxts/react";

const AssignedBinding = Symbol("AssignedBinding");

/**
 * Gets a binding from a motion. Creates it if it doesn't exist.
 * @param motion
 * @returns
 */
export default function getBinding<T extends Ripple.MotionGoal>(motion: Ripple.Motion<T>) {
	if (AssignedBinding in motion) return (motion as unknown as { [key: symbol]: React.Binding<T> })[AssignedBinding];

	const [binding, setBinding] = React.createBinding(motion.get());
	motion.onStep(setBinding);
	(motion as unknown as { [key: symbol]: React.Binding<T> })[AssignedBinding] = binding;
	return binding;
}
