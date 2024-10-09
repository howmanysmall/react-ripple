//!nocheck
//!nolint
//!optimize 2

import { GoalType } from "./goal-type";
import { useGoal } from "./use-goal";
import type { MotionGoal, MotionOptions, TweenOptions } from "@rbxts/ripple";

/**
 * Syntax sugar for creating a tween motion.
 * @param value
 * @param motionOptions
 * @param tweenOptions
 * @returns
 */
export function useTween<T extends MotionGoal>(value: T, motionOptions?: MotionOptions, tweenOptions?: TweenOptions) {
	return useGoal(GoalType.Tween, value, motionOptions, tweenOptions);
}
