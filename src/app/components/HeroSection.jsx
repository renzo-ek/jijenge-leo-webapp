"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [textHeights, setTextHeights] = useState([]);
  const textRefs = useRef([]);

  const texts = [
    "Jijenge Leo",
    "Build the physicality of your dreams",
    "Get jacked",
    "Diet and Train with experts now"
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();

    const tryAutoPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    tryAutoPlay();

    // Set up interval for carousel effect
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  // Measure text heights after initial render
  useEffect(() => {
    if (textRefs.current.length > 0) {
      const heights = textRefs.current.map(ref => {
        return ref ? ref.offsetHeight : 0;
      });
      setTextHeights(heights);
    }
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  // Get the maximum height to prevent layout shifts
  const maxTextHeight = textHeights.length > 0
    ? Math.max(...textHeights)
    : 0;

  const isLongText = texts[currentTextIndex].split(' ').length > 2;

  // Download Policies logic
  const handleDownloadClick = () => {
    const pdfUrl = '../docs/policies.pdf'; // Replace with your PDF's URL or path
    const fileName = 'Policies.pdf'; // Desired filename for the download

    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        const fileURL = window.URL.createObjectURL(blob);

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = fileURL;
        link.download = fileName;

        // Programmatically click the link to trigger download
        document.body.appendChild(link); // Append to body (optional, but ensures it's in DOM)
        link.click();

        // Clean up by revoking the object URL and removing the link
        document.body.removeChild(link);
        window.URL.revokeObjectURL(fileURL);
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
      });
  }

  return (
    <section className="relative lg:py-16 min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Image Fallback */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {!isVideoLoaded && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero_img.jpg')" }}
          ></div>
        )}

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onLoadedMetadata={handleVideoLoad}
          poster="/images/hero_img.jpg"
        >
          <source src="../videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className=" col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
              <br />
              <div
                className="relative overflow-visible flex items-center justify-center sm:justify-start"
                // style={{ height: maxTextHeight > 0 ? `${maxTextHeight}px` : 'auto' }}
                style={{ height: 40, width: '30%' }} // Ensure a minimum height to avoid layout shift on first load
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTextIndex}
                    ref={el => textRefs.current[currentTextIndex] = el}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bounce-text ${isLongText ? 'lg:w-[40%]' : 'w-full'
                      } text-center sm:text-center sm:relative sm: left-10 my-10`}
                    style={{
                      fontWeight: '800',
                      // display: 'inline-block',
                      fontFamily: 'monospace',
                      textShadow: '0 2px 10px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7)',
                      zIndex: 10, // Below navbar (typically z-index 50-100) but above other elements
                    }}
                  >
                    {texts[currentTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 place-self-center mt-8 lg:mt-0 relative z-10 sm:mt-10"
          >
            <div className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-2xl border-4 border-white/10">
              {/* Image with proper sizing and positioning */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/gifs/flex.gif"
                    alt="Fitness Transformation"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              {/* Text overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="text-white text-lg font-semibold bg-black/40 px-3 py-1 rounded-lg font-mono">
                  Fitness Transformation
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 sm:top-20 top-24">
              <p className="text-[#F1F1F1] text-base sm:text-lg top-10 mb-6 lg:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] relative z-10 font-mono">
                Your dream body is just a click away
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 relative z-10 sm:top-40 justify-center sm:justify-end">
                <Link
                  href="/#contact"
                  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Reach Out
                </Link>
                <Link
                  href="/"
                  className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white mt-3 sm:mt-0 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span onClick={handleDownloadClick} className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                    Get Our Policies
                  </span>
                </Link>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4 relative z-10 top-24 sm:top-40 justify-center sm:justify-end">
                <Link
                  href="/#contact"
                  className="px-6 py-3 w-full sm:w-auto text-center rounded-full bg-gradient-to-br from-amber-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Reach Out
                </Link>
                <Link
                  href="/"
                  className="px-6 py-3 w-full sm:w-auto text-center rounded-full bg-gradient-to-br from-amber-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span
                    onClick={handleDownloadClick}
                    className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                  >
                    Get Our Policies
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;