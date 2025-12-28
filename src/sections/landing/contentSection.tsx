import { ImageBlock } from './parts/ImageBlock';
import { TitleBlock } from './parts/TitleBlock';

export function ContentSection() {
  return (
    <div className="page-container relative flex flex-col h-screen bg-[url(/landing/content_bg_img.png)] bg-cover bg-center py-8 md:py-12 lg:py-16">
      <div className="flex-1 flex flex-col justify-center w-full max-w-[90%] mx-auto">
        <TitleBlock />
        <ImageBlock />
      </div>
    </div>
  );
}
