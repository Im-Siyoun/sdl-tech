export function ManpowerBlock() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 w-full">
      {/* 왼쪽: 제목 */}
      <div className="shrink-0">
        <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
          Our Business
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
          Manpower
          <br />
          Supply
        </h1>
      </div>

      {/* 오른쪽: 줄글 */}
      <div className="flex-1 max-w-xl lg:max-w-2xl">
        <div className="relative pl-6 border-l-2 border-accent/50">
          <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent rounded-full" />
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Leveraging a diverse and reliable talent pool, SDL Tech offers
            professional manpower solutions across both{' '}
            <span className="text-accent font-semibold">Europe</span> and{' '}
            <span className="text-accent font-semibold">America</span>.
          </p>
          
          <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
            We specialize in supplying skilled personnel for{' '}
            <span className="text-white font-medium">ship and railway maintenance</span>,
            ensuring our partners have access to experienced technicians and
            operational staff whenever needed.
          </p>
        </div>
      </div>
    </div>
  );
}
