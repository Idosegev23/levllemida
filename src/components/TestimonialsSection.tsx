"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChevronRight, HiOutlineChevronLeft, HiOutlineStar } from 'react-icons/hi';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'יעל כהן',
      role: 'אמא של דניאל, כיתה ד׳',
      content: 'השיטה של לב ללמידה שינתה את היחס של הבן שלי ללמידה. פתאום הוא מחכה לשיעורים ורואה בהם משהו כיף, ולא משימה שהוא חייב לעשות.',
      rating: 5
    },
    {
      id: 2,
      name: 'יובל לוי',
      role: 'אבא של מיכל, כיתה ג׳',
      content: 'הבת שלי התקשתה מאוד במתמטיקה, ואחרי חודשיים של שיעורים היא פתאום מבינה את החומר ואפילו עוזרת לחברים שלה. השינוי לא היה רק בציונים אלא גם בביטחון העצמי שלה.',
      rating: 5
    },
    {
      id: 3,
      name: 'מיכל ברקוביץ',
      role: 'אמא של איתי, כיתה ה׳',
      content: 'השילוב של משחק וטכנולוגיה בשיטת הלימוד עוזר לבן שלי להתרכז ולהתחבר לחומר הנלמד. הוא מתקדם בקצב מדהים והביטחון שלו עלה פלאים!',
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const displayedTestimonials = isMobile
    ? [testimonials[currentSlide]]
    : testimonials;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-center">
        <h2 className="section-title">מה אומרים ההורים</h2>
        
        <div className="relative mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <HiOutlineStar 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-highlight-yellow fill-highlight-yellow' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="mb-6 text-gray-700 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-light-pink bg-opacity-30 flex items-center justify-center text-primary font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="mr-3">
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* כפתורי ניווט במובייל */}
          {isMobile && (
            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-200 text-gray-600"
                aria-label="המלצה קודמת"
              >
                <HiOutlineChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block w-2 h-2 rounded-full ${
                      idx === currentSlide ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-200 text-gray-600"
                aria-label="המלצה הבאה"
              >
                <HiOutlineChevronLeft className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 