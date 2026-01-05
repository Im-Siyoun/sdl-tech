import { HeroBlock } from './parts/HeroBlock';
import { ProfileBlock } from './parts/ProfileBlock';

export function CeoSection() {
  return (
    <div className="page-container min-h-screen relative flex flex-col bg-[url(/ceo/background_mask.png)] bg-cover bg-center pt-24 md:pt-32 lg:pt-40 pb-8 md:pb-12 px-6 md:px-12 lg:px-[180px] overflow-hidden">
      <div className="flex-1 flex flex-col lg:flex-row items-start lg:items-center gap-8">
        <div className="flex-1 z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
          <HeroBlock />
          <ProfileBlock />
        </div>
      </div>
    </div>
  );
}
