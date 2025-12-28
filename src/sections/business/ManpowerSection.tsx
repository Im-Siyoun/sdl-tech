import { ManpowerBlock } from './parts/ManpowerBlock';

export function ManPowerSection() {
  return (
    <div
      id="manpower"
      className="relative flex flex-col min-h-screen bg-[url(/business/business_bg_3.jpg)] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        <ManpowerBlock />
      </div>
    </div>
  );
}
