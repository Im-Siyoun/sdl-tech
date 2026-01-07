import { Link } from 'react-router-dom';
import { MenuFrame } from '../common/frames/MenuFrame';
import { useContactModal } from '../../components/ContactModal';

export function TopNavSection() {
  const { openModal } = useContactModal();
  const menus = {
    'About Us': [
      { label: 'Overview', href: '/about' },
      { label: 'CEO message', href: '/about/ceo' },
      { label: 'Our Values', href: '/#values'},
    ],
    'Our Business': [
      {
        label: 'Total Supply-Chain Solution',
        href: '/business',
        scrollTo: 'supply',
      },
      { label: 'Real Estate Leasing', href: '/business', scrollTo: 'leasing' },
      { label: 'Manpower Supply', href: '/business', scrollTo: 'manpower' },
      {
        label: 'Reverse Engineering',
        href: '/business',
        scrollTo: 'engineering',
      },
    ],
    'Global Presence': [],
    Contact: [],
  } as const;

  const navItems = [
    'About Us',
    'Our Business',
    'Global Presence',
    'Contact',
  ] as const;

  const directLinks: Record<string, string> = {
    'About Us': '/about',
    'Our Business': '/business',
    'Global Presence': '/global',
  };

  return (
    <div className="flex flex-row items-start justify-between w-full py-3 md:py-5 gap-0 text-accent">
      <Link
        to="/"
        className="flex flex-col items-start justify-center pt-4 md:pt-8 shrink-0"
      >
        <img
          className="w-32 md:w-40 lg:w-[20vw] lg:max-w-60 h-auto cursor-pointer"
          src="/logo_light.png"
          alt="logo"
        />
      </Link>
      <div className="flex w-full"></div>
      <ul className="hidden md:flex flex-row gap-4 lg:gap-6 list-none items-center whitespace-nowrap pt-4 md:pt-8 text-sm md:text-base">
        {navItems.map((name) => (
          <li key={name} className="relative group">
            {name === 'Contact' ? (
              <button
                onClick={openModal}
                className="px-2 py-1 block hover:opacity-90 cursor-pointer"
              >
                {name}
              </button>
            ) : (
              <a
                href={directLinks[name] || '#'}
                className="px-2 py-1 block hover:opacity-90"
              >
                {name}
              </a>
            )}

            {menus[name].length > 0 && (
              <MenuFrame items={menus[name]} align="left" />
            )}
          </li>
        ))}
      </ul>
      {/* 모바일 햄버거 메뉴 */}
      <button className="md:hidden pt-4 text-accent">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
}
