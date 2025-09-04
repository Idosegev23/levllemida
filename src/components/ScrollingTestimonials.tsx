"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ScrollingTestimonials = () => {
  const testimonials = [
    "הילדה שלי שנאה מתמטיקה וחזרה לאהוב אותה",
    "אילנית הצליחה לגרום לבן שלי להאמין בעצמו",
    "השיפור בעברית היה מדהים תוך שבועיים",
    "גישה רגישה ומקצועית שעובדת",
    "הילד שלי מחכה לשיעורים עכשיו",
    "תוצאות מעבר לציפיות",
    "סוף סוף מצאנו מורה שמבינה את הילד שלנו",
    "השיטה האישית פשוט עובדת",
    "מתוך 3 ילדים היא הצליחה לחבר לכולם",
    "האנגלית השתפרה בצורה מרשימה",
    "כל הכבוד על הסבלנות והמקצועיות",
    "ילדה שלא רצתה ללמוד הפכה לתלמידה מצטיינת",
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8"
        >
          מה אומרים ההורים
        </motion.h2>
      </div>

      {/* גלילה איטית שמאיצה */}
      <div className="relative">
        <motion.div 
          className="flex gap-6 will-change-transform"
          animate={{ 
            x: [0, -2000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{
            width: 'max-content',
          }}
        >
          {/* חזרה על הביקורות פעמיים לחלקות */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[300px] max-w-[300px]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {testimonial}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* גרדיאנט לעמעום בצדדים */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      {/* הודעה סיום */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center mt-12"
      >
        <div className="inline-block bg-primary p-6 rounded-3xl text-white shadow-lg">
          <p className="text-xl font-bold">
            כשהלמידה היא אישית, כולם מרוצים
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ScrollingTestimonials;
