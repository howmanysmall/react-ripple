import GoalType from "./goal-type";
import Ripple from "@rbxts/ripple";
import useGoal from "./use-goal";

/**
 * Syntax sugar for creating a linear motion.
 * @param value
 * @param motionOptions
 * @param linearOptions
 * @returns
 */
export default function useLinear<T extends Ripple.MotionGoal>(
	value: T,
	motionOptions?: Ripple.MotionOptions,
	linearOptions?: Ripple.LinearOptions,
) {
	return useGoal(GoalType.Linear, value, motionOptions, linearOptions);
}
