export function PartnershipSection() {
  const columns = [
    {
      title: 'What We Support',
      items: [
        'Efficient and transparent global supply-chain operations',
        'Stable logistics performance across continents',
        'Technology-driven process optimization',
      ],
    },
    {
      title: 'What We Offer',
      items: [
        'International sourcing & procurement',
        '3PL warehousing and distribution',
        'Spare-parts management',
        'Reverse logistics services',
      ],
    },
    {
      title: 'How We Support',
      items: [
        'Standardized and structured operating processes',
        'Risk reduction and improved operational efficiency',
        'Expansion of global logistics capability',
      ],
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-primary">
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            Working Together
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Partnership
          </h1>
        </div>

        {/* 3열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-accent text-base md:text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-accent" />
                {column.title}
              </h3>
              <ul className="space-y-4 pl-6">
                {column.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="relative pl-4 border-l border-white/20"
                  >
                    <div className="absolute -left-[3px] top-1.5 w-1.5 h-1.5 bg-accent rounded-full" />
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href="/contact"
          className="mx-auto w-60 px-4 py-1.5 md:px-5 md:py-2 border-2 border-accent text-accent font-semibold text-lg md:text-ls rounded-lg hover:bg-accent/10 transition-colors text-center mt-12"
        >
          working with us
        </a>
      </div>
    </div>
  );
}
