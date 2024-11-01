import Image from "next/image";

import { skillsList } from "@/constants/";

import HeaderGenerator from "./HeaderGenerator";
import { AnimatedTechStack } from "./ui/AnimatedTechStack";
export default function Skills() {
  return (
    <section id="skills" className="flex size-full flex-col px-[80px] py-20">
      <HeaderGenerator
        buttonText="Skills"
        desc=" The skills, tools and technologies I am really good at:"
      />
      <div className="mt-10 flex size-full flex-col gap-2">
        <div className="mt-7 grid size-full  grid-cols-2 place-items-center gap-x-3 gap-y-10 md:grid-cols-4 lg:h-80 lg:grid-cols-8 ">
          {skillsList.map(({ id, imageUrl, title }) => {
            return (
              <AnimatedTechStack key={id}>
                <Image
                  title={title}
                  src={imageUrl}
                  width={64}
                  height={64}
                  alt={title}
                  className="size-[100px] "
                />
              </AnimatedTechStack>
            );
          })}
        </div>
      </div>
    </section>
  );
}
