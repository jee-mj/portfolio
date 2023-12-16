import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundUpsampler = () => {
  const [currentImage, setCurrentImage] = useState(2);
  const [nextImage, setNextImage] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  const totalImages = 50;
  const transitionDuration = 0.777;

  const preloadImage = (imageIndex) => {
    const img = new Image();
    img.src = `/portfolio/assets/bg-${imageIndex}.jpeg`;
    img.onload = () => setIsLoaded(true);
  };

  useEffect(() => {
    preloadImage(nextImage);

    const interval = setInterval(() => {
      if (isLoaded) {
        const newCurrentImage = nextImage;
        const newNextImage =
          nextImage < totalImages ? nextImage + 1 : nextImage;

        setCurrentImage(newCurrentImage);
        setNextImage(newNextImage);
        setIsLoaded(false);

        preloadImage(newNextImage);
      }
    }, 777);

    return () => clearInterval(interval);
  }, [isLoaded, nextImage, currentImage]);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
      <motion.div
        key={currentImage}
        className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('/portfolio/assets/bg-${currentImage}.jpeg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: transitionDuration, delay: transitionDuration }}
      />
      {nextImage <= totalImages && (
        <motion.div
          key={nextImage}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/portfolio/assets/bg-${nextImage}.jpeg')`,
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
