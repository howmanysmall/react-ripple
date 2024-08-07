//!nonstrict
//!optimize 2

import GoalType from "./goal-type";
import type { MotionGoal, MotionOptions, LinearOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";

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
