"use client";
import React, { useRef, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationStyle, setAnimationStyle] = useState(0);
  const [key, setKey] = useState(0); // Key to force re-render of TypeAnimation

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
  }, []);

  // Function to cycle through animation styles
  const cycleAnimationStyle = () => {
    setAnimationStyle((prev) => (prev + 1) % 5);
    setKey(prev => prev + 3); // Change key to force re-render
  };

  // Different animation configurations
  const getAnimationConfig = () => {
    switch(animationStyle) {
      case 1:
        return {
          className: "glitch-text",
          cursor: true,
          style: { position: 'relative' },
          sequence: [
            "Jijenge Leo",
            1000,
            "Build the physicality of your dreams",
            1000,
            "Get jacked",
            1000,
            "Diet and Train with experts now",
            1000,
          ]
        };
      /*
      case 2:
        return {
          className: "gradient-text-animate",
          cursor: false,
          style: { 
            background: 'linear-gradient(90deg, #ff8a00, #e52e71)', 
            backgroundClip: 'text', 
            WebkitBackgroundClip: 'text', 
            color: 'transparent',
            display: 'inline-block'
          },
          sequence: [
            "Jijenge Leo",
            800,
            "Build the physicality of your dreams",
            800,
            "Get jacked",
            800,
            "Diet and Train with experts now",
            800,
          ]
        };
      case 3:
        return {
          className: "typewriter-effect",
          cursor: true,
          style: { fontFamily: 'monospace', borderRight: '3px solid white' },
          sequence: [
            "Jijenge Leo",
            1200,
            "Build the physicality of your dreams",
            1200,
            "Get jacked",
            1200,
            "Diet and Train with experts now",
            1200,
          ]
        };
      case 4:
        return {
          className: "bounce-text",
          cursor: true,
          style: { fontWeight: '900', display: 'inline-block' },
          sequence: [
            "Jijenge Leo",
            600,
            "Build the physicality of your dreams",
            600,
            "Get jacked",
            600,
            "Diet and Train with experts now",
            600,
          ]
        };
      */
      default:
        return {
          className: "glitch-text",
          cursor: true,
          style: { position: 'relative' },
          sequence: [
            "Jijenge Leo",
            1000,
            "Build the physicality of your dreams",
            1000,
            "Get jacked",
            1000,
            "Diet and Train with experts now",
            1000,
          ]
        };
    }
  };

  const animationConfig = getAnimationConfig();

  return (
    <section className="relative lg:py-16 min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/hero-video-poster.jpg"
        >
          <source src="../videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
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
                <TypeAnimation
                  key={key} // Key to force re-render
                  sequence={animationConfig.sequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className={`drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${animationConfig.className}`}
                  style={animationConfig.style}
                  cursor={animationConfig.cursor}
                />
                {/* Animation style toggle button */}
                <button 
                  onClick={cycleAnimationStyle}
                  className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-white bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center text-sm opacity-70 hover:opacity-100 transition-opacity"
                  title="Change text animation"
                >
                  <span className="transform rotate-90">A</span>
                </button>
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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-4 place-self-center mt-8 lg:mt-0"
          >
            <div className="rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-2xl border-4 border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Fitness Transformation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animation-specific styles */}
      <style jsx global>{`
        /* Glitch effect */
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }
        .glitch-text::before {
          animation: glitch-animation 2s infinite;
          color: #ff00cc;
          z-index: -1;
          left: 2px;
          text-shadow: -1px 0 #ff00cc;
          clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
        }
        .glitch-text::after {
          animation: glitch-animation 2.5s infinite;
          color: #00ffff;
          z-index: -2;
          left: -2px;
          text-shadow: 1px 0 #00ffff;
          clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
        }
        @keyframes glitch-animation {
          0% { transform: translate(0) }
          20% { transform: translate(-3px, 3px) }
          40% { transform: translate(-3px, -3px) }
          60% { transform: translate(3px, 3px) }
          80% { transform: translate(3px, -3px) }
          100% { transform: translate(0) }
        }
        
        /* Commented out other animation styles
        /* Gradient animation 
        .gradient-text-animate {
          background: linear-gradient(90deg, #ff8a00, #e52e71, #ff8a00);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-animation 3s linear infinite;
        }
        @keyframes gradient-animation {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        
        /* Typewriter effect 
        .typewriter-effect {
          border-right: 3px solid white;
          animation: blink-caret 0.75s step-end infinite;
          padding-right: 3px;
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: white; }
        }
        
        /* Bounce effect 
        .bounce-text {
          display: inline-block;
        }
        .bounce-text span {
          display: inline-block;
        }
        .bounce-text span:nth-child(1) { animation: bounce 0.5s ease infinite alternate; }
        .bounce-text span:nth-child(2) { animation: bounce 0.5s ease 0.1s infinite alternate; }
        .bounce-text span:nth-child(3) { animation: bounce 0.5s ease 0.2s infinite alternate; }
        .bounce-text span:nth-child(4) { animation: bounce 0.5s ease 0.3s infinite alternate; }
        .bounce-text span:nth-child(5) { animation: bounce 0.5s ease 0.4s infinite alternate; }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-5px); }
        }
        */
      `}</style>
    </section>
  );
};

export default HeroSection;