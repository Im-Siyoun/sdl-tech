import { ValueFrame } from '../frames/ValueFrame';
import { ValueFrameR } from '../frames/ValueFrameR';

export function ValuesBlock() {
  return (
    <div className="relative flex flex-col mt-4 md:mt-6 lg:mt-8">
      <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-2">
        <ValueFrame
          title="Reliability"
          content="Delivering dependable,
high-quality solutions
you can trust."
          imgPath="value_1.jpg"
        />
        <ValueFrame
          title="Transparency"
          content="Maintaining transparent 
management practices and providing clear, 
honest service to every client."
          imgPath="value_1.jpg"
        />
        <ValueFrame
          title="Sustainability"
          content="Supporting efficient maintenance 
and eco-friendly logistics for long-term, 
sustainable operations."
          imgPath="value_1.jpg"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full md:w-[70%] mx-auto justify-evenly gap-4 md:gap-2 mt-4 md:-mt-12 lg:-mt-20">
        <ValueFrameR
          title="Integrity"
          content="Connecting technology, 
industry, field operations, and
data into one unified system."
          imgPath="value_1.jpg"
        />
        <ValueFrameR
          title="Excellence"
          content="Pursuing performance-driven
management with a focus on 
quality and results."
          imgPath="value_1.jpg"
        />
      </div>
    </div>
  );
}
