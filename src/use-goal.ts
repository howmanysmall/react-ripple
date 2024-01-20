//!native
//!optimize 2

import GoalType from "./goal-type";
import Ripple, {
	type MotionOptions,
	type MotionGoal,
	type LinearOptions,
	type SpringOptions,
	type TweenOptions,
} from "@rbxts/ripple";
import Roact from "@rbxts/roact";
import getBinding from "./get-binding";
import useMotion from "./use-motion";

type GoalTuple<T extends MotionGoal> = [binding: Roact.Binding<T>, motion: Ripple.Motion<T>];
type AnyOptions = LinearOptions | SpringOptions | TweenOptions;

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
	motionOptions?: MotionOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Linear,
	value: T,
	motionOptions?: MotionOptions,
	linearOptions?: LinearOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Spring,
	value: T,
	motionOptions?: MotionOptions,
	springOptions?: SpringOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType.Tween,
	value: T,
	motionOptions?: MotionOptions,
	tweenOptions?: TweenOptions,
): LuaTuple<GoalTuple<T>>;
export default function useGoal<T extends MotionGoal>(
	goal: GoalType,
	value: T,
	motionOptions?: MotionOptions,
	goalOptions?: AnyOptions,
) {
	const motion = useMotion(value, motionOptions);
	motion.to(GOALS_TO_FUNCTIONS[goal](value, goalOptions));
	return $tuple(getBinding(motion), motion);
}
