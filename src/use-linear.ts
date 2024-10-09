//!nocheck
//!nolint
//!optimize 2

import { GoalType } from "./goal-type";
import { useGoal } from "./use-goal";
import type { LinearOptions, MotionGoal, MotionOptions } from "@rbxts/ripple";

/**
 * Syntax sugar for creating a linear motion.
 * @param value
 * @param motionOptions
 * @param linearOptions
 * @returns
 */
export function useLinear<T extends MotionGoal>(
	value: T,
	motionOptions?: MotionOptions,
	linearOptions?: LinearOptions,
) {
	return useGoal(GoalType.Linear, value, motionOptions, linearOptions);
}
