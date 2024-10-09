//!nocheck
//!nolint
//!optimize 2

import Symbol from "./symbol";
import React from "@rbxts/react";
import type { Motion, MotionGoal } from "@rbxts/ripple";

const AssignedBinding = Symbol("AssignedBinding");

/**
 * Gets a binding from a motion. Creates it if it doesn't exist.
 * @param motion
 * @returns
 */
export function getBinding<T extends MotionGoal>(motion: Motion<T>) {
	if (AssignedBinding in motion) return (motion as unknown as { [key: symbol]: React.Binding<T> })[AssignedBinding];

	const [binding, setBinding] = React.createBinding(motion.get());
	motion.onStep(setBinding);
	(motion as unknown as { [key: symbol]: React.Binding<T> })[AssignedBinding] = binding;
	return binding;
}
