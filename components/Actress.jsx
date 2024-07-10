import React from "react";
import Image from "next/image";
const Actress = () => {
  return (
    <div>
      <div>
        <Image
          src="/asset/images/andrea.jpg"
          width={600}
          height={600}
          alt="Andrea"
          className="rounded-lg object-cover aspect-square"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          ANDREA BRILLIANTES
        </h1>
      </div>
    </div>
  );
};

export default Actress;
