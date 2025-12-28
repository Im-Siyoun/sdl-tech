import { MissionSection } from "../sections/about/MissionSection";
import { PartnershipSection } from "../sections/about/PartnershipSection";
import { StepSection } from "../sections/about/StepSection";
import { CopyrightSection } from "../sections/landing/copyrightSection";
import { FooterSection } from "../sections/landing/footerSection";

export function AboutPage() {
  return (
    <div className="w-full">
      <StepSection />
      <MissionSection />
      <PartnershipSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  )
}