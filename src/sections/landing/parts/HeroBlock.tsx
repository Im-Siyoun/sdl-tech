export function HeroBlock() {
  return (
    <section className="flex flex-col items-start justify-start gap-2 md:gap-4 lg:gap-5">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-accent font-semibold leading-tight md:leading-snug lg:leading-tight">
        Engineering the Future of
        <br />
        Smart Logistics
      </h1>

      <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-accent font-light leading-relaxed">
        SDL Tech is redefining global logistics through data-driven
        intelligence.
        <br className="hidden sm:block" />
        We build unified platforms that integrate WMS, TMS, and asset-tracking
        systems
        <br className="hidden md:block" />
        to optimize complex supply chains and transportation operations.
        <br className="hidden md:block" />
        Trusted by global logistics operators across Asia, Europe, and North
        America,
        <br className="hidden lg:block" />
        we drive efficiency, visibility, and cost optimization at scale.
      </h2>
    </section>
  );
}
