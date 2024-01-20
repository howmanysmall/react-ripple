//!native
//!optimize 2

import Ripple, { type MotionGoal } from "@rbxts/ripple";
import GoalType from "./goal-type";
import type { Binding } from "@rbxts/roact";
import useMotion from "./use-motion";
import getBinding from "./get-binding";

type GoalTuple<T extends MotionGoal> = [binding: Binding<T>, motion: Ripple.Motion<T>];
type AnyOptions = Ripple.LinearOptions | Ripple.SpringOptions | Ripple.TweenOptions;

const GOALS_TO_FUNCTIONS: { [goalType in GoalType]: Callback } = {
	[GoalType.Immediate]: Ripple.immediate,
	[GoalType.Linear]: Ripple.linear,
	[GoalType.Spring]: Ripple.spring,
	[GoalType.Tween]: Ripple.tween,
};

/**
 * Uses a goal. I don't really know what this is for.
 * @param goal
 * @param value
 * @param motionOptions
 */
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Immediate,
	value: T,
	motionOptions?: Ripple.MotionOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Linear,
	value: T,
	motionOptions?: Ripple.MotionOptions,
	linearOptions?: Ripple.LinearOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Spring,
	value: T,
	motionOptions?: Ripple.MotionOptions,
	springOptions?: Ripple.SpringOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Tween,
	value: T,
	motionOptions?: Ripple.MotionOptions,
	tweenOptions?: Ripple.TweenOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType,
	value: T,
	motionOptions?: Ripple.MotionOptions,
	goalOptions?: AnyOptions,
) {
	const motion = useMotion(value, motionOptions);
	motion.to(GOALS_TO_FUNCTIONS[goal](value, goalOptions));
	return $tuple(getBinding(motion), motion);
}
