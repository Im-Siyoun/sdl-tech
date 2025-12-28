import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EngineeringSection } from '../sections/business/EngineeringSection';
import { LeasingSection } from '../sections/business/LeasingSection';
import { ManPowerSection } from '../sections/business/ManpowerSection';
import { SupplyContentSection } from '../sections/business/SupplyContentSection';
import { SupplySection } from '../sections/business/SupplySection';
import { CopyrightSection } from '../sections/landing/copyrightSection';
import { FooterSection } from '../sections/landing/footerSection';

export function BusinessPage() {
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
  }, [location]);

  return (
    <div className="w-full">
      <SupplySection />
      <SupplyContentSection />
      <LeasingSection />
      <ManPowerSection />
      <EngineeringSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  );
}
