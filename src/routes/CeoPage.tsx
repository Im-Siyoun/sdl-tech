import { CeoSection } from "../sections/ceo/CeoSection";
import { CopyrightSection } from "../sections/landing/copyrightSection";
import { FooterSection } from "../sections/landing/footerSection";

export function CeoPage() {  
  return (
    <div className="w-full">
      <CeoSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  )

}