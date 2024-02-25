//!native
//!nonstrict
//!optimize 2

import GoalType from "./goal-type";
import Ripple from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating an immediate motion.
 * @param value
 * @param motionOptions
 * @returns
 */
export default function useImmediate<T extends Ripple.MotionGoal>(value: T, motionOptions?: Ripple.MotionOptions) {
	return useGoal(GoalType.Immediate, value, motionOptions);
}
