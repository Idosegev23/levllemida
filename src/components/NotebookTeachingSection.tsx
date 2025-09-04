"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const NotebookTeachingSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const methods = [
    {
      title: 'הוראה מתקנת',
      description: 'עבודה מקצועית וממוקדת על פערים, תוך שימוש באסטרטגיות מוכחות להוראה מותאמת.',
      icon: '📚',
      color: 'bg-yellow-100',
      borderColor: 'border-yellow-200',
      shadowColor: 'shadow-yellow-200/50'
    },
    {
      title: 'AI וטכנולוגיה',
      description: 'שימוש בכלים מבוססי בינה מלאכותית להתאמה חכמה של תכנים ותרגולים.',
      icon: '🤖',
      color: 'bg-blue-100',
      borderColor: 'border-blue-200',
      shadowColor: 'shadow-blue-200/50'
    },
    {
      title: 'גישה רגשית',
      description: 'יצירת מרחב בטוח ללמידה, מחזקת ביטחון עצמי ומעודדת גישה חיובית.',
      icon: '💝',
      color: 'bg-pink-100',
      borderColor: 'border-pink-200',
      shadowColor: 'shadow-pink-200/50'
    },
    {
      title: 'התאמה אישית',
      description: 'זיהוי סגנון הלמידה האישי והתאמת שיטות הוראה בהתאם.',
      icon: '🎯',
      color: 'bg-green-100',
      borderColor: 'border-green-200',
      shadowColor: 'shadow-green-200/50'
    },
    {
      title: 'למידה חווייתית',
      description: 'משחקים ופעילויות יצירתיות שמפגישים עם החומר בצורה מהנה.',
      icon: '🎮',
      color: 'bg-purple-100',
      borderColor: 'border-purple-200',
      shadowColor: 'shadow-purple-200/50'
    },
    {
      title: 'מרתונים באנגלית',
      description: 'שיעורים אינטנסיביים לשיפור שטף הקריאה והבנת הנשמע.',
      icon: '🌍',
      color: 'bg-indigo-100',
      borderColor: 'border-indigo-200',
      shadowColor: 'shadow-indigo-200/50'
    },
  ];

  return (
    <section ref={ref} id="שיטות-לימוד" className="py-20 bg-gray-50 relative">
      
      {/* רקע שנראה כמו דף מחברת */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-white">
          {/* קווים אופקיים */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-full h-px bg-blue-200/30 absolute"
              style={{ top: `${5 + i * 5}%` }}
            />
          ))}
          {/* שוליים */}
          <div className="absolute right-20 top-0 bottom-0 w-px bg-red-300/50"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* כותרת כמו כותרת מחברת */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* מספר דף */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 text-slate-400 text-sm">
            עמוד 3
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4 relative">
            שיטות הלימוד שלי
            {/* קו תחתון כמו בכתב יד */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-primary rounded-full"
            />
          </h2>
          
          {/* הערה בשוליים */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -right-8 top-8 transform rotate-12 text-sm text-red-500 font-handwriting"
          >
            ✓ חשוב!
          </motion.div>
        </motion.div>

        {/* כרטיסיות כמו פתקיות */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 10 - 5 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: hoveredCard === index ? 0 : Math.random() * 6 - 3 
              } : {}}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 200
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ 
                scale: 1.05,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              className={`relative cursor-pointer transform-gpu ${
                hoveredCard === index ? 'z-10' : 'z-0'
              }`}
            >
              {/* דף פתקית */}
              <div className={`
                ${method.color} ${method.borderColor} ${method.shadowColor}
                border-2 rounded-lg p-6 shadow-lg relative overflow-hidden
                before:absolute before:top-0 before:left-4 before:w-px before:h-full before:bg-red-300/30
              `}>
                
                {/* חורי קלסר */}
                <div className="absolute left-2 top-6 w-2 h-2 bg-white rounded-full shadow-inner"></div>
                <div className="absolute left-2 top-16 w-2 h-2 bg-white rounded-full shadow-inner"></div>
                <div className="absolute left-2 top-26 w-2 h-2 bg-white rounded-full shadow-inner"></div>
                
                {/* איקון */}
                <div className="text-4xl mb-4 ml-6">
                  {method.icon}
                </div>
                
                {/* כותרת */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 ml-6 leading-tight">
                  {method.title}
                </h3>
                
                {/* תיאור */}
                <p className="text-slate-600 leading-relaxed ml-6 text-sm">
                  {method.description}
                </p>
                
                {/* פינה מקופלת */}
                <div className="absolute top-0 left-0 w-6 h-6 bg-white/50 transform rotate-45 -translate-x-3 -translate-y-3"></div>
                
                {/* הדגשה בעט */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredCard === index ? "80%" : "0%"
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-4 right-6 h-0.5 bg-yellow-400 rounded-full opacity-70"
                />
              </div>
              
              {/* צל הדף */}
              <div className={`
                absolute inset-0 ${method.color} ${method.borderColor}
                border-2 rounded-lg -z-10 transform translate-x-1 translate-y-1 opacity-60
              `}></div>
            </motion.div>
          ))}
        </div>

        {/* הערת שוליים */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white p-4 rounded-2xl shadow-sm border border-gray-200 transform -rotate-1">
            <p className="text-slate-600 text-sm">
              <span className="font-bold text-primary">💡 זכור:</span> כל שיטה מותאמת אישית לילד
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default NotebookTeachingSection;
