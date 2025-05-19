"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineLightBulb, HiOutlineHeart, HiOutlineChartBar } from 'react-icons/hi';

const AboutSection = () => {
  const bulletPoints = [
    {
      icon: <HiOutlineAcademicCap className="w-6 h-6" />,
      text: 'ניסיון עשיר בהוראה מותאמת'
    },
    {
      icon: <HiOutlineLightBulb className="w-6 h-6" />,
      text: 'שילוב טכנולוגיה ו-AI בשיעורים'
    },
    {
      icon: <HiOutlineHeart className="w-6 h-6" />,
      text: 'גישה רגשית מותאמת לכל ילד'
    },
    {
      icon: <HiOutlineChartBar className="w-6 h-6" />,
      text: 'יצירת חווית למידה חיובית ומעצימה'
    },
  ];

  return (
    <section id="עליי" className="section-padding bg-gray-50">
      <div className="container-center">
        <h2 className="section-title">קצת עליי</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* תמונת מורה */}
          <motion.div 
            className="w-full md:w-2/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-xl shadow-sm bg-white">
              <img
                src="/ilanit.png"
                alt="אילנית - מורה מקצועית"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
          
          {/* תוכן טקסט */}
          <div className="w-full md:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
                שלום, אני שמחה להיות המורה של הילד/ה שלכם
              </h3>
              
              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                אני מאמינה שכל ילד לומד בדרך ייחודית משלו, ושתפקידי הוא לגלות את הדרך המיוחדת הזו ולהתאים את שיטות ההוראה כדי שהלמידה תהיה אפקטיבית, מעניינת ומעצימה.
              </p>
              
              <ul className="space-y-4">
                {bulletPoints.map((point, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-primary flex-shrink-0">
                      {point.icon}
                    </span>
                    <span className="text-gray-800">{point.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 