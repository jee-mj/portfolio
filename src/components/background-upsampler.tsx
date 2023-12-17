import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const BackgroundUpsampler = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [forward, setForward] = useState(true); // State to track direction
  const totalImages = 5;
  const transitionDuration = .5;
  const preloadedImagesRef = useRef(new Set());

  const preloadImage = (imageIndex) => {
    if (preloadedImagesRef.current.has(imageIndex)) {
      // Image already preloaded, skip loading
      return;
    }

    const img = new Image();
    img.src = `./assets/background/bg-${imageIndex}.jpeg`;
    img.onload = () => {
      setIsLoaded(true);
      preloadedImagesRef.current.add(imageIndex);
    };
  };

  useEffect(() => {
    preloadImage(nextImage);

    const interval = setInterval(() => {
      if (isLoaded) {
        let newNextImage = nextImage;

        // Update the direction if at the boundaries
        if (nextImage >= totalImages && forward) {
          setForward(false);
        } else if (nextImage <= 0 && !forward) {
          setForward(true);
        }

        // Update the nextImage based on the direction
        if (forward) {
          newNextImage = (nextImage + 1 <= totalImages) ? nextImage + 1 : nextImage - 1;
        } else {
          newNextImage = (nextImage - 1 >= 0) ? nextImage - 1 : nextImage + 1;
        }

        setCurrentImage(nextImage);
        setNextImage(newNextImage);
        setIsLoaded(false);

        preloadImage(newNextImage);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isLoaded, nextImage, forward]);


  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
      <motion.div
        key={currentImage}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('./assets/background/bg-${currentImage}.jpeg')`,
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: transitionDuration, delay: transitionDuration }}
      />
      {nextImage <= totalImages && nextImage >= 1 && (
        <motion.div
          key={nextImage}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('./assets/background/bg-${nextImage}.jpeg')`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: transitionDuration }}
        />
      )}
    </div>
  );
};

export default BackgroundUpsampler;
