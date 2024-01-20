//!native
//!optimize 2

import Ripple from "@rbxts/ripple";
import { useEffect, useRef } from "@rbxts/roact";

/**
 * Creates a motion and returns it.
 * @param initialValue
 * @param motionOptions
 * @returns
 */
export default function useMotion<T extends Ripple.MotionGoal>(initialValue: T, motionOptions?: Ripple.MotionOptions) {
	const motion = useRef(Ripple.createMotion(initialValue, motionOptions)).current;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => () => motion.destroy(), []);
	return motion;
}
