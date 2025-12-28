import { ValuesBlock } from './parts/ValuesBlock';
import { ValuesTitleBlock } from './parts/ValuesTitleBlock';

export function ValuesSection() {
  return (
    <div className="page-container h-screen relative flex flex-col bg-[url(/landing/values_background.png)] bg-cover bg-center py-8 md:py-12 lg:py-16">
      <div className="relative flex-1 flex flex-col justify-center w-[90%] mx-auto">
        <ValuesTitleBlock />
        <ValuesBlock />
      </div>
    </div>
  );
}
