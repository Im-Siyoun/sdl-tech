export function TitleBlock() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:gap-0 place-content-between">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-dark font-bold leading-tight lg:leading-snug">
        Smart Development
        <br />
        Logistics & Technology
      </h1>

      <h2 className="text-xs sm:text-sm md:text-base lg:text-lg text-primary-dark font-medium leading-relaxed">
        This is a placeholder text for layout testing.
        <br />
        The real content will be added later.
        <br />
        Use this only to check line spacing and typography.
        <br />
        These sentences do not have any actual meaning.
        <br />
        Amazing copy will live here someday.
      </h2>
    </div>
  );
}
