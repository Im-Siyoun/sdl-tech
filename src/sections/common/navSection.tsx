import { MenuFrame } from "./frames/MenuFrame";

export function NavSection() {
  const menus = {
    "About Us": [
      { label: "Overview", href: "/about/overview" },
      { label: "CEO message", href: "/about/ceo" },
      { label: "Our Values", href: "/about/values" },
    ],
    "Our Business": [
      { label: "Solutions", href: "/business/solutions" },
      { label: "Platform", href: "/business/platform" },
      { label: "Partners", href: "/business/partners" },
    ],
    "Global Presence": [
      { label: "Regions", href: "/global/regions" },
      { label: "Offices", href: "/global/offices" },
    ],
    "Case Studies": [
      { label: "Logistics", href: "/cases/logistics" },
      { label: "Manufacturing", href: "/cases/manufacturing" },
    ],
    "Contact": [
      { label: "Inquiry", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  } as const;

  const navItems = ["About Us", "Our Business", "Global Presence", "Case Studies", "Contact"] as const;

  return (
    <div className="flex flex-row items-center justify-between w-full py-5 text-accent bg-primary">
      <div className="shrink-0">
        <img className="w-[10vw] max-w-40 h-auto" src="/logo_light.png" alt="logo" />
      </div>

      <div className="flex-1" />

      <ul className="flex flex-row gap-6 list-none items-center whitespace-nowrap">
        {navItems.map((name) => (
          <li key={name} className="relative group">
            <a
              href="#"
              className="px-2 py-1 block hover:opacity-90"
              // 클릭 이동 막고 hover만 쓰고 싶으면 아래 주석 해제
              // onClick={(e) => e.preventDefault()}
            >
              {name}
            </a>

            {/* 드롭다운 */}
            <MenuFrame
              items={menus[name]}
              align={name === "Contact" || name === "Case Studies" ? "right" : "left"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
