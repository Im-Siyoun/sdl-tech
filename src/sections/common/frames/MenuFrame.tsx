type MenuItem = {
  label: string;
  href?: string;
};

export function MenuFrame({
  items,
  align = 'left',
}: {
  items: readonly MenuItem[];
  align?: 'left' | 'right';
}) {
  return (
    <div
      className={[
        'absolute top-full pt-2 z-50',
        align === 'right' ? 'right-0' : 'left-0',
        'opacity-0 translate-y-1 pointer-events-none',
        'group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto',
        'transition duration-200 ease-out',
      ].join(' ')}
    >
      <div className="relative min-w-[220px] bg-white text-primary-dark shadow-lg border border-black/10 rounded-md">
        <ul className="list-none p-4 space-y-2">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href ?? '#'}
                className="block text-lg leading-snug text-primary-dark hover:text-accent-dark"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
