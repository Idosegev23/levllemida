"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineHeart, HiOutlineChartBar } from 'react-icons/hi';
import Image from 'next/image';

const AboutSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section ref={ref} id="עליי" className="section-padding bg-gradient-to-br from-white via-pink-50/20 to-yellow-50/10 relative overflow-hidden">
      <div className="container-center relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          קצת עליי
        </motion.h2>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* תמונת מורה */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative group">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-3xl shadow-xl bg-white transform perspective-1000 hover:scale-105 transition-transform duration-500">
                <Image
                src="/ilanit.png"
                alt="אילנית - מורה מקצועית"
                  width={400}
                  height={400}
                className="h-full w-full object-cover object-center"
                  priority
                />
                {/* אפקט הילה */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-highlight-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* אלמנט דקורטיבי */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-highlight-yellow to-primary rounded-full opacity-70"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-tr from-primary to-soft-pink rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
          
          {/* תוכן טקסט */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-light-pink to-highlight-yellow bg-clip-text text-transparent leading-tight"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              >
                היי, אני אילנית, מייסדת &quot;לב ללמידה&quot;
              </motion.h3>
              
              <motion.div 
                className="mb-8 text-lg leading-relaxed text-gray-700 relative space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p>
                  בעברי הייתי רואת חשבון. עבדתי עם מספרים, טבלאות ודוחות - אבל עמוק בפנים ידעתי שהלב שלי נמצא במקום אחר. משהו בי השתוקק למשמעות אחרת, לקשר אנושי, לעשייה שמייצרת שינוי אמיתי בחיים של אנשים.
                </p>
                <p>
                  ואז עשיתי צעד אמיץ. עזבתי את עולם המספרים והלוגיקות, כדי לעזור לילדים להבין אותם.
                </p>
                <p>
                  הקמתי את &quot;לב ללמידה&quot; מתוך הבנה עמוקה שכל ילד וילדה הם עולם ומלואו. עם קצב, אופן חשיבה וצרכים שונים. אני מאמינה שלמידה היא לא רק ידע - היא חוויה רגשית, היא ביטחון עצמי והיא אמונה פנימית ביכולת שלנו להצליח.
                </p>
                <p>
                  החזון שלי הוא לייצר שינוי בתפיסת הלמידה: להפוך אותה לחוויה הוליסטית, חכמה, רגשית, מותאמת אישית ובעיקר כזו שמאפשרת לילדים להאמין בעצמם באמת.
                </p>
                {/* קו דקורטיבי */}
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-0.5 bg-gradient-to-l from-primary to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </motion.div>
              
              <ul className="space-y-5">
                {bulletPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-4 group cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${point.color} text-white shadow-sm flex-shrink-0 relative overflow-hidden`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {point.icon}
                      {/* אפקט ברק */}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        animate={hoveredIndex === index ? { x: "100%" } : { x: "-100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </motion.div>
                    <motion.span 
                      className="text-gray-800 text-lg"
                      animate={hoveredIndex === index ? { x: 5 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {point.text}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* אלמנטים דקורטיביים ברקע */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-soft-pink/10 to-primary/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-tl from-highlight-yellow/10 to-light-pink/5 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </section>
  );
};

export default AboutSection; 