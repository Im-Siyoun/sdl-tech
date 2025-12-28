export function StepSection() {
  const steps = [
    {
      year: '2025',
      title: 'Foundation',
      description:
        'SDL Tech founded to deliver integrated logistics, procurement, and engineering services across Europe, North America, and Asia.',
    },
    {
      year: 'Growth',
      title: 'Core Operations',
      description:
        'Expansion of core operations in supply-chain management, 3PL warehousing, spare-parts procurement, and reverse logistics.',
    },
    {
      year: 'Future',
      title: 'Innovation',
      description:
        'Strengthening of technology-driven logistics solutions and continued growth of the global network.',
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-[url(/business/business_bg_1.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        {/* 섹션 헤더 */}
        <div className="mb-12 md:mb-16">
          <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            Our Journey
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Building the Future
            <br />
            of Global Logistics
          </h1>
        </div>

        {/* 타임라인 */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              {/* 연결선 (데스크탑) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-8 h-px bg-accent/30" />
              )}

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent text-xl md:text-2xl font-bold">
                    {step.year}
                  </span>
                  <div className="flex-1 h-px bg-accent/30" />
                </div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
