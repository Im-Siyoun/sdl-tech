import { MenuFrame } from '../common/frames/MenuFrame';

export function TopNavSection() {
  const menus = {
    'About Us': [
      { label: 'Overview', href: '/about/overview' },
      { label: 'CEO message', href: '/about/ceo' },
      { label: 'Our Values', href: '/about/values' },
    ],
    'Our Business': [
      { label: 'Solutions', href: '/business/solutions' },
      { label: 'Platform', href: '/business/platform' },
      { label: 'Partners', href: '/business/partners' },
    ],
    'Global Presence': [
      { label: 'Regions', href: '/global/regions' },
      { label: 'Offices', href: '/global/offices' },
    ],
    'Case Studies': [
      { label: 'Logistics', href: '/cases/logistics' },
      { label: 'Manufacturing', href: '/cases/manufacturing' },
    ],
    Contact: [
      { label: 'Inquiry', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
  } as const;

  const navItems = [
    'About Us',
    'Our Business',
    'Global Presence',
    'Case Studies',
    'Contact',
  ] as const;

  return (
    <div className="flex flex-row items-start justify-between w-full py-3 md:py-5 gap-0 text-accent">
      <div className="flex flex-col items-start justify-center pt-4 md:pt-8 shrink-0">
        <img
          className="w-32 md:w-40 lg:w-[20vw] lg:max-w-60 h-auto"
          src="/logo_light.png"
          alt="logo"
        />
      </div>
      <div className="flex w-full"></div>
      <ul className="hidden md:flex flex-row gap-4 lg:gap-6 list-none items-center whitespace-nowrap pt-4 md:pt-8 text-sm md:text-base">
        {navItems.map((name) => (
          <li key={name} className="relative group">
            <a href="#" className="px-2 py-1 block hover:opacity-90">
              {name}
            </a>

            <MenuFrame
              items={menus[name]}
              align={
                name === 'Contact' || name === 'Case Studies' ? 'right' : 'left'
              }
            />
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
