"use client";
import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile to handle autoplay restrictions
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    
    // Attempt to play video programmatically (required for some browsers)
    const tryAutoPlay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    };
    
    tryAutoPlay();
  }, []);

  return (
    <section className="relative lg:py-16 min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Dark overlay for better text contrast */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/hero-video-poster.jpg" // Fallback image
        >
          <source src="../videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Loading state */}
        {!isVideoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="animate-pulse text-gray-300">Loading video...</div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello,{" "}
              </span>
              <br />
              <div className="relative inline-block">
                {/* Text shadow for better readability on video background */}
                <TypeAnimation
                  sequence={[
                    "Jijenge Leo",
                    1000,
                    "Build the physicality of your dreams",
                    1000,
                    "Get jacked",
                    1000,
                    "Diet and Train with experts now",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" // Text shadow for better readability
                />
              </div>
            </h1>
            <p className="text-[#F1F1F1] text-base sm:text-lg mb-6 lg:text-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              Your dream body is just a click away
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Reach Out
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white mt-3 sm:mt-0 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Get Our Policies
                </span>
              </Link>
            </div>
          </motion.div>
          
          {/* Optional: You can keep the circular video element if needed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 place-self-center mt-8 lg:mt-0"
          >
            <div className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-2xl border-4 border-white/10">
              {/* You can place additional content here if needed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Fitness Transformation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;