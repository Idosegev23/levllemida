"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreativeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "איך נראים השיעורים?",
      answer: "השיעורים שלי מתקיימים באווירה נעימה, סבלנית ומאפשרת. אני משלבת מגוון כלים – החל ממשחקים פשוטים ודפי עבודה מותאמים ועד לאמצעים טכנולוגיים כמו תרגול אינטראקטיבי ובינה מלאכותית (במינון מדויק) הדגש הוא על הבנה אמיתית, הנאה מהדרך ובנייה של ביטחון עצמי – לא רק על פתרון נכון.",
      color: "from-pink-500 to-rose-500"
    },
    {
      question: "כמה זמן לוקח לראות תוצאות?",
      answer: "כל ילד הוא עולם ומלואו, אבל לרוב אני רואה שינוי חיובי כבר בשיעורים הראשונים. שיפור משמעותי בביטחון העצמי ובגישה ללמידה מתחיל להיראות תוך 2-3 שבועות, ותוצאות מדידות בציונים בדרך כלל תוך חודש-חודשיים.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      question: "איך השיעורים מותאמים אישית?",
      answer: "אני מתחילה עם הערכה מעמיקה של סגנון הלמידה, החוזקות והאתגרים של הילד. לכל תלמיד אני בונה תוכנית לימוד ייחודית שלוקחת בחשבון את הקצב שלו, העניינים שלו, ואת הדרך שבה הוא קולט מידע הכי טוב.",
      color: "from-green-500 to-emerald-500"
    },
    {
      question: "מה המחיר של השיעורים?",
      answer: "המחיר נקבע בהתאם לצרכים הספציפיים ולתדירות השיעורים. אני מאמינה שהשקעה בחינוך של הילד היא השקעה הכי חשובה שיש. בואו נדבר ונתאים את הפתרון הכי מתאים למשפחה שלכם.",
      color: "from-purple-500 to-violet-500"
    },
    {
      question: "האם את מלמדת גם אונליין?",
      answer: "כן! אני מלמדת בזום באופן שמשלב את כל הכלים הדיגיטליים המתקדמים. השיעורים האונליין שלי אינטראקטיביים, מעניינים ויעילים בדיוק כמו השיעורים הפרונטליים. יש לי לוח דיגיטלי, משחקים מותאמים ודרכים יצירתיות לשמור על קשר ועל עניין.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="שאלות-נפוצות" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* כותרת */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            שאלות שעולות הרבה
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        {/* שאלות בעיצוב חדשני */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* כרטיס שאלה */}
              <motion.div
                className={`
                  relative overflow-hidden rounded-2xl cursor-pointer
                  ${openIndex === index 
                    ? 'bg-white shadow-lg' 
                    : 'bg-white/80 hover:bg-white shadow-sm hover:shadow-md'
                  }
                  transition-all duration-300
                `}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ y: openIndex === index ? 0 : -2 }}
              >
                {/* רקע גראדיאנט */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-0`}
                  animate={{ opacity: openIndex === index ? 0.05 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* תוכן השאלה */}
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-800 flex-1">
                      {faq.question}
                    </h3>
                    
                    {/* כפתור פתיחה/סגירה */}
                    <motion.div
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center ml-4
                        ${openIndex === index 
                          ? 'bg-primary text-white' 
                          : 'bg-slate-100 text-slate-600'
                        }
                      `}
                    >
                      <span className="text-xl font-light">+</span>
                    </motion.div>
                  </div>

                  {/* תשובה */}
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-slate-100 mt-4">
                          <p className="text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* קו צבעוני בצד */}
                <motion.div
                  className={`absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b ${faq.color}`}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* הודעה עידוד */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
            <p className="text-slate-700 text-lg mb-4">
              יש לכם שאלה נוספת? אני כאן בשבילכם
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
            >
              בואו נדבר
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CreativeFaqSection;
