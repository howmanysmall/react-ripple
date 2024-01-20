//!native
//!optimize 2

import type { LinearOptions, MotionGoal, MotionOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";
import GoalType from "./goal-type";

/**
 * Syntax sugar for creating a linear motion.
 * @param value
 * @param motionOptions
 * @param linearOptions
 * @returns
 */
export default function useLinear<T extends MotionGoal>(
	value: T,
	motionOptions?: MotionOptions,
	linearOptions?: LinearOptions,
) {
	return useGoal(GoalType.Linear, value, motionOptions, linearOptions);
}
