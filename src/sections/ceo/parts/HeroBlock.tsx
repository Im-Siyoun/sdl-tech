export function HeroBlock() {
  return (
    <section className="flex flex-col items-start justify-start gap-5 md:gap-6 lg:gap-8 max-w-2xl">
      {/* 타이틀 */}
      <div>
        <p className="text-accent text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-1">
          Message from the CEO
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Leading with Vision,
          <br />
          Delivering with Precision
        </h1>
      </div>

      {/* 인사말 */}
      <div className="space-y-3">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
          Welcome to SDL Tech.
        </p>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
          SDL Tech provides integrated logistics and technology services focused
          on efficiency, reliability, and operational clarity.
        </p>
      </div>

      {/* 핵심 사업 */}
      <div className="space-y-3">
        <h3 className="text-accent text-sm md:text-base font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Core Business
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed pl-6">
          International procurement, supply-chain management, 3PL operations,
          warehousing, spare-parts management, and maintenance support across
          Europe, North America, and Asia.
        </p>
      </div>

      {/* 운영 철학 */}
      <div className="space-y-3">
        <h3 className="text-accent text-sm md:text-base font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Approach
        </h3>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 leading-relaxed pl-6">
          We utilize structured processes and technology-driven systems to
          improve logistics performance, reduce operational risk, and support
          stable long-term operations.
        </p>
      </div>

      {/* 핵심 가치 */}
      <div className="space-y-3">
        <h3 className="text-accent text-sm md:text-base font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Principles
        </h3>
        <div className="flex flex-wrap gap-2 pl-6">
          {[
            'Reliability',
            'Integration',
            'Transparency',
            'Excellence',
            'Sustainability',
          ].map((value) => (
            <span
              key={value}
              className="px-3 py-1 text-xs sm:text-sm font-medium text-accent border border-accent/50 rounded-full"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      {/* 비전 */}
      <div className="border-l-2 border-accent pl-4 md:pl-5">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed italic">
          "SDL Tech will continue to expand its global presence and strengthen
          its service capability to meet the operational requirements of our
          partners."
        </p>
        <p className="mt-2 text-sm md:text-base text-white font-semibold">
          — CEO, SDL Tech
        </p>
      </div>
    </section>
  );
}
