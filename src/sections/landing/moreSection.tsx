export function MoreSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-16 py-6 md:py-8 lg:py-10 bg-primary text-accent">
      {/* 메인 문구 */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center leading-tight">
        Want to Learn More About Us?
      </h2>

      {/* 서브 문구 */}
      <p className="mt-2 md:mt-3 text-[10px] sm:text-xs md:text-sm lg:text-base text-center text-accent/80 max-w-2xl">
        Discover how SDL Tech is transforming global logistics with innovative
        solutions and trusted partnerships.
      </p>

      {/* CTA 버튼들 */}
      <div className="mt-4 md:mt-5 flex flex-col sm:flex-row gap-2">
        <a
          href="/about"
          className="px-4 py-1.5 md:px-5 md:py-2 bg-accent text-primary font-semibold text-[10px] md:text-xs rounded-lg hover:bg-accent/90 transition-colors text-center"
        >
          About Our Company
        </a>
        <a
          href="/contact"
          className="px-4 py-1.5 md:px-5 md:py-2 border-2 border-accent text-accent font-semibold text-[10px] md:text-xs rounded-lg hover:bg-accent/10 transition-colors text-center"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
