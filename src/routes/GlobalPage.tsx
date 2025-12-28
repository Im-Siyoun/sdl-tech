import { RegionSection } from "../sections/global/RegionSection";
import { CopyrightSection } from "../sections/landing/copyrightSection";
import { FooterSection } from "../sections/landing/footerSection";

export function GlobalPage() {
  return (
    <div className="w-full">
      <RegionSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  )
}