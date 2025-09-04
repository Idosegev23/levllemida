"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] pt-28 pb-16 flex items-center relative bg-gradient-to-br from-white via-pink-50/30 to-yellow-50/20 overflow-hidden">
      <div className="container-center relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="relative inline-block">
              כי כל ילד לומד אחרת
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-light-pink to-highlight-yellow rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
              />
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-highlight-yellow bg-clip-text text-transparent">
              ובלב פתוח, הוא מצליח
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            ברוכים הבאים ל&quot;לב ללמידה&quot; - למידה שמתחילה מהלב, מותאמת אישית, בגובה העיניים, עם תוצאות שמדברות בעד עצמן. שפה, מתמטיקה/חשבון ואנגלית - בדרך שכיף להבין וקל ולהצליח בה.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#צור-קשר">
              <button className="secondary-button mx-auto block relative overflow-hidden group hover-effect ripple-effect">
                <span className="relative z-10">קביעת שיעור היכרות</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-light-pink opacity-0 group-hover:opacity-20"
                  initial={false}
                  animate={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </Link>
          </motion.div>
        </div>
        
        {/* רקע דינמי מתקדם - מפושט */}
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 pointer-events-none">
          <motion.div 
            className="absolute top-10 right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-light-pink/20 to-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div 
            className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-gradient-to-tr from-primary/15 to-highlight-yellow/10 blur-3xl" 
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 