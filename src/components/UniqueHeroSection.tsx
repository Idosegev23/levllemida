"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const UniqueHeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // פארלקס עדין ויוקרתי
  const yTitle = useTransform(scrollY, [0, 500], [0, -100]);
  const yDescription = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-white">
      {/* רקע דינמי עדין */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(242, 162, 206, 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Layout שבור ולא שגרתי */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24">
          
          {/* חלק עליון - כותרת בצד שמאל */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            
            {/* כותרת ראשית - 7 עמודות */}
            <div className="col-span-12 lg:col-span-7 order-1">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* מספר מעצב בגודל ענק ברקע */}
                <div className="absolute -top-10 sm:-top-20 -right-4 sm:-right-10 text-[150px] sm:text-[200px] lg:text-[300px] font-black text-primary/5 leading-none select-none">
                  1
                </div>
                
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black leading-tight text-slate-800 relative z-10"
                  style={{ y: yTitle, opacity }}
                >
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    כל ילד
                  </motion.span>
                  <motion.span 
                    className="block text-primary italic -ml-2 sm:-ml-4 lg:-ml-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    לומד אחרת
                  </motion.span>
                </motion.h1>
              </motion.div>
            </div>

            {/* אלמנט דקורטיבי - 5 עמודות */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-2 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
                className="relative"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-highlight-yellow/20 to-primary/20 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] rotate-12 relative overflow-hidden">
                  <div className="absolute inset-3 sm:inset-4 bg-white rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-primary/10 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* חלק אמצעי - תיאור בצורה לא שגרתית */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            
            {/* ריק - ליצירת אסימטריה */}
            <div className="col-span-12 lg:col-span-3"></div>
            
            {/* תיאור */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative"
                style={{ y: yDescription }}
              >
                {/* קו דקורטיבי */}
                <div className="absolute -top-8 left-0 w-24 h-1 bg-primary rounded-full"></div>
                
                <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-slate-600 font-medium">
                  ברוכים הבאים ל<span className="text-primary font-bold">&quot;לב ללמידה&quot;</span> - 
                  למידה שמתחילה מהלב, מותאמת אישית, בגובה העיניים, 
                  עם תוצאות שמדברות בעד עצמן.
                </p>
                
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-highlight-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-highlight-yellow rounded-full"></div>
                  </div>
                  <p className="text-base sm:text-lg text-slate-500 italic">
                    שפה, מתמטיקה ואנגלית - בדרך שכיף להבין
                  </p>
                </div>
              </motion.div>
            </div>

            {/* מספר דקורטיבי */}
            <div className="hidden lg:flex col-span-12 lg:col-span-3 justify-center items-center">
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-primary/10 text-[80px] lg:text-[120px] font-black"
              >
                ◆
              </motion.div>
            </div>
          </div>

          {/* חלק תחתון - CTA במקום לא צפוי */}
          <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            
            {/* כפתור פעולה */}
            <div className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-4 lg:col-start-9">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Link href="#צור-קשר">
                  <motion.button 
                    className="group relative w-full py-4 sm:py-5 lg:py-6 px-6 sm:px-7 lg:px-8 bg-primary text-white rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] overflow-hidden font-bold text-lg sm:text-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">קביעת שיעור היכרות</span>
                    
                    {/* אפקט הדגשה */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-highlight-yellow to-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* חץ */}
                    <motion.div
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 text-2xl"
                      initial={{ x: 0, opacity: 0 }}
                      whileHover={{ x: 5, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      ◄
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* טקסט תמיכה */}
            <div className="col-span-12 lg:col-span-8 flex items-center justify-center lg:items-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-6 lg:mt-0 lg:mb-8"
              >
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 sm:gap-3 text-slate-400">
                  <div className="w-8 h-px bg-slate-300 hidden sm:block"></div>
                  <span className="text-sm sm:text-sm font-medium text-center">
                    שיעור ללא התחייבות • 100% התאמה אישית
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* חלקיקים עדינים ומהירים */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  );
};

export default UniqueHeroSection;
