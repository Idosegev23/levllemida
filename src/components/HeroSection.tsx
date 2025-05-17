"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] pt-28 pb-16 flex items-center relative bg-white overflow-hidden">
      <div className="container-center relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            כי כל ילד לומד אחרת – ובלב פתוח, הוא מצליח
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            שיעורים פרטיים מותאמים אישית בעברית ומתמטיקה, שעוזרים לילדים לגלות את הדרך הטובה ביותר ללמוד ולהצליח
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="#צור-קשר">
              <button className="secondary-button mx-auto block">
                קביעת שיעור היכרות
              </button>
            </Link>
          </motion.div>
        </div>
        
        {/* רקע דינמי */}
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-10 opacity-10 pointer-events-none">
          <motion.div 
            className="absolute top-10 right-[10%] w-96 h-96 rounded-full bg-light-pink blur-3xl"
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, 15, -15, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-[15%] w-72 h-72 rounded-full bg-primary blur-3xl" 
            animate={{
              x: [0, -30, 0, 30, 0],
              y: [0, -20, 20, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-light-pink blur-3xl" 
            animate={{
              x: [0, 40, -40, 0],
              y: [0, 30, 0, -30, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 