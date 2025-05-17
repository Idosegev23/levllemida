"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlinePhone, HiMenuAlt3, HiX } from 'react-icons/hi';
import classNames from 'classnames';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // מניעת גלילה כשהתפריט פתוח במובייל
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      const headerOffset = 90; // התאמה לגובה ההדר
      const totalOffset = offsetTop - headerOffset;
      
      window.scrollTo({
        top: totalOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={classNames(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        {
          'bg-white shadow-sm': isScrolled,
          'bg-transparent': !isScrolled,
        }
      )}
    >
      <div className="container-center flex justify-between items-center py-4 relative z-10">
        {/* Logo */}
        <div className="w-24 md:w-36">
          <Link href="/" className="block">
            <Image
              src="/logo.png"
              alt="לב ללמידה - לוגו"
              width={100}
              height={40}
              className="h-auto w-full"
              priority
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text-black p-2 z-20 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {isMenuOpen ? 
            <HiX className="w-5 h-5 transition-transform duration-200 ease-out" /> : 
            <HiMenuAlt3 className="w-5 h-5 transition-transform duration-200 ease-out" />
          }
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={classNames(
            'fixed inset-0 bg-black transition-opacity duration-500 md:hidden',
            {
              'opacity-30 pointer-events-auto': isMenuOpen,
              'opacity-0 pointer-events-none': !isMenuOpen
            }
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Navigation Menu */}
        <nav
          className={classNames(
            'fixed md:static inset-0 md:inset-auto flex flex-col md:flex-row justify-start md:justify-center items-start md:items-center',
            'md:flex transition-all duration-400 ease-in-out',
            'bg-white md:bg-transparent md:shadow-none',
            'transform md:transform-none w-64 md:max-w-none md:w-auto h-full md:h-auto right-0',
            'pt-24 md:pt-0 px-6 md:px-0',
            'shadow-[0_0_15px_rgba(0,0,0,0.07)]',
            {
              'translate-x-0': isMenuOpen,
              'translate-x-full': !isMenuOpen,
              'md:translate-x-0': true,
            }
          )}
        >
          <ul className="flex flex-col md:flex-row md:gap-6 text-sm w-full md:w-auto">
            {[
              { name: 'דף הבית', id: '' },
              { name: 'עליי', id: 'עליי' },
              { name: 'שיטות לימוד', id: 'שיטות-לימוד' },
              { name: 'שאלות ותשובות', id: 'שאלות-ותשובות' },
              { name: 'צור קשר', id: 'צור-קשר' }
            ].map((item, index) => (
              <li key={index} className="mb-3 md:mb-0 px-0 md:px-0 border-b border-gray-50 md:border-b-0 pb-3 md:pb-0 w-full md:w-auto">
                <a
                  href={item.id ? `#${item.id}` : '/'}
                  className="block text-gray-700 hover:text-primary transition-colors cursor-pointer text-base md:text-sm"
                  onClick={(e) => item.id ? handleSmoothScroll(e, item.id) : null}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="tel:+9720000000000" // יש להחליף במספר הטלפון האמיתי
        className="floating-whatsapp bg-primary text-white p-3 rounded-full"
        aria-label="התקשר עכשיו"
      >
        <HiOutlinePhone className="w-6 h-6" />
      </a>
    </header>
  );
};

export default Header; 