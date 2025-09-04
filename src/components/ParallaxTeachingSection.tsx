"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { HiOutlineLightBulb, HiOutlineChartBar, HiOutlineChip, HiOutlineHeart, HiOutlinePuzzle, HiOutlineGlobeAlt } from 'react-icons/hi';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
  gradient: string;
  isHovered: boolean;
  onHover: (index: number | null) => void;
}

const ParallaxMethodCard = ({ icon, title, description, delay, index, gradient, isHovered, onHover }: MethodCardProps) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 100, rotateX: 45 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{ y, rotateX, scale }}
    >
      {/* כרטיס עם אפקטי עומק */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden"
        whileHover={{ 
          y: -20, 
          rotateY: 5,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* רקע מדרג דינמי */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* אלמנטים מרחפים ברקע */}
        <motion.div
          className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* אייקון מרכזי */}
        <motion.div 
          className={`relative z-10 mb-8 p-6 rounded-2xl bg-gradient-to-br ${gradient} text-white inline-block shadow-xl`}
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.2,
          }}
          transition={{ duration: 0.6 }}
        >
          {icon}
          
          {/* הילה סביב האייקון */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-md -z-10`}
            animate={{
              scale: isHovered ? [1, 1.3, 1] : 1,
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.5,
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
        </motion.div>
        
        {/* תוכן */}
        <div className="relative z-10">
          <motion.h3 
            className="text-2xl font-bold mb-6 text-white"
            animate={isHovered ? { y: -5, color: "#F2CD5E" } : { y: 0, color: "#FFFFFF" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 leading-relaxed text-lg"
            animate={isHovered ? { y: -5 } : { y: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
          >
            {description}
          </motion.p>
        </div>
        
        {/* קו אור תחתון */}
        <motion.div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.6 }}
        />

        {/* אפקט זוהר על hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 rounded-3xl"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* חלקיקים מרחפים */}
        {isHovered && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: -50,
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const ParallaxTeachingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const methods = [
    {
      icon: <HiOutlineLightBulb className="w-10 h-10" />,
      title: 'הוראה מתקנת',
      description: 'עבודה מקצועית וממוקדת על פערים, תוך שימוש באסטרטגיות מוכחות להוראה מותאמת.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: <HiOutlineChip className="w-10 h-10" />,
      title: 'AI וטכנולוגיה',
      description: 'שימוש בכלים מבוססי בינה מלאכותית להתאמה חכמה של תכנים ותרגולים.',
      gradient: 'from-blue-400 to-purple-600'
    },
    {
      icon: <HiOutlineHeart className="w-10 h-10" />,
      title: 'גישה רגשית',
      description: 'יצירת מרחב בטוח ללמידה, מחזקת ביטחון עצמי ומעודדת גישה חיובית.',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      icon: <HiOutlineChartBar className="w-10 h-10" />,
      title: 'התאמה אישית',
      description: 'זיהוי סגנון הלמידה האישי והתאמת שיטות הוראה בהתאם.',
      gradient: 'from-green-400 to-blue-500'
    },
    {
      icon: <HiOutlinePuzzle className="w-10 h-10" />,
      title: 'למידה חווייתית',
      description: 'משחקים ופעילויות יצירתיות שמפגישים עם החומר בצורה מהנה.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      icon: <HiOutlineGlobeAlt className="w-10 h-10" />,
      title: 'מרתונים באנגלית',
      description: 'שיעורים אינטנסיביים לשיפור שטף הקריאה והבנת הנשמע.',
      gradient: 'from-indigo-400 to-cyan-500'
    },
  ];

  return (
    <section ref={ref} id="שיטות-לימוד" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* רקע פארלקס מרובה שכבות */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div className="w-full h-[120%] bg-gradient-to-br from-primary/20 via-transparent to-highlight-yellow/10" />
      </motion.div>

      {/* אלמנטים דקורטיביים גדולים */}
      <Parallax speed={-30} className="absolute top-0 left-0">
        <motion.div
          className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </Parallax>

      <Parallax speed={-20} className="absolute bottom-0 right-0">
        <motion.div
          className="w-80 h-80 rounded-full bg-gradient-to-tl from-highlight-yellow/15 to-transparent blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </Parallax>

      <div className="container-center relative z-10 py-24">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="relative">
            <span className="bg-gradient-to-r from-highlight-yellow via-primary to-soft-pink bg-clip-text text-transparent">
              שיטות הלימוד שלי
            </span>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 300 } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {methods.map((method, index) => (
            <ParallaxMethodCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              delay={index * 0.2}
              index={index}
              gradient={method.gradient}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
            />
          ))}
        </div>
      </div>
      
      {/* חלקיקים צפים ברקע */}
      {[...Array(25)].map((_, i) => (
        <Parallax key={i} speed={Math.random() * -60 - 10}>
          <motion.div
            className="absolute w-2 h-2 bg-gradient-to-br from-primary/40 to-highlight-yellow/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        </Parallax>
      ))}
    </section>
  );
};

export default ParallaxTeachingSection;
