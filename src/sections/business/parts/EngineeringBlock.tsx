export function EngineeringBlock() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-8 lg:gap-16 w-full">
      {/* 오른쪽: 제목 */}
      <div className="shrink-0 lg:text-right">
        <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
          Our Business
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Reverse
          <br />
          Engineering
        </h1>
      </div>

      {/* 왼쪽: 줄글 */}
      <div className="flex-1 max-w-xl lg:max-w-2xl">
        <div className="relative pr-6 border-r-2 border-accent/50 lg:text-right">
          <div className="absolute -right-[5px] top-0 w-2 h-2 bg-accent rounded-full" />
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            SDL Tech analyzes and reconstructs the{' '}
            <span className="text-accent font-semibold">internal structure</span>,{' '}
            <span className="text-accent font-semibold">functionality</span>,{' '}
            <span className="text-accent font-semibold">data flow</span>, and{' '}
            <span className="text-accent font-semibold">algorithms</span> of existing systems and software.
          </p>
          
          <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
            Our reverse engineering services enable{' '}
            <span className="text-white font-medium">documentation, optimization, and modernization</span>{' '}
            of legacy technologies—reinforcing system reliability and supporting
            long-term operational continuity.
          </p>
        </div>
      </div>
    </div>
  );
}
