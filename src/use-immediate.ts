//!nocheck
//!nolint
//!optimize 2

import { GoalType } from "./goal-type";
import { useGoal } from "./use-goal";
import type { MotionGoal, MotionOptions } from "@rbxts/ripple";

/**
 * Syntax sugar for creating an immediate motion.
 * @param value
 * @param motionOptions
 * @returns
 */
export function useImmediate<T extends MotionGoal>(value: T, motionOptions?: MotionOptions) {
	return useGoal(GoalType.Immediate, value, motionOptions);
}
