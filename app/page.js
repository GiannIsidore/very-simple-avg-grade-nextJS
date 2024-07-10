import Actress from "@/components/Actress";
import Image from "next/image";
import Description from "@/components/Description";
import EarlyRoles from "@/components/EarlyRoles";
import Movies from "@/components/Movies";
export default function Home() {
  return (
    <div>
      <section className="flex flex-col md:flex-row sm:flex-col-reverse sm:justify-center sm:items-center   justify-evenly p-4">
        <Description />
        <Actress />
      </section>
      <section className="p-10">
        <EarlyRoles />
      </section>
      <section>
        <Movies />
      </section>
    </div>
  );
}
