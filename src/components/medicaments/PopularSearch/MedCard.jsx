import Image from "next/image";

export default function MedCard({ med: { name, location, image } }) {
  return (
    <div className="px-3 cursor-pointer py-6 flex flex-col items-center justify-center bg-gray-200 rounded-md">
      <Image src={image} alt="dwa" className="rounded-md" />
      <h3 className="text-secondary-blue font-semibold text-base">{name}</h3>
      <h3 className="text-secondary-blue text-sm ">-{location}-</h3>
    </div>
  );
}
