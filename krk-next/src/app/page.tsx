'use client';

import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Certifications from '../components/Certifications';
import Clients from '../components/Clients';
import Sustainability from '../components/Sustainability';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Home() {
  useEffect(() => {
    // SCROLL REVEAL (IntersectionObserver for scroll fade/slide-in animations)
    const rvObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            rvObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.rv');
    elements.forEach((el) => rvObs.observe(el));

    return () => {
      elements.forEach((el) => {
        try {
          rvObs.unobserve(el);
        } catch (err) {
          // ignore
        }
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Stats />
      <Certifications />
      <Clients />
      <Sustainability />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
