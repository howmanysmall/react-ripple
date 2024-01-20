//!native
//!optimize 2

import type { MotionGoal, MotionOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";
import GoalType from "./goal-type";

/**
 * Syntax sugar for creating an immediate motion.
 * @param value
 * @param motionOptions
 * @returns
 */
export default function useImmediate<T extends MotionGoal>(value: T, motionOptions?: MotionOptions) {
	return useGoal(GoalType.Immediate, value, motionOptions);
}
