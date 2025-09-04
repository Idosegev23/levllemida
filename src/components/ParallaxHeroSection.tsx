"use client";

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';

const ParallaxHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // אפקטי פארלקס לאלמנטים שונים
  const yText = useTransform(scrollY, [0, 800], [0, -200]);
  const yBg1 = useTransform(scrollY, [0, 800], [0, -400]);
  const yBg2 = useTransform(scrollY, [0, 800], [0, -600]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 1.2]);

  // Spring animation לחלקות
  const smoothY = useSpring(yText, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* רקע פארלקס מרובה שכבות */}
      <motion.div 
        className="absolute inset-0 -z-50"
        style={{ y: yBg2, scale }}
      >
        <div className="w-full h-[120%] bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900" />
      </motion.div>

      <motion.div 
        className="absolute inset-0 -z-40"
        style={{ y: yBg1 }}
      >
        <div className="w-full h-[110%] bg-gradient-to-tr from-transparent via-primary/20 to-highlight-yellow/30" />
      </motion.div>

      {/* אלמנטים גרפיים מרחפים */}
      <Parallax speed={-30} className="absolute top-10 left-10">
        <motion.div
          className="w-32 h-32 rounded-full bg-gradient-to-br from-highlight-yellow/30 to-primary/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
        />
      </Parallax>

      <Parallax speed={-20} className="absolute top-32 right-20">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-tl from-primary/40 to-soft-pink/20 blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: mousePosition.x * -0.3,
            y: mousePosition.y * -0.3,
          }}
        />
      </Parallax>

      <Parallax speed={-40} className="absolute bottom-20 left-1/4">
        <motion.div
          className="w-40 h-40 rounded-full bg-gradient-to-br from-light-pink/25 to-highlight-yellow/15 blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            x: mousePosition.x * 0.8,
            y: mousePosition.y * 0.8,
          }}
        />
      </Parallax>

      {/* תוכן ראשי */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: smoothY, opacity }}
      >
        <div className="container-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* כותרת מרהיבה */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              style={{
                x: mousePosition.x * 0.1,
                y: mousePosition.y * 0.1,
              }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-highlight-yellow via-primary to-soft-pink bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                כי כל ילד לומד אחרת
              </motion.span>
              <br />
              <motion.span 
                className="text-white drop-shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                ובלב פתוח, הוא מצליח
              </motion.span>
            </motion.h1>

            {/* תיאור עם אפקט כתיבה */}
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              style={{
                x: mousePosition.x * -0.05,
                y: mousePosition.y * -0.05,
              }}
            >
              ברוכים הבאים ל&quot;לב ללמידה&quot; - למידה שמתחילה מהלב,
              <br />
              מותאמת אישית, בגובה העיניים, עם תוצאות שמדברות בעד עצמן
            </motion.p>

            {/* כפתור פעולה מרהיב */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#צור-קשר">
                <motion.button 
                  className="relative px-12 py-4 text-xl font-bold text-white bg-gradient-to-r from-primary to-highlight-yellow rounded-2xl shadow-2xl overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(242, 162, 206, 0.4)",
                  }}
                  style={{
                    x: mousePosition.x * 0.03,
                    y: mousePosition.y * 0.03,
                  }}
                >
                  <span className="relative z-10">קביעת שיעור היכרות</span>
                  
                  {/* אפקט ברק */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* אפקט זוהר */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/50 to-highlight-yellow/50 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* חץ גלילה */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ opacity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* חלקיקים מרחפים */}
      {[...Array(20)].map((_, i) => (
        <Parallax key={i} speed={Math.random() * -50 - 10}>
          <motion.div
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        </Parallax>
      ))}
    </section>
  );
};

export default ParallaxHeroSection;
