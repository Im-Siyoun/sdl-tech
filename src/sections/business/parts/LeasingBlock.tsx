export function LeasingBlock() {
  const features = [
    {
      title: 'Bonded & General Warehouses',
      description:
        'Secure storage facilities for customs-cleared and general goods.',
    },
    {
      title: 'Office Spaces',
      description: 'Modern workspaces designed for operational efficiency.',
    },
    {
      title: 'Staff Accommodations',
      description: 'Comfortable housing solutions for on-site personnel.',
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 w-full">
      <div className="flex-1 flex flex-col gap-6 max-w-2xl">
        <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
          We provide industrial real estate leasing in both{' '}
          <span className="text-accent font-semibold">Poland</span> and{' '}
          <span className="text-accent font-semibold">Canada</span>, supporting
          seamless logistics and operational activities for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
            >
              <h3 className="text-white text-sm md:text-base font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="shrink-0 text-right">
        <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
          Our Business
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Real
          <br />
          Estate
          <br />
          Leasing
        </h1>
      </div>
    </div>
  );
}