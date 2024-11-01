import { skillsList } from "@/constants/";
import Image from "next/image";
import HeaderGenerator from "./HeaderGenerator";
import { AnimatedTechStack } from "./ui/AnimatedTechStack";
export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full px-[80px] py-20 flex flex-col h-full"
    >
      <HeaderGenerator
        buttonText="Skills"
        desc=" The skills, tools and technologies I am really good at:"
      />
      <div className="w-full flex mt-10 gap-2 flex-col h-full">
        <div className="w-full mt-7 grid  place-items-center grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-10 lg:grid-cols-8 h-full lg:h-[20rem] ">
          {skillsList.map(({ id, imageUrl, title }) => {
            return (
              <AnimatedTechStack key={id}>
                <Image
                  title={title}
                  src={imageUrl}
                  width={64}
                  height={64}
                  alt={title}
                  className="w-[100px] h-[100px] "
                />
              </AnimatedTechStack>
            );
          })}
        </div>
      </div>
    </section>
  );
}
