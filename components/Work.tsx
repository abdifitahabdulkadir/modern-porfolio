import Image from "next/image";

import { worsk } from "@/constants";
import { cn } from "@/lib/utils";

import HeaderGenerator from "./HeaderGenerator";
import { Button } from "./ui/button";

export default function Work() {
  return (
    <section id="work" className="mt-20 flex w-full flex-col px-[80px] py-10">
      <HeaderGenerator
        buttonText="Work"
        desc="Some of the noteworthy projects I have built:"
      />

      <div className="mt-20 flex w-full flex-col gap-4 ">
        {Array.from({ length: 3 }, (_, index: number) => {
          const { techStacks, desc, name, projectImage } = worsk[0];
          const isEven = (index + 1) % 2 === 0;
          return (
            <div
              key={index}
              className="grid size-full grid-cols-1  gap-4 rounded-[12px] bg-gray-100 lg:h-[30rem] lg:w-[72rem]  lg:grid-cols-2"
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
                  className="size-full"
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
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {techStacks.map((tech, index) => {
                    return (
                      <Button
                        key={index}
                        className="rounded-[12px] bg-gray-200 text-center text-gray-600 hover:bg-gray"
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
                  className="invert-colors mt-4 lg:mt-10"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
