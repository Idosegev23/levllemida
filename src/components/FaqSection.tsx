"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'מה משך השיעור?',
      answer: 'רוב השיעורים נמשכים 60 דקות, אך לתלמידים צעירים (כיתות א׳-ב׳) לעיתים מתאימים יותר שיעורים של 45 דקות. כל שיעור מותאם אישית לפי הגיל, הקשב והצורך של הילד/ה.'
    },
    {
      question: 'האם זה מתאים רק לילדים עם קשיים בלמידה?',
      answer: 'ממש לא. אילנית מלמדת גם תלמידים שזקוקים לתגבור ולחיזוק בבסיס, וגם תלמידים שמעוניינים בהעשרה והתקדמות מעבר לחומר הנלמד בבית הספר.'
    },
    {
      question: 'האם אילנית מתמחה בעבודה עם לקויות למידה?',
      answer: 'בהחלט. אילנית מתמחה בהוראה מתקנת, עם ניסיון בעבודה עם ילדים עם דיסלקציה, ADHD, קשיי קשב וריכוז, וחרדה לימודית. כל שיעור נבנה מתוך גישה אישית ומכילה.'
    },
    {
      question: 'מה קורה בין השיעורים?',
      answer: 'בתום כל שיעור נשלח סיכום מסודר להורים, הכולל את הנושאים שנלמדו, דגשים להמשך, ולעיתים גם משימות מותאמות לתרגול. כך ההורה שותף פעיל בתהליך הלמידה.'
    },
    {
      question: 'האם יש שיעורים מקוונים?',
      answer: 'השיעורים מתקיימים באשקלון בלבד, באופן פרונטלי. אין כרגע שיעורים בזום, מתוך הבנה שהלמידה הפיזית מאפשרת חיבור אישי טוב יותר לתלמידים הצעירים.'
    },
    {
      question: 'איך נראים השיעורים?',
      answer: 'השיעורים שלי מתקיימים באווירה נעימה, סבלנית ומאפשרת. אני משלבת מגוון כלים – החל ממשחקים פשוטים ודפי עבודה מותאמים ועד לאמצעים טכנולוגיים כמו תרגול אינטראקטיבי ובינה מלאכותית (במינון מדויק). הדגש הוא על הבנה אמיתית, הנאה מהדרך ובנייה של ביטחון עצמי – לא רק על פתרון נכון.'
    },
    {
      question: 'מה מדיניות ביטול שיעור?',
      answer: 'ניתן לבטל שיעור עד 24 שעות מראש ללא חיוב. ביטול מאוחר או אי-הגעה יחויבו בתשלום מלא, מתוך כבוד לזמן שנשמר במיוחד עבור הילד/ה שלכם.'
    },
    {
      question: 'איך מתחילים?',
      answer: 'מתחילים בשיחת היכרות קצרה – ללא התחייבות. אילנית לומדת להכיר את הילד/ה, את הצרכים והשאיפות, וביחד נבנית תכנית אישית ללמידה מדויקת ומקדמת.'
    }
  ];
  
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="שאלות-ותשובות" className="section-padding bg-white">
      <div className="container-center">
        <h2 className="section-title">שאלות נפוצות</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-100 last:border-b-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                className="w-full flex justify-between items-center py-5 px-1 text-right focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                <HiChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5 px-1 text-gray-600">
                      <p className="leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 