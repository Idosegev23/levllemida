"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineHeart, HiOutlineChartBar } from 'react-icons/hi';
import Image from 'next/image';

const ParallaxAboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const bulletPoints = [
    {
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      text: 'הוראה מתקנת מקצועית בשפה ובחשבון',
      color: 'from-primary to-light-pink'
    },
    {
      icon: <HiOutlineLightBulb className="w-6 h-6" />,
      text: 'שילוב חכם של כלי AI וטכנולוגיה',
      color: 'from-highlight-yellow to-soft-pink'
    },
    {
      icon: <HiOutlineHeart className="w-6 h-6" />,
      text: 'מרחב בטוח ומעצים לכל ילד',
      color: 'from-soft-pink to-primary'
    },
    {
      icon: <HiOutlineChartBar className="w-6 h-6" />,
      text: 'התאמה אישית מלאה לסגנון הלמידה',
      color: 'from-light-pink to-highlight-yellow'
    },
  ];

  return (
    <section ref={ref} id="עליי" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-pink-50/30 to-yellow-50/20">
      {/* רקע פארלקס דינמי */}
      <Parallax speed={-20} className="absolute inset-0">
        <div className="w-full h-[120%] bg-gradient-to-br from-primary/5 via-transparent to-highlight-yellow/3" />
      </Parallax>

      {/* אלמנטים דקורטיביים מרחפים */}
      <Parallax speed={-30} className="absolute top-1/4 left-0">
        <motion.div
          className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Parallax>

      <Parallax speed={-25} className="absolute bottom-1/4 right-0">
        <motion.div
          className="w-48 h-48 rounded-full bg-gradient-to-tl from-highlight-yellow/10 to-transparent blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </Parallax>

      <div className="container-center relative z-10 py-24">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-700"
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="relative">
            קצת עליי
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 200 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </span>
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* תמונת מורה עם אפקטים מרהיבים */}
          <Parallax speed={-15} className="w-full lg:w-2/5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="relative group"
            >
              <div className="relative">
                {/* הילה מרחפת */}
                <motion.div
                  className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-highlight-yellow/20 to-primary/30 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-3xl shadow-2xl bg-white relative z-10 group-hover:scale-105 transition-transform duration-700">
                  <Image
                    src="/ilanit.png"
                    alt="אילנית - מורה מקצועית"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover object-center"
                    priority
                  />
                  {/* אפקט זוהר על hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-highlight-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
              
              {/* אלמנטים דקורטיביים מסתובבים */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-highlight-yellow to-primary rounded-full opacity-80"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-tr from-primary to-soft-pink rounded-full opacity-70"
                animate={{ 
                  rotate: [360, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </Parallax>
          
          {/* תוכן טקסט עם אנימציות מרהיבות */}
          <div className="w-full lg:w-3/5">
            <Parallax speed={-10}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-highlight-yellow via-primary to-soft-pink bg-clip-text text-transparent">
                    היי, אני אילנית, מייסדת &quot;לב ללמידה&quot;
                  </span>
                </motion.h3>
                
                <motion.div 
                  className="mb-10 text-lg leading-relaxed text-slate-600 relative space-y-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    בעברי הייתי רואת חשבון. עבדתי עם מספרים, טבלאות ודוחות - אבל עמוק בפנים ידעתי שהלב שלי נמצא במקום אחר.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    ואז עשיתי צעד אמיץ. עזבתי את עולם המספרים והלוגיקות, כדי לעזור לילדים להבין אותם.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="font-semibold text-primary"
                  >
                    החזון שלי הוא לייצר שינוי בתפיסת הלמידה: להפוך אותה לחוויה הוליסטית, חכמה, רגשית ומעצימה.
                  </motion.p>
                </motion.div>
                
                <ul className="space-y-6">
                  {bulletPoints.map((point, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-6 group cursor-pointer"
                      initial={{ opacity: 0, x: -50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-br ${point.color} text-white shadow-lg flex-shrink-0 relative overflow-hidden`}
                        animate={{
                          scale: hoveredIndex === index ? 1.2 : 1,
                          rotate: hoveredIndex === index ? 10 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {point.icon}
                        {/* אפקט זוהר */}
                        <motion.div
                          className="absolute inset-0 bg-white/30 rounded-2xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      
                      <motion.span 
                        className="text-slate-600 text-lg font-medium"
                        animate={{ 
                          color: hoveredIndex === index ? "#F2A2CE" : "rgb(71 85 105)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {point.text}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>
      
      {/* חלקיקים מרחפים */}
      {[...Array(15)].map((_, i) => (
        <Parallax key={i} speed={Math.random() * -40 - 10}>
          <motion.div
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        </Parallax>
      ))}
    </section>
  );
};

export default ParallaxAboutSection;
