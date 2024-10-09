import { useRef, useBinding, useEffect } from "@rbxts/react";
import Ripple from "@rbxts/ripple";

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

	useEffect(() => {
		const currentMotion = motionReference.current;
		const cleanup = currentMotion.onStep(setBinding);
		return () => {
			cleanup();
			currentMotion.destroy();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [motionReference.current, setBinding]);

	return $tuple(binding, motionReference.current);
}
