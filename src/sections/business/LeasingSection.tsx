import { LeasingBlock } from './parts/LeasingBlock';

export function LeasingSection() {
  return (
    <div
      id="leasing"
      className="relative flex flex-col min-h-screen bg-[url(/business/business_bg_2.png)] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        <LeasingBlock />
      </div>
    </div>
  );
}
