"use client";
import { AnimatePresence, LayoutGroup, motion, wrap } from "framer-motion";
import type { FC } from "react";
import React, { useRef, useState } from "react";

const xOffset = 100;
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? xOffset : -xOffset,
    opacity: 0,
  }),
  active: {
    x: 0,
    opacity: 1,
    transition: { ease: "linear", duration: 2, x: { duration: 1 } },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -xOffset : xOffset,
    opacity: 0,
  }),
};

type Props = {
  currentIndex: number;
  setCurrentImage: (newSlide: number, newDirection?: number) => void;
  direction?: number;
  images: string[];
};

const Pagination: FC<Props> = ({ currentIndex, setCurrentImage, images }) => {
  // Wrap all the pagination Indicators
  // with AnimateSharedPresence
  // so we can detect when Indicators
  // with a layoutId are removed/added
  return (
    <LayoutGroup>
      <div className="Indicators">
        {images.map((_, i) => (
          <Indicator
            key={i}
            onClick={() => setCurrentImage(i)}
            isSelected={i === currentIndex}
          />
        ))}
      </div>
    </LayoutGroup>
  );
};

type IndicatorProps = {
  isSelected: boolean;
  onClick: () => void;
};

const Indicator: FC<IndicatorProps> = ({ isSelected, onClick }) => {
  return (
    <div
      className="Indicator-container"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={() => {}}
    >
      <div className="Indicator">
        {isSelected && (
          // By setting layoutId, when this component
          // is removed and a new one is added elsewhere,
          // the new component will animate out from the old one.
          <motion.div className="Indicator-highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
};

const Slider: FC<Props> = ({
  currentIndex,
  setCurrentImage,
  direction,
  images,
}) => {
  /* Add and remove pages from the array to checkout
     how the gestures and pagination animations are
     fully data and layout-driven. */
  const hasPaginated = useRef(false);

  type OffSet = {
    offset: {
      x: number;
      y: number;
    };
  };

  const detectPaginationGesture = (
    e: MouseEvent | TouchEvent | PointerEvent,
    { offset }: OffSet,
  ) => {
    if (hasPaginated.current) return;
    let newPage = currentIndex;
    const threshold = xOffset / 2;

    if (offset.x < -threshold) {
      // If user is dragging left, go forward a page
      newPage = currentIndex + 1;
    } else if (offset.x > threshold) {
      // Else if the user is dragging right,
      // go backwards a page
      newPage = currentIndex - 1;
    }

    if (newPage !== currentIndex) {
      hasPaginated.current = true;
      // Wrap the page index to within the
      // permitted page range
      newPage = wrap(0, images.length, newPage);
      setCurrentImage(newPage, offset.x < 0 ? 1 : -1);
    }
  };

  const next = () => {
    let newSlide = currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1;
    newSlide = wrap(0, images.length, newSlide);
    setCurrentImage(
      newSlide,
      currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const prev = () => {
    let newSlide = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    newSlide = wrap(0, images.length, newSlide);
    setCurrentImage(
      newSlide,
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1,
    );
  };

  return (
    <AnimatePresence
      // This will be used for components to resolve
      // exit variants. It's necessary as removed
      // components won't rerender with
      // the latest state (as they've been removed)
      custom={direction}
    >
      <button onClick={prev} className="prev">
        &#10094;
      </button>
      <button onClick={next} className="next">
        &#10095;
      </button>
      <div className=" d-flex justify-content-center ">
        <motion.img
          className="slide-image"
          key={currentIndex}
          data-page={currentIndex}
          variants={variants}
          initial="enter"
          animate="active"
          exit="exit"
          drag="x"
          onDrag={detectPaginationGesture}
          onDragStart={() => (hasPaginated.current = false)}
          onDragEnd={() => (hasPaginated.current = true)}
          // Snap the component back to the center
          // if it hasn't paginated
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          // This will be used for components to resolve all
          // other variants, in this case initial and animate.
          custom={direction}
          src={`/assets/${images[currentIndex]}`}
        />
      </div>
    </AnimatePresence>
  );
};

const SliderContainer = (): React.ReactNode => {
  /* We keep track of the pagination direction as well as
   * current page, this way we can dynamically generate different
   * animations depending on the direction of travel */
  const [[currentIndex, direction], setCurrentSlide] = useState([0, 0]);

  const setCurrentImage = (newSlide: number, newDirection?: number) => {
    if (!newDirection) newDirection = newSlide - currentIndex;
    setCurrentSlide([newSlide, newDirection]);
  };

  const images: string[] = ["1.jpg", "2.jpg", "3.jpg"];

  return (
    <div className="slider-container d-flex flex-column justify-content-between">
      <Slider
        currentIndex={currentIndex}
        direction={direction}
        setCurrentImage={setCurrentImage}
        images={images}
      />
      <Pagination
        currentIndex={currentIndex}
        setCurrentImage={setCurrentImage}
        images={images}
      />
    </div>
  );
};

export default SliderContainer;
