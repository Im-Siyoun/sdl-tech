import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentSection } from '../sections/landing/contentSection';
import { CopyrightSection } from '../sections/landing/copyrightSection';
import { FooterSection } from '../sections/landing/footerSection';
import { MainSection } from '../sections/landing/mainSection';
import { MoreSection } from '../sections/landing/moreSection';
import { ValuesSection } from '../sections/landing/valuesSection';

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      <MainSection />
      <ContentSection />
      <ValuesSection />
      <MoreSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  );
}
