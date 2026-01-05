import { Link } from 'react-router-dom';
import { useContactModal } from '../../components/ContactModal';

export function FooterSection() {
  const { openModal } = useContactModal();
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
            <li>
              <Link to="/about" className="hover:underline">
                Business Overview
              </Link>
            </li>
            <li>
              <Link to="/about/ceo" className="hover:underline">
                Welcome Message
              </Link>
            </li>
            <li>
              <Link to="/#values" className="hover:underline">
                Core Values
              </Link>
            </li>
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
            <li>
              <Link to="/business#supply" className="hover:underline">
                Total Supply-Chain Solutions
              </Link>
            </li>
            <li>
              <Link to="/business#leasing" className="hover:underline">
                Real Estate Leasing & Management
              </Link>
            </li>
            <li>
              <Link to="/business#manpower" className="hover:underline">
                Manpower Supply & Workforce Solutions
              </Link>
            </li>
            <li>
              <Link to="/business#engineering" className="hover:underline">
                Reverse Engineering & System Analysis
              </Link>
            </li>
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
            <li>
              <Link to="/global" className="hover:underline">
                Global Presences
              </Link>
            </li>
            <li>
              <button
                onClick={openModal}
                className="hover:underline cursor-pointer"
              >
                Contact
              </button>
            </li>
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
            <li>TEL. +48 573 365 562</li>
            <li>@ EU@sdltech.net</li>
            <li>Mon–Fri 08:30–17:30 (CET)</li>
          </ul>
        </div>

        <div className="font-normal">
          <div className="flex flex-row gap-1.5 items-center">
            <div className="w-1.5 h-3 md:h-4 bg-accent-dark" />
            <div className="text-sm md:text-base font-bold text-primary-dark">
              SDL America
            </div>
          </div>

          <ul className="mt-1.5 md:mt-2 list-none space-y-0.5 md:space-y-1 text-primary-dark/80 text-[10px] md:text-xs lg:text-sm">
            <li>TEL. +1 (703) 383 4591</li>
            <li>@ info@sdltech.net</li>
            <li>Mon–Fri 09:00–18:00 (EST)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
