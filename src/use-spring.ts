//!nocheck
//!nolint
//!optimize 2

import { GoalType } from "./goal-type";
import { useGoal } from "./use-goal";
import type { MotionGoal, MotionOptions, SpringOptions } from "@rbxts/ripple";

/**
 * Syntax sugar for creating a spring motion.
 * @param value
 * @param motionOptions
 * @param springOptions
 * @returns
 */
export function useSpring<T extends MotionGoal>(
	value: T,
	motionOptions?: MotionOptions,
	springOptions?: SpringOptions,
) {
	return useGoal(GoalType.Spring, value, motionOptions, springOptions);
}
