export function SupplyBlock() {
  const features = [
    {
      keyword: 'Regional Coverage',
      description:
        'Operations centered in Poland for Europe and Canada for North America, enabling seamless regional coverage and fast, reliable service.',
    },
    {
      keyword: 'Specialized Components',
      description:
        'Procuring and delivering specialized industrial components—excluding hazardous chemicals—supporting railway and industrial clients.',
    },
    {
      keyword: 'Door-to-Door',
      description:
        'Managing the entire logistics process from origin to final destination, including customs clearance, international transportation, and last-mile delivery.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 w-full">
      {/* 왼쪽: 제목 */}
      <div className="shrink-0">
        <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
          Our Business
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Total
          <br />
          Supply-Chain
          <br />
          Solution
        </h1>
      </div>

      {/* 오른쪽: 3개의 카드 */}
      <div className="flex-1 flex flex-col gap-4 max-w-xl lg:max-w-2xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-accent text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              {feature.keyword}
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
