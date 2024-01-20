//!native
//!optimize 2

import GoalType from "./goal-type";
import Ripple from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating a spring motion.
 * @param value
 * @param motionOptions
 * @param springOptions
 * @returns
 */
export default function useSpring<T extends Ripple.MotionGoal>(
	value: T,
	motionOptions?: Ripple.MotionOptions,
	springOptions?: Ripple.SpringOptions,
) {
	return useGoal(GoalType.Spring, value, motionOptions, springOptions);
}
