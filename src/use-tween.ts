//!native
//!nonstrict
//!optimize 2

import GoalType from "./goal-type";
import Ripple from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating a tween motion.
 * @param value
 * @param motionOptions
 * @param tweenOptions
 * @returns
 */
export default function useTween<T extends Ripple.MotionGoal>(
	value: T,
	motionOptions?: Ripple.MotionOptions,
	tweenOptions?: Ripple.TweenOptions,
) {
	return useGoal(GoalType.Tween, value, motionOptions, tweenOptions);
}
