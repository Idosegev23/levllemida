"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePaperAirplane, HiOutlinePhone } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childName: '',
    childAge: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'אירעה שגיאה בשליחת הטופס');
      }
      
      setIsSubmitted(true);
      
      // איפוס הטופס לאחר הצלחה
      setFormData({
        name: '',
        phone: '',
        childName: '',
        childAge: '',
        subject: '',
        message: ''
      });
      
      // איפוס ההודעה לאחר 5 שניות
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'אירעה שגיאה בשליחת הטופס');
      console.error('שגיאה בשליחת הטופס:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="צור-קשר" className="section-padding bg-white">
      <div className="container-center">
        <h2 className="section-title">צרו קשר</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="השם שלך"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="הטלפון שלך"
                  />
                </div>
                
                <div>
                  <label htmlFor="childName" className="block mb-2 text-sm font-medium text-gray-700">
                    שם הילד/ה
                  </label>
                  <input
                    type="text"
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="שם הילד/ה"
                  />
                </div>
                
                <div>
                  <label htmlFor="childAge" className="block mb-2 text-sm font-medium text-gray-700">
                    גיל הילד/ה
                  </label>
                  <input
                    type="text"
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="גיל הילד/ה או כיתה"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    תחום לימוד
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="" disabled>בחר/י תחום</option>
                    <option value="math">מתמטיקה</option>
                    <option value="hebrew">עברית</option>
                    <option value="both">מתמטיקה ועברית</option>
                    <option value="other">אחר</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  הודעה (אופציונלי)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="input-field"
                  placeholder="ספרו לי על האתגרים והצרכים של הילד/ה"
                />
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between">
                <button
                  type="submit"
                  className="primary-button w-full md:w-auto flex justify-center items-center gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'שולח...'
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="w-5 h-5" />
                      <span>שלחו פנייה</span>
                    </>
                  )}
                </button>
                
                <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
                  <a
                    href="https://wa.me/972545886779" // יש להחליף במספר הטלפון האמיתי
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button w-full md:w-auto flex justify-center items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5 text-green-600" />
                    <span>שלחו לי וואטסאפ</span>
                  </a>
                  
                  <a
                    href="tel:+972545886779" // יש להחליף במספר הטלפון האמיתי
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button w-full md:w-auto flex justify-center items-center gap-2"
                  >
                    <HiOutlinePhone className="w-5 h-5" />
                    <span>התקשרו אלי</span>
                  </a>
                </div>
              </div>
              
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 border border-red-100 bg-red-50 text-red-800 rounded-lg mt-4"
                >
                  {error}
                </motion.div>
              )}
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 border border-green-100 bg-green-50 text-green-800 rounded-lg mt-4"
                >
                  תודה! ההודעה נשלחה בהצלחה ואחזור אליכם בהקדם.
                </motion.div>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 