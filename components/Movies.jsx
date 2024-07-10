import React from "react";
import Image from "next/image";
const Movies = () => {
  return (
    <div className="flex flex-col  justify-center flex-1">
      <div className="flex flex-1 flex-row-reverse sm:text-center sm:flex-col   md:items-end">
        <h1>MOVIES</h1>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-6 py-12 md:py-20 lg:py-24">
        {/* Use Image components for optimized loading */}
        <div>
          {" "}
          <Image
            src="/asset/images/every.jpg"
            width={600}
            height={400}
            alt="Movie Image 1"
            className="rounded-lg object-cover aspect-[4/3]"
          />
          <p className="text-center">Everyday I Love You</p>
        </div>
        <div>
          {" "}
          <Image
            src="/asset/images/crezi.jpg"
            width={600}
            height={400}
            alt="Movie Image 1"
            className="rounded-lg object-cover aspect-[4/3]"
          />
          <p className="text-center">Crazy Beautiful You</p>
        </div>
        <div>
          {" "}
          <Image
            src="/asset/images/momz.jpg"
            width={600}
            height={400}
            alt="Movie Image 1"
            className="rounded-lg object-cover aspect-[4/3]"
          />
          <p className="text-center">Momzillas</p>
        </div>
      </section>
      <div className="flex md:flex-row justify-between items-center gap-5  sm:flex-col  flex-1">
        <div>
          {" "}
          <Image
            src="/asset/images/mrs.jpg"
            width={600}
            height={400}
            alt="Movie Image 1"
            className="rounded-lg object-cover aspect-[4/3]"
          />
          <p className="text-center">Ang Dalawang Mrs.Reyes</p>
        </div>{" "}
        <div>
          {" "}
          <Image
            src="/asset/images/kahit.jpg"
            width={600}
            height={400}
            alt="Movie Image 1"
            className="rounded-lg object-cover aspect-[4/3]"
          />
          <p className="text-center">Kahit Ayaw mo na</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
