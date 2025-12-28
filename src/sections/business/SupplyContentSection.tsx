import { SupplyContentFrame } from './frames/SupplyContentFrame';

export function SupplyContentSection() {
  return (
    <div className="flex flex-col bg-white justify-center mx-auto py-30">
      <div className="mx-auto max-w-[90%] justify-center">
        <h1 className="font-bold text-3xl text-primary">
          A global leader in Smart Maintenance &<br />
          Digital Logistics through integrated technology and engineering.
        </h1>
        <div className="flex flex-row mt-20 justify-center gap-8">
          <SupplyContentFrame
            title="International Parts Procurement & Delivery"
            content="Import and export of rolling stock components and consumables, including end-to-end supply-chain management."
            imgPath="business_icon_1.png"
          />
          <SupplyContentFrame
            title="Bonded & General Warehouse Operations (3PL)"
            content="Secure storage, packaging, and customs clearance services for railway components in our Poland and Canada facilities, provided as full third-party logistics support."
            imgPath="business_icon_2.png"
          />
          <SupplyContentFrame
            title="Spare Parts Bank"
            content="A shared platform that enables railway operators and maintenance partners across countries to jointly purchase, share, and rent essential components."
            imgPath="business_icon_3.png"
          />
          <SupplyContentFrame
            title="Reverse Logistics"
            content="Collection, refurbishment, and re-delivery of aged railway components such as motors, pantographs, converters, and other critical parts."
            imgPath="business_icon_4.png"
          />
        </div>
      </div>
    </div>
  );
}
