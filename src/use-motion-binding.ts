//!native
//!nonstrict
//!optimize 2

import Ripple from "@rbxts/ripple";
import { useBinding, useEffect, useRef } from "@rbxts/react";

/**
 * The simplest way to use a motion and binding.
 *
 * @example
 * ```ts
 * const [binding, motion] = useMotionBinding(useMotion<number>(0));
 * useEffect(() => {
 * 	motion.spring(1);
 * }, []);
 * ```
 *
 * @param motion
 * @returns
 */
export default function useMotionBinding<T extends Ripple.MotionGoal>(motion: Ripple.Motion<T>) {
	const motionReference = useRef(motion);
	const [binding, setBinding] = useBinding(motionReference.current.get());

	function eventEffect() {
		const currentMotion = motionReference.current;
		const cleanup = currentMotion.onStep(setBinding);
		return () => {
			cleanup();
			currentMotion.destroy();
		};
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(eventEffect, [motionReference.current, setBinding]);

	return $tuple(binding, motionReference.current);
}
