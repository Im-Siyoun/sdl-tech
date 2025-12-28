interface SupplyContentFrameProps {
  title: string;
  content: string;
  imgPath: string;
}
export function SupplyContentFrame({
  title,
  content,
  imgPath,
}: SupplyContentFrameProps) {
  return (
    <div className="flex flex-col items-center h-full justify-center w-lg px-4">
      <div className="h-12 w-12 bg-cover bg-center" style={{ backgroundImage: `url(/business/${imgPath})` }}/>
      <p className="text-black text-lg font-bold text-center mt-2 wrap-break-word">
        {title}
      </p>
      <p className="text-black text-base font-regular text-center mt-2 wrap-break-word">
        {content}
      </p>
    </div>
  );
}
