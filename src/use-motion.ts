//!nocheck
//!nolint
//!optimize 2

const RunService = game.GetService("RunService");
import { useEffect, useMemo } from "@rbxts/react";
import Ripple from "@rbxts/ripple";

const DEFAULT_OPTIONS: Ripple.MotionOptions = {
	heartbeat: RunService.PostSimulation,
	start: true,
};

/**
 * Creates a motion and returns it.
 * @param initialValue
 * @param motionOptions
 * @returns
 */
export function useMotion<T extends Ripple.MotionGoal>(initialValue: T, motionOptions?: Ripple.MotionOptions) {
	const motion = useMemo(
		() => Ripple.createMotion(initialValue, { ...DEFAULT_OPTIONS, ...motionOptions }),
		[initialValue, motionOptions],
	);
	function destroyMotionEffect() {
		return () => motion.destroy();
	}
	// eslint-disable-next-line react-roblox-hooks/exhaustive-deps
	useEffect(destroyMotionEffect, []);

	return motion;
}
