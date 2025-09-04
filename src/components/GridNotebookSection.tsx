"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import rough from 'roughjs';

const GridNotebookSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [highlightSvg, setHighlightSvg] = useState<string>('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // יצירת מרקור פעם אחת בלבד
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 50;
    const rc = rough.canvas(canvas);
    
    // מרקור צהוב
    rc.rectangle(10, 15, 380, 20, {
      fill: 'rgba(255, 235, 59, 0.3)',
      fillStyle: 'solid',
      stroke: 'rgba(255, 235, 59, 0.7)',
      strokeWidth: 2,
      roughness: 2,
    });

    setHighlightSvg(canvas.toDataURL());
  }, []);

  const methods = [
    {
      title: 'הוראה מתקנת',
      description: 'עבודה מקצועית וממוקדת על פערים, תוך שימוש באסטרטגיות מוכחות להוראה מותאמת.',
      color: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'AI וטכנולוגיה',
      description: 'שימוש בכלים מבוססי בינה מלאכותית להתאמה חכמה של תכנים ותרגולים.',
      color: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'גישה רגשית',
      description: 'יצירת מרחב בטוח ללמידה, מחזקת ביטחון עצמי ומעודדת גישה חיובית.',
      color: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      title: 'התאמה אישית',
      description: 'זיהוי סגנון הלמידה האישי והתאמת שיטות הוראה בהתאם.',
      color: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'למידה חווייתית',
      description: 'משחקים ופעילויות יצירתיות שמפגישים עם החומר בצורה מהנה.',
      color: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'מרתונים באנגלית',
      description: 'שיעורים אינטנסיביים לשיפור שטף הקריאה והבנת הנשמע.',
      color: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
  ];

  return (
    <section ref={ref} id="שיטות-לימוד" className="py-12 sm:py-16 lg:py-20 bg-blue-50 relative">
      
      {/* רקע דף מחברת עם משבצות */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-blue-50 relative">
          {/* גריד משבצות כחולות דהויות */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse" className="sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px]">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgb(59, 130, 246)" strokeWidth="0.5" className="sm:d-[M 35 0 L 0 0 0 35] lg:d-[M 40 0 L 0 0 0 40]"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* שוליים */}
          <div className="absolute right-8 sm:right-12 lg:right-16 top-0 bottom-0 w-px bg-red-300/40"></div>
          <div className="absolute left-8 sm:left-12 lg:left-16 top-0 bottom-0 w-px bg-red-300/40"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* כותרת כמו כתב יד */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16 relative"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 relative font-handwriting">
            שיטות הלימוד שלי
            {/* קו תחתון בכתב יד */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-slate-600 rounded-full"
              style={{ 
                background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 4'%3E%3Cpath d='M0,2 Q25,0 50,2 T100,2' stroke='%23334155' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundSize: '100% 100%'
              }}
            />
          </h2>
        </motion.div>

        {/* כרטיסיות כמו פתקיות עם סלוטייפ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                rotate: hoveredCard === index ? 0 : Math.random() * 4 - 2 
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
              {/* סלוטייפ עליון */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-gray-200 to-gray-300 rounded-sm shadow-sm z-20 opacity-80">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              </div>
              
              {/* סלוטייפ צדדי */}
              <div className="absolute -right-2 top-8 w-6 h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-sm shadow-sm z-20 opacity-80 rotate-90">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>

              {/* פתקית */}
              <div className={`
                ${method.color} ${method.borderColor}
                border-2 rounded-lg p-6 shadow-lg relative overflow-hidden
                transform transition-all duration-300
              `}>
                
                {/* כותרת */}
                <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                  {method.title}
                </h3>
                
                {/* תיאור */}
                <p className="text-slate-600 leading-relaxed text-sm mb-4">
                  {method.description}
                </p>
                
                {/* פינה מקופלת */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-white/60 transform rotate-45 translate-x-3 -translate-y-3 shadow-sm"></div>
                
                {/* צל פנימי */}
                <div className="absolute bottom-2 right-2 left-2 h-1 bg-black/5 rounded-full"></div>
              </div>
              
              {/* צל הפתקית */}
              <div className={`
                absolute inset-0 ${method.color} ${method.borderColor}
                border-2 rounded-lg -z-10 transform translate-x-1 translate-y-1 opacity-40
              `}></div>
            </motion.div>
          ))}
        </div>

        {/* הודעה מודגשת */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative inline-block">
            {/* רקע מרקור */}
            {highlightSvg && (
              <div
                className="absolute inset-0 w-full h-full opacity-60"
                style={{
                  backgroundImage: `url(${highlightSvg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}
            <p className="text-slate-700 text-lg font-medium px-4 py-2 relative z-10">
              כל שיטה מותאמת אישית לילד
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GridNotebookSection;
