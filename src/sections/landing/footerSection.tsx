export function FooterSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between bg-[#EDEDED] px-6 md:px-10 lg:px-16 py-4 md:py-5 lg:py-6 text-black text-xs md:text-sm lg:text-base gap-4 lg:gap-0">
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              About Us
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>business overview</li>
            <li>CEO introduce</li>
            <li>core values</li>
          </ul>
        </div>
        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              Our Services
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>Total Supply-Chain Solutions</li>
            <li>Real Estate Leasing & Management</li>
            <li>Manpower Supply & Workforce Solutions</li>
            <li>Reverse Engineering & System Analysis</li>
          </ul>
        </div>
        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              About Company
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>Global Presences</li>
            <li>Timeline</li>
            <li>Case Studies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              SDL Europe
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>Address Warsaw HQ</li>
            <li>TEL. +82 10 1234 5678</li>
            <li>e-mail test@example.com</li>
            <li>Mon–Fri 09:00–18:00 (CET) </li>
          </ul>
        </div>

        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              SDL Korea
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>Address Warsaw HQ</li>
            <li>TEL. +82 10 1234 5678</li>
            <li>e-mail test@example.com</li>
            <li>Mon–Fri 09:00–18:00 (CET) </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
