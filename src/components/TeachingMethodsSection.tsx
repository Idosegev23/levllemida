"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

const MethodCard = ({ icon, title, description, delay, index, gradient, isHovered, onHover }: MethodCardProps) => (
  <motion.div
    className="relative group cursor-pointer"
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    onMouseEnter={() => onHover(index)}
    onMouseLeave={() => onHover(null)}
    whileHover={{ y: -10, scale: 1.02 }}
  >
    {/* רקע הכרטיס */}
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100 overflow-hidden transition-all duration-500 ${isHovered ? 'shadow-2xl border-gray-200' : ''}`}>
      {/* גראדיאנט רקע */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
        initial={false}
        animate={{ opacity: isHovered ? 0.05 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* אייקון */}
      <motion.div 
        className={`relative z-10 mb-6 p-4 rounded-xl bg-gradient-to-br ${gradient} text-white inline-block shadow-md`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {icon}
        {/* אפקט ברק */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          initial={{ x: "-100%" }}
          animate={isHovered ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>
      
      {/* תוכן */}
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-4 text-gray-800"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 leading-relaxed"
          animate={isHovered ? { x: 5 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
        >
          {description}
        </motion.p>
      </div>
      
      {/* קו דקורטיבי תחתון */}
      <motion.div
        className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 0.4 }}
      />
      
      {/* אלמנט דקורטיבי */}
      <motion.div
        className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${gradient} rounded-full opacity-60`}
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.6, 1, 0.6] : 0.6,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  </motion.div>
);

const TeachingMethodsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const methods = [
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: 'הוראה מתקנת בשפה ובחשבון',
      description: 'עבודה מקצועית וממוקדת על פערים, תוך שימוש באסטרטגיות מוכחות להוראה מותאמת. תרגול קפדני אך בגובה העיניים, שמאפשר לתלמידים לבנות בסיס יציב ולסגור פערים בקצב האישי שלהם.',
      gradient: 'from-highlight-yellow to-soft-pink'
    },
    {
      icon: <HiOutlineChip className="w-8 h-8" />,
      title: 'שילוב AI וטכנולוגיה',
      description: 'שימוש בכלים מבוססי בינה מלאכותית להתאמה חכמה של תכנים, תרגולים והתנסויות – כדי שכל תלמיד יקבל בדיוק מה שהוא צריך, מתי שהוא צריך את זה.',
      gradient: 'from-primary to-light-pink'
    },
    {
      icon: <HiOutlineHeart className="w-8 h-8" />,
      title: 'גישה רגשית תומכת',
      description: 'אני בונה קשר אישי עם כל תלמיד, יוצרת מרחב בטוח ללמידה, מחזקת ביטחון עצמי ומעודדת גישה חיובית כלפי טעויות ואתגרים.',
      gradient: 'from-soft-pink to-primary'
    },
    {
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      title: 'התאמה אישית מלאה',
      description: 'אני מזהה את הדרך שבה כל תלמיד לומד הכי טוב – ומביאה לו בדיוק אותה. בין אם זו למידה חזותית, שמיעתית או תנועתית – אני שם כדי שהלמידה תהיה טבעית ולא מאולצת.',
      gradient: 'from-light-pink to-highlight-yellow'
    },
    {
      icon: <HiOutlinePuzzle className="w-8 h-8" />,
      title: 'למידה חווייתית עם משחקים',
      description: 'משחקים לימודיים, פעילויות מאוירות ודפי עבודה יצירתיים שמפגישים את הילדים עם החומר בצורה סקרנית, קלילה ומשמעותית – כך שהם לומדים מבלי להרגיש שהם "בשיעור".',
      gradient: 'from-primary to-highlight-yellow'
    },
    {
      icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
      title: 'מרתונים באנגלית',
      description: 'סדרות שיעורים אינטנסיביים, חווייתיים וממוקדים באנגלית – להטמעת מילים, זיהוי תבניות דקדוק, שיפור שטף הקריאה והבנת הנשמע. מתאימים גם לתלמידים מתקשים וגם כהכנה למבחנים.',
      gradient: 'from-soft-pink to-light-pink'
    },
  ];

  return (
    <section ref={ref} id="שיטות-לימוד" className="section-padding bg-gradient-to-br from-gray-50 via-pink-50/30 to-yellow-50/20 relative overflow-hidden">
      <div className="container-center relative z-10">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="relative">
            שיטות הלימוד שלי
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 200 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
            />
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6">
          {methods.map((method, index) => (
            <MethodCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              delay={index * 0.15}
              index={index}
              gradient={method.gradient}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
            />
          ))}
        </div>
      </div>
      
      {/* אלמנטים דקורטיביים ברקע */}
      <motion.div
        className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-primary/10 to-highlight-yellow/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-tl from-soft-pink/10 to-light-pink/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      {/* חלקיקים קטנים */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-highlight-yellow/40 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </section>
  );
};

export default TeachingMethodsSection; 