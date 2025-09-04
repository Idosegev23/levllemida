"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, .hover-effect, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Cursor עיקרי */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-5 h-5 rounded-full mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          background: isHovering 
            ? 'linear-gradient(45deg, #F2CD5E, #F2A2CE)' 
            : 'linear-gradient(45deg, #F2A2CE, #F2CD5E)',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      
      {/* Cursor חיצוני */}
      <motion.div
        className="fixed pointer-events-none z-[9998] w-10 h-10 rounded-full border-2 opacity-30"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          borderColor: isHovering ? '#F2CD5E' : '#F2A2CE',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          delay: 0.05,
        }}
      />
    </>
  );
};

export default CustomCursor;

