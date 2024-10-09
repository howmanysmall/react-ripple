import { useRef, useEffect } from "@rbxts/react";
import Ripple from "@rbxts/ripple";

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
