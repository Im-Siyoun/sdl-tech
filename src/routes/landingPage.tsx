import { ContentSection } from '../sections/landing/contentSection';
import { CopyrightSection } from '../sections/landing/copyrightSection';
import { FooterSection } from '../sections/landing/footerSection';
import { MainSection } from '../sections/landing/mainSection';
import { MoreSection } from '../sections/landing/moreSection';
import { ValuesSection } from '../sections/landing/valuesSection';

export function LandingPage() {
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
