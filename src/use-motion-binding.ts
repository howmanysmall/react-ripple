//!nonstrict
//!optimize 2

import type { Motion, MotionGoal } from "@rbxts/ripple";
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
export default function useMotionBinding<T extends MotionGoal>(motion: Motion<T>) {
	const motionReference = useRef(motion);
	const [binding, setBinding] = useBinding(motionReference.current.get());

	function eventEffect() {
		const currentMotion = motionReference.current;
		const cleanup0 = currentMotion.onStep(setBinding);
		const cleanup1 = currentMotion.onComplete(setBinding);

		return () => {
			cleanup0();
			cleanup1();
			currentMotion.destroy();
		};
	}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(eventEffect, [motionReference.current, setBinding]);

	return $tuple(binding, motionReference.current);
}
