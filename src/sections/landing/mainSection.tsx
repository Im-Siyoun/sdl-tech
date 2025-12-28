import { useEffect, useState } from 'react';
import { TopNavSection } from './topNavSection';
import { HeroBlock } from './parts/HeroBlock';
import { NavSection } from '../common/navSection';

export function MainSection() {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-container h-screen relative flex flex-col bg-[url(/landing/background_img.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />

      <header className="fixed top-0 left-0 w-full z-50">
        <div
          className={`transition-all duration-300 ${
            atTop ? 'bg-transparent' : 'bg-primary backdrop-blur-md shadow-sm'
          }`}
        >
          <div className="mx-auto w-full px-6 md:px-12 lg:px-[180px]">
            <div
              className={`overflow-visible transition-[max-height,opacity,transform] duration-300 ease-out ${
                atTop
                  ? 'max-h-60 opacity-100 translate-y-0'
                  : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              <TopNavSection />
            </div>

            <div
              className={`overflow-visible transition-[max-height,opacity,transform] duration-300 ease-out ${
                atTop
                  ? 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                  : 'max-h-24 opacity-100 translate-y-0'
              }`}
            >
              <NavSection />
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full mx-auto px-6 md:px-12 lg:px-[180px]">
          <HeroBlock />
        </div>
      </div>
    </div>
  );
}
