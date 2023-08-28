type Direction = "left" | "right" | "up" | "down";
type AnimationType = "linear" | "spring" | "ease" | "tween";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const slideIn = (
  direction: Direction,
  type: AnimationType,
  delay: number,
  duration: number,
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
