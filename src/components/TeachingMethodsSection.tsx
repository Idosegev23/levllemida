"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineChartBar, HiOutlineChip, HiOutlineHeart } from 'react-icons/hi';

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const MethodCard = ({ icon, title, description, delay }: MethodCardProps) => (
  <motion.div
    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:border-gray-200 transition-colors"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TeachingMethodsSection = () => {
  const methods = [
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: 'למידה חווייתית',
      description: 'משחקים לימודיים שהופכים את הלמידה לחוויה מהנה, מגבירים מוטיבציה ומעודדים השתתפות פעילה',
    },
    {
      icon: <HiOutlineChip className="w-8 h-8" />,
      title: 'שילוב AI וטכנולוגיה',
      description: 'שימוש בכלים טכנולוגיים מתקדמים ובינה מלאכותית להתאמת תכני הלימוד וקצב הלמידה',
    },
    {
      icon: <HiOutlineHeart className="w-8 h-8" />,
      title: 'גישה רגשית תומכת',
      description: 'יצירת סביבת למידה מכילה ותומכת, המחזקת ביטחון עצמי ואמונה ביכולות',
    },
    {
      icon: <HiOutlineChartBar className="w-8 h-8" />,
      title: 'התאמה אישית',
      description: 'זיהוי סגנון הלמידה האישי של כל תלמיד והתאמת שיטות הוראה וחומרי לימוד בהתאם',
    },
  ];

  return (
    <section id="שיטות-לימוד" className="section-padding bg-white">
      <div className="container-center">
        <h2 className="section-title">שיטות הלימוד שלי</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {methods.map((method, index) => (
            <MethodCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodsSection; 