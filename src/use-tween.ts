//!native
//!optimize 2

import type { TweenOptions, MotionGoal, MotionOptions } from "@rbxts/ripple";
import useGoal from "./use-goal";
import GoalType from "./goal-type";

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
