//!nonstrict
//!optimize 2

import GoalType from "./goal-type";
import type { MotionGoal, MotionOptions, SpringOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating a spring motion.
 * @param value
 * @param motionOptions
 * @param springOptions
 * @returns
 */
export default function useSpring<T extends MotionGoal>(
	value: T,
	motionOptions?: MotionOptions,
	springOptions?: SpringOptions,
) {
	return useGoal(GoalType.Spring, value, motionOptions, springOptions);
}
