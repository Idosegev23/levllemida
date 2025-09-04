"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const MagazineAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="עליי" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Layout מגזין - גריד לא סימטרי */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          
          {/* עמודה ראשונה - תמונה גדולה */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-[40px] overflow-hidden bg-white shadow-lg"
            >
              <Image
                src="/ilanit.png"
                alt="אילנית - מורה מקצועית"
                fill
                className="object-cover"
                priority
              />
              
              {/* טקסט על התמונה */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-white text-2xl font-bold"
                >
                  אילנית מייסדת &quot;לב ללמידה&quot;
                </motion.h3>
              </div>
            </motion.div>
          </div>

          {/* עמודה שנייה - תוכן */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* כותרת עם מספר */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="text-[120px] font-black text-primary/10 absolute -top-16 -left-4">02</div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 relative z-10">
                קצת עליי
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mt-4"></div>
            </motion.div>

            {/* תוכן מגזין - בלוקים */}
            <div className="space-y-6">
              
              {/* בלוק 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">העבר שלי</h4>
                    <p className="text-slate-600 leading-relaxed">
                      בעברי הייתי רואת חשבון. עבדתי עם מספרים, טבלאות ודוחות - 
                      אבל עמוק בפנים ידעתי שהלב שלי נמצא במקום אחר.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* בלוק 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-highlight-yellow/5 p-6 rounded-3xl border border-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-highlight-yellow/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-4 h-4 bg-highlight-yellow/60 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-700 mb-2">הצעד האמיץ</h4>
                    <p className="text-slate-600 leading-relaxed">
                      ואז עשיתי צעד אמיץ. עזבתי את עולם המספרים והלוגיקות, 
                      כדי לעזור לילדים להבין אותם.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* בלוק 3 - מודגש */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-primary p-6 rounded-3xl text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white/60 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">החזון שלי</h4>
                      <p className="leading-relaxed opacity-95">
                        לייצר שינוי בתפיסת הלמידה: להפוך אותה לחוויה הוליסטית, 
                        חכמה, רגשית ומעצימה באמת.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* נקודות מפתח - גריד */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { text: "הוראה מתקנת", color: "bg-red-50 border-red-100" },
                { text: "AI וטכנולוגיה", color: "bg-blue-50 border-blue-100" },
                { text: "מרחב בטוח", color: "bg-pink-50 border-pink-100" },
                { text: "התאמה אישית", color: "bg-purple-50 border-purple-100" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`${item.color} p-4 rounded-2xl border text-center transition-all duration-200`}
                >
                  <div className="text-sm font-medium text-slate-700">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default MagazineAboutSection;
