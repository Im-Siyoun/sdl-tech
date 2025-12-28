import { Outlet } from 'react-router-dom';
import { NavSection } from '../sections/common/navSection';

export function MainLayout() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-primary">
        <div className="mx-auto w-full px-6 md:px-12 lg:px-[180px]">
          <NavSection />
        </div>
      </header>
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
