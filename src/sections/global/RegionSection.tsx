export function RegionSection() {
  const regions = [
    {
      status: 'active',
      locations: [
        {
          name: 'Poland (Headquarters)',
          city: 'Warsaw',
          note: 'Detailed address to be updated upon office lease finalization',
        },
        {
          name: 'Canada',
          city: 'Calgary / Edmonton',
          note: 'Detailed address to be updated upon office lease finalization',
        },
      ],
    },
    {
      status: 'upcoming-2026',
      locations: [
        {
          name: 'Uzbekistan',
          city: 'TBD',
          note: 'Branch or subsidiary opening planned for 2026',
        },
        {
          name: 'United States',
          city: 'TBD',
          note: 'Branch opening planned for 2026',
        },
      ],
    },
    {
      status: 'upcoming-2027',
      locations: [
        {
          name: 'Egypt',
          city: 'TBD',
          note: 'Subsidiary opening planned for 2027',
        },
        {
          name: 'Greece',
          city: 'TBD',
          note: 'Subsidiary opening planned for 2027',
        },
      ],
    },
    {
      status: 'planned',
      locations: [
        {
          name: 'South Korea',
          city: 'TBD',
          note: 'Headquarters relocation planned for future',
        },
      ],
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[url(/global/global_bg_1.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        {/* 섹션 헤더 */}
        <div className="mb-12 md:mb-16">
          <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            Global Presence
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Our Locations
          </h1>
        </div>

        {/* 지역 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Active Offices */}
          <div className="flex flex-col">
            <h3 className="text-accent text-base md:text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Active Offices
            </h3>
            <div className="space-y-4">
              {regions[0].locations.map((loc, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white text-base md:text-lg font-semibold">
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-accent text-sm md:text-base font-medium mb-1">
                    {loc.city}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming 2026 */}
          <div className="flex flex-col">
            <h3 className="text-white/70 text-base md:text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-white/50 rounded-full" />
              Opening in 2026
            </h3>
            <div className="space-y-4">
              {regions[1].locations.map((loc, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 opacity-80"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/90 text-base md:text-lg font-semibold">
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming 2027 */}
          <div className="flex flex-col">
            <h3 className="text-white/70 text-base md:text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-white/50 rounded-full" />
              Opening in 2027
            </h3>
            <div className="space-y-4">
              {regions[2].locations.map((loc, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 opacity-80"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/90 text-base md:text-lg font-semibold">
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs md:text-sm">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plans */}
          <div className="flex flex-col">
            <h3 className="text-white/70 text-base md:text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-white/30 rounded-full" />
              Future Headquarters
            </h3>
            <div className="space-y-4">
              {regions[3].locations.map((loc, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 opacity-70"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white/80 text-base md:text-lg font-semibold">
                      {loc.name}
                    </span>
                  </div>
                  <p className="text-white/50 text-xs md:text-sm">{loc.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
