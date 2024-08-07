//!nonstrict
//!optimize 2

/**
 * The type of goal to use for a motion.
 */
export enum GoalType {
	/**
	 * An instant goal. The motion will immediately jump to the target value.
	 */
	Immediate = 0,
	// eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
	Instant = 0,

	/**
	 * A linear goal. The motion will move towards the target value at a constant rate.
	 */
	Linear = 1,

	/**
	 * A spring damped goal. The motion will move towards the target value using Hooke's law.
	 */
	Spring = 2,

	/**
	 * A tweened goal. The motion will move towards the target value using {@linkcode TweenService}.
	 */
	Tween = 3,
}

export default GoalType;
