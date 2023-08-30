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

export const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const routeVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 0.5, transition },
  },
};
