//!nocheck
//!nolint
//!optimize 2

import { useBinding, useEffect, useRef } from "@rbxts/react";
import type { Motion, MotionGoal } from "@rbxts/ripple";

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
export function useMotionBinding<T extends MotionGoal>(motion: Motion<T>) {
	const motionReference = useRef(motion);
	const [binding, setBinding] = useBinding(motionReference.current.get());

	function eventEffect() {
		const currentMotion = motionReference.current;
		const cleanupOnStep = currentMotion.onStep(setBinding);
		const cleanupOnComplete = currentMotion.onComplete(setBinding);

		return () => {
			cleanupOnStep();
			cleanupOnComplete();
			currentMotion.destroy();
		};
	}
	useEffect(eventEffect, []);

	return $tuple(binding, motionReference.current);
}
