"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const UniqueHeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
        <div className="w-full max-w-7xl mx-auto px-6">
          
          {/* חלק עליון - כותרת בצד שמאל */}
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* כותרת ראשית - 7 עמודות */}
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* מספר מעצב בגודל ענק ברקע */}
                <div className="absolute -top-20 -right-10 text-[300px] font-black text-primary/5 leading-none select-none">
                  1
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-slate-800 relative z-10">
                  <motion.span 
                    className="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    כל ילד
                  </motion.span>
                  <motion.span 
                    className="block text-primary italic -ml-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    לומד אחרת
                  </motion.span>
                </h1>
              </motion.div>
            </div>

            {/* אלמנט דקורטיבי - 5 עמודות */}
            <div className="col-span-12 lg:col-span-5 flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
                className="relative"
              >
                <div className="w-64 h-64 bg-gradient-to-br from-highlight-yellow/20 to-primary/20 rounded-[60px] rotate-12 relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded-[40px] flex items-center justify-center">
                    <div className="text-6xl">💝</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* חלק אמצעי - תיאור בצורה לא שגרתית */}
          <div className="mt-20 grid grid-cols-12 gap-8">
            
            {/* ריק - ליצירת אסימטריה */}
            <div className="col-span-12 lg:col-span-3"></div>
            
            {/* תיאור */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="relative"
              >
                {/* קו דקורטיבי */}
                <div className="absolute -top-8 left-0 w-24 h-1 bg-primary rounded-full"></div>
                
                <p className="text-xl md:text-2xl leading-relaxed text-slate-600 font-medium">
                  ברוכים הבאים ל<span className="text-primary font-bold">&quot;לב ללמידה&quot;</span> - 
                  למידה שמתחילה מהלב, מותאמת אישית, בגובה העיניים, 
                  עם תוצאות שמדברות בעד עצמן.
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-highlight-yellow/20 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-highlight-yellow rounded-full"></div>
                  </div>
                  <p className="text-lg text-slate-500 italic">
                    שפה, מתמטיקה ואנגלית - בדרך שכיף להבין
                  </p>
                </div>
              </motion.div>
            </div>

            {/* מספר דקורטיבי */}
            <div className="col-span-12 lg:col-span-3 flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-primary/10 text-[120px] font-black"
              >
                ♥
              </motion.div>
            </div>
          </div>

          {/* חלק תחתון - CTA במקום לא צפוי */}
          <div className="mt-20 grid grid-cols-12 gap-8">
            
            {/* כפתור פעולה */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Link href="#צור-קשר">
                  <motion.button 
                    className="group relative w-full py-6 px-8 bg-primary text-white rounded-[30px] overflow-hidden font-bold text-xl shadow-lg"
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
                      ←
                    </motion.div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* טקסט תמיכה */}
            <div className="col-span-12 lg:col-span-8 flex items-end">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 text-slate-400">
                  <div className="w-8 h-px bg-slate-300"></div>
                  <span className="text-sm font-medium">
                    שיעור ללא התחייבות ♥ 100% התאמה אישית
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
