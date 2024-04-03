import Image from "next/image";
const FeaturedLogos = () => {
  return (
    <div className="container relative ">
      <div className=" flex py-7 items-center">
        <h1 className="text-2xl font-semibold pr-5">
          We are <span className="text-yellow-400">trusted</span> by major{" "}
          global brands
        </h1>
        <div className="flex items-center justify-between w-full mt-4">
          <Image src="/logos/1.svg" alt="Airbnb" width={120} height={80} />
          <Image src="/logos/2.svg" alt="Airbnb" width={120} height={80} />
          <Image src="/logos/3.svg" alt="Airbnb" width={120} height={80} />
          <Image src="/logos/4.svg" alt="Airbnb" width={120} height={80} />
          <Image src="/logos/5.svg" alt="Airbnb" width={120} height={80} />
          <Image src="/logos/6.svg" alt="Airbnb" width={120} height={80} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedLogos;
