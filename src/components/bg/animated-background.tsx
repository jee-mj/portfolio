import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

class ImagePreloader {
  private loadedImages: Set<number>;
  constructor() {
    this.loadedImages = new Set();
  }

  preload(imageIndex: number) {
    if (this.loadedImages.has(imageIndex)) return;

    const img = new Image();
    img.src = `./assets/background/bg-${imageIndex}.webp`;
    img.onload = () => this.loadedImages.add(imageIndex);
  }
}
type ImageTransitionProps = {
  imageIndex: number;
  transitionDuration: number;
};

const ImageTransition: React.FC<ImageTransitionProps> = ({
  imageIndex,
  transitionDuration,
}) => (
  <motion.div
    key={imageIndex}
    className="absolute top-4 left-4 right-4 bottom-4 w-[calc(100vw-2rem)] h-[calc-100vh-2rem] bg-cover bg-center"
    style={{
      backgroundImage: `url('./assets/background/bg-${imageIndex}.webp')`,
    }}
    initial={{ opacity: 0, filter: "blur(0)" }}
    animate={{ opacity: 1, filter: "blur(0)" }}
    exit={{ opacity: 0, filter: "blur(1rem)" }}
    transition={{ duration: transitionDuration + transitionDuration + 8 }}
  />
);

const AnimatedBackground = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [forward, setForward] = useState(true);
  const totalImages = 8;
  const transitionDuration = 6;
  const preloader = useRef(new ImagePreloader());

  useEffect(() => {
    preloader.current.preload(currentImage);
    preloader.current.preload(nextImage);

    const interval = setInterval(() => {
      setNextImage((prevNextImage) => {
        let newNextImage = prevNextImage;

        setForward((prevForward) => {
          let newForward = prevForward;

          if (prevForward) {
            if (prevNextImage < totalImages - 1) {
              newNextImage = prevNextImage + 1;
              // console.log(
              //   `previous_image: ${prevNextImage} next_image: ${newNextImage}`
              // );
            } else {
              newNextImage = prevNextImage - 1;
              // console.log(
              //   `previous_image: ${prevNextImage} next_image: ${newNextImage}`
              // );
              newForward = false;
              // console.log(`direction: ${newForward ? "forward" : "backward"}`);
            }
          } else {
            if (prevNextImage > 0) {
              newNextImage = prevNextImage - 1;
              // console.log(
              //   `previous_image: ${prevNextImage} next_image: ${newNextImage}`
              // );
            } else {
              newNextImage = prevNextImage + 1;
              // console.log(
              //   `previous_image: ${prevNextImage} next_image: ${newNextImage}`
              // );
              newForward = true;
              // console.log(`direction: ${newForward ? "forward" : "backward"}`);
            }
          }
          setCurrentImage(prevNextImage);
          return newForward;
        });

        return newNextImage;
      });
    }, 18000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bg-tertiary top-0 left-0 right-0 bottom-0 w-full h-full z-0">
      <AnimatePresence>
        <ImageTransition
          key={`current-${currentImage}`}
          imageIndex={currentImage}
          transitionDuration={transitionDuration}
        />
        {nextImage <= totalImages && nextImage >= 1 && (
          <ImageTransition
            key={`next-${nextImage}`}
            imageIndex={nextImage}
            transitionDuration={transitionDuration}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedBackground;
