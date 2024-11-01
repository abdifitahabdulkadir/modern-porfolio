import { worsk } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeaderGenerator from "./HeaderGenerator";
import { Button } from "./ui/button";

export default function Work() {
  return (
    <section id="work" className="px-[80px] w-full mt-20 py-10 flex flex-col">
      <HeaderGenerator
        buttonText="Work"
        desc="Some of the noteworthy projects I have built:"
      />

      <div className="flex flex-col gap-4 w-full mt-20 ">
        {Array.from({ length: 3 }, (_, index: number) => {
          const { techStacks, desc, name, projectImage } = worsk[0];
          const isEven = (index + 1) % 2 === 0;
          return (
            <div
              key={index}
              className="w-full lg:w-[72rem] grid  grid-cols-1 lg:grid-cols-2 rounded-[12px] bg-gray-100 gap-4  h-full  lg:h-[30rem]"
            >
              <div
                className={cn(
                  "w-full order-1 rounded-t-[12px]  flex items-center justify-center h-full bg-gray-200  p-10 ",
                  isEven ? " lg:order-1 " : " lg:order-2 ",
                  isEven
                    ? " lg:rounded-tl-[12px] lg:rounded-bl-[12px]  "
                    : "lg:rounded-tr-[12px] lg:rounded-br-[12px]"
                )}
              >
                <Image
                  src={projectImage}
                  width={100}
                  height={100}
                  alt="proejct image "
                  loading="eager"
                  priority
                  className="w-full h-full"
                />
              </div>
              <div
                className={cn(
                  "w-full order-2 rounded-b-[12px]   bg-gray-100 h-full flex flex-col items-start gap-3 pt-10 px-10 pb-4 ",
                  !isEven ? " lg:order-1 " : " lg:order-2 ",
                  !isEven
                    ? " lg:rounded-tl-[12px] lg:rounded-bl-[12px]  "
                    : " lg:rounded-tr-[12px] lg:rounded-br-[12px]"
                )}
              >
                <h3 className="subtitle text-gray-900 ">{name}</h3>
                <p className="body-2 text-gray-600 ">{desc}</p>
                <div className="flex flex-wrap mt-6 gap-3 items-center">
                  {techStacks.map((tech, index) => {
                    return (
                      <Button
                        key={index}
                        className="bg-gray-200 rounded-[12px] text-gray-600 text-center hover:bg-gray"
                      >
                        {tech}
                      </Button>
                    );
                  })}
                </div>
                <Image
                  src={"/icons/visit.svg"}
                  alt="visit icon"
                  width={20}
                  height={20}
                  loading="eager"
                  priority
                  className="invert-0 dark:invert mt-4 lg:mt-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
