//!nocheck
//!nolint
//!optimize 2

import { getBinding } from "./get-binding";
import { GoalType } from "./goal-type";
import { useMotion } from "./use-motion";
import type { Binding } from "@rbxts/react";
import Ripple, {
	type LinearOptions,
	type MotionGoal,
	type MotionOptions,
	type SpringOptions,
	type TweenOptions,
} from "@rbxts/ripple";

type GoalTuple<T extends MotionGoal> = [binding: Binding<T>, motion: Ripple.Motion<T>];
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
export function useGoal<T extends MotionGoal>(
	goal: GoalType.Immediate,
	value: T,
	motionOptions?: MotionOptions,
): LuaTuple<GoalTuple<T>>;
/**
 * Uses a goal. I don't really know what this is for.
 * @param goal
 * @param value
 * @param motionOptions
 * @param linearOptions
 */
export function useGoal<T extends MotionGoal>(
	goal: GoalType.Linear,
	value: T,
	motionOptions?: MotionOptions,
	linearOptions?: LinearOptions,
): LuaTuple<GoalTuple<T>>;
/**
 * Uses a goal. I don't really know what this is for.
 * @param goal
 * @param value
 * @param motionOptions
 * @param springOptions
 */
export function useGoal<T extends MotionGoal>(
	goal: GoalType.Spring,
	value: T,
	motionOptions?: MotionOptions,
	springOptions?: SpringOptions,
): LuaTuple<GoalTuple<T>>;
/**
 * Uses a goal. I don't really know what this is for.
 * @param goal
 * @param value
 * @param motionOptions
 * @param tweenOptions
 */
export function useGoal<T extends MotionGoal>(
	goal: GoalType.Tween,
	value: T,
	motionOptions?: MotionOptions,
	tweenOptions?: TweenOptions,
): LuaTuple<GoalTuple<T>>;
/**
 * Uses a goal. I don't really know what this is for.
 * @param goal
 * @param value
 * @param motionOptions
 * @param goalOptions
 */
export function useGoal<T extends MotionGoal>(
	goal: GoalType,
	value: T,
	motionOptions?: MotionOptions,
	goalOptions?: AnyOptions,
) {
	const motion = useMotion(value, motionOptions);
	motion.to(GOALS_TO_FUNCTIONS[goal](value, goalOptions));
	return $tuple(getBinding(motion), motion);
}
