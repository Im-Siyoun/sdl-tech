export function ImageBlock() {
  return (
    <div className="mt-4 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[1fr] gap-1.5 lg:h-[45vh]">
      {/* Total Supply-Chain Solution - 모바일: 전체, lg: 2x2 */}
      <div className="flex col-span-1 md:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 rounded-xl bg-[url(/landing/content_img_1.png)] bg-cover bg-center h-32 md:h-40 lg:h-full">
        <div className="flex flex-col gap-1 mr-auto mt-auto w-full md:w-[80%] lg:w-[73%] p-3 md:pl-4 lg:pl-6 pb-3 lg:pb-5">
          <h3 className="text-sm md:text-base lg:text-lg font-bold">
            Total Supply-Chain Solution
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm">
            Specialized parts procurement, customs clearance, and full
            Door-to-Door delivery from origin to your final destination.
          </p>
        </div>
      </div>
      {/* Real Estate Leasing */}
      <div className="flex col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 rounded-xl bg-[url(/landing/content_img_3.png)] bg-cover bg-center h-32 md:h-40 lg:h-full">
        <div className="flex flex-col gap-1 mr-auto mt-auto w-full md:w-[85%] lg:w-[80%] p-3 md:pl-4 lg:pl-6 pb-3 lg:pb-5">
          <h3 className="text-sm md:text-base lg:text-lg font-bold">
            Real Estate Leasing
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm">
            Warehouses, bonded storage, offices, and accommodations in Poland &
            Canada.
          </p>
        </div>
      </div>
      {/* Manpower Supply */}
      <div className="flex col-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 rounded-xl bg-[url(/landing/content_img_2.png)] bg-cover bg-center h-32 md:h-40 lg:h-full">
        <div className="flex flex-col gap-1 mr-auto mt-auto w-full md:w-[90%] p-3 md:pl-4 lg:pl-6 pb-3 lg:pb-5">
          <h3 className="text-sm md:text-base lg:text-lg font-bold">
            Manpower Supply
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm">
            Skilled technicians for ship and railway maintenance across both
            regions.
          </p>
        </div>
      </div>
      {/* Reverse Engineering */}
      <div className="flex col-span-1 lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 rounded-xl bg-[url(/landing/content_img_4.png)] bg-cover bg-center h-32 md:h-40 lg:h-full">
        <div className="flex flex-col gap-1 mr-auto mt-auto w-full md:w-[90%] p-3 md:pl-4 lg:pl-6 pb-3 lg:pb-5">
          <h3 className="text-sm md:text-base lg:text-lg font-bold">
            Reverse Engineering
          </h3>
          <p className="text-[10px] md:text-xs lg:text-sm">
            System analysis, documentation, and reconstruction for legacy
            platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
