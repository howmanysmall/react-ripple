//!native
//!optimize 2

import type { SpringOptions, MotionGoal, MotionOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";
import GoalType from "./goal-type";

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
