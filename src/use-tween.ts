//!nonstrict
//!optimize 2

import GoalType from "./goal-type";
import type { MotionGoal, MotionOptions, TweenOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating a tween motion.
 * @param value
 * @param motionOptions
 * @param tweenOptions
 * @returns
 */
export default function useTween<T extends MotionGoal>(
	value: T,
	motionOptions?: MotionOptions,
	tweenOptions?: TweenOptions,
) {
	return useGoal(GoalType.Tween, value, motionOptions, tweenOptions);
}
