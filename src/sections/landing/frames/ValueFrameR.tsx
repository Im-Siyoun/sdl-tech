interface ValueFrameProps {
  title: string;
  content: string;
  imgPath: string;
}

export function ValueFrameR({ title, content, imgPath }: ValueFrameProps) {
  return (
    <div className="flex flex-col w-full md:w-[45%] lg:w-[25vh] items-center text-center">
      <div
        className="w-20 sm:w-24 md:w-28 lg:w-36 xl:w-40 aspect-square clip-hex bg-cover bg-center"
        style={{ backgroundImage: `url(/landing/${imgPath})` }}
      />
      <div
        className="mb-1 md:mb-2 h-0 w-0"
        style={{
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderBottom: '7px solid rgba(255,255,255,0.8)',
        }}
      />
      <p className="whitespace-pre text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg px-2 md:px-3 mb-1 md:mb-2">
        {content}
      </p>
      <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold">
        {title}
      </h1>
    </div>
  );
}
