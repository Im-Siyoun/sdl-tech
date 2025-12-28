export function HeroBlock() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 md:gap-5 lg:gap-6 max-w-xl">
      {/* 타이틀 */}
      <div>
        <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-1">
          Message from the CEO
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold leading-tight">
          Leading with Vision,
          <br />
          Delivering with Precision
        </h1>
      </div>

      {/* 인사말 */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
          Welcome to SDL Tech.
        </p>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 leading-relaxed">
          SDL Tech provides integrated logistics and technology services focused
          on efficiency, reliability, and operational clarity.
        </p>
      </div>

      {/* 핵심 사업 */}
      <div className="space-y-2">
        <h3 className="text-accent text-xs md:text-sm font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Core Business
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 leading-relaxed pl-6">
          International procurement, supply-chain management, 3PL operations,
          warehousing, spare-parts management, and maintenance support across
          Europe, North America, and Asia.
        </p>
      </div>

      {/* 운영 철학 */}
      <div className="space-y-2">
        <h3 className="text-accent text-xs md:text-sm font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Approach
        </h3>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/80 leading-relaxed pl-6">
          We utilize structured processes and technology-driven systems to
          improve logistics performance, reduce operational risk, and support
          stable long-term operations.
        </p>
      </div>

      {/* 핵심 가치 */}
      <div className="space-y-2">
        <h3 className="text-accent text-xs md:text-sm font-semibold flex items-center gap-2">
          <span className="w-4 h-0.5 bg-accent" />
          Our Principles
        </h3>
        <div className="flex flex-wrap gap-1.5 pl-6">
          {[
            'Reliability',
            'Integration',
            'Transparency',
            'Excellence',
            'Sustainability',
          ].map((value) => (
            <span
              key={value}
              className="px-2 py-0.5 text-[10px] sm:text-xs font-medium text-accent border border-accent/50 rounded-full"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      {/* 비전 */}
      <div className="border-l-2 border-accent pl-3 md:pl-4">
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-white/90 leading-relaxed italic">
          "SDL Tech will continue to expand its global presence and strengthen
          its service capability to meet the operational requirements of our
          partners."
        </p>
        <p className="mt-2 text-xs md:text-sm text-white font-semibold">
          — CEO, SDL Tech
        </p>
      </div>
    </section>
  );
}
