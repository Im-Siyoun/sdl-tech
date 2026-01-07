import { Link } from 'react-router-dom';
import { MenuFrame } from './frames/MenuFrame';
import { useContactModal } from '../../components/ContactModal';

export function NavSection() {
  const { openModal } = useContactModal();
  const menus = {
    'About Us': [
      { label: 'Overview', href: '/about' },
      { label: 'CEO message', href: '/about/ceo' },
      { label: 'Our Values', href: '/#values' },
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
    <div className="flex flex-row items-center justify-between w-full py-5 text-accent bg-primary">
      <Link to="/" className="shrink-0">
        <img
          className="w-[10vw] max-w-40 h-auto cursor-pointer"
          src="/logo_light.png"
          alt="logo"
        />
      </Link>

      <div className="flex-1" />

      <ul className="flex flex-row gap-6 list-none items-center whitespace-nowrap">
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
    </div>
  );
}
