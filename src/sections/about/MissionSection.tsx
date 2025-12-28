export function MissionSection() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[url(/about/about_bg_1.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/landing/background_mask.png)] bg-cover bg-center" />
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-[180px] py-24 md:py-32 lg:py-40">
        {/* 섹션 헤더 */}
        <div className="mb-12 md:mb-16">
          <p className="text-accent text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
            What Drives Us
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
            Our Mission
          </h1>
        </div>

        {/* 미션 내용 */}
        <div className="max-w-3xl">
          <div className="relative pl-6 border-l-2 border-accent/50">
            <div className="absolute -left-[5px] top-0 w-2 h-2 bg-accent rounded-full" />

            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Our mission is to advance global logistics through{' '}
              <span className="text-accent font-semibold">
                intelligent technology
              </span>
              ,{' '}
              <span className="text-accent font-semibold">
                transparent operations
              </span>
              , and{' '}
              <span className="text-accent font-semibold">
                sustainable engineering
              </span>
              .
            </p>

            <p className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed">
              Delivering reliable and integrated solutions that help our
              partners move smarter and operate with excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
