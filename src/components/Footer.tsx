import React from 'react';
import Link from 'next/link';
import { FaHeart, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-varela">לב ללמידה</h3>
            <p className="mb-6">
              שיעורים פרטיים מותאמים אישית בעברית ומתמטיקה לתלמידי בית ספר יסודי.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white text-primary p-2 rounded-full hover:bg-highlight-yellow transition-colors"
                aria-label="פייסבוק"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white text-primary p-2 rounded-full hover:bg-highlight-yellow transition-colors"
                aria-label="אינסטגרם"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/9720545886779" // יש להחליף במספר הטלפון האמיתי
                className="bg-white text-primary p-2 rounded-full hover:bg-highlight-yellow transition-colors"
                aria-label="וואטסאפ"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-varela">קישורים מהירים</h3>
            <ul className="space-y-2">
              {['דף הבית', 'עליי', 'שיטות לימוד', 'שאלות ותשובות', 'צור קשר'].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href={index === 0 ? '/' : `/#${item.replace(/\s+/g, '-')}`}
                      className="hover:text-highlight-yellow transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 font-varela">צרו קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaPhone className="flex-shrink-0" />
                <span>054-588-6779</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="flex-shrink-0" />
                <span>ilanit.leibovich@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="flex-shrink-0" />
                <span>וואטסאפ: 054-588-6779</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="flex items-center justify-center gap-2">
            <span>לב ללמידה © {currentYear}. כל הזכויות שמורות.</span>
            <FaHeart className="text-highlight-yellow" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 