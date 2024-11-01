import { experiences } from "@/constants";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Experience() {
  return (
    <section
      id="expreience"
      className="bg-gray-50 mt-10 pb-20 w-full px-[80px] flex flex-col "
    >
      <div className="w-full gap-2 items-center flex-col justify-center flex mt-20">
        <Button className="rounded-[12px] bg-gray-200 text-gray-600 transition-colors duration-300  hover:bg-gray-600 hover:text-gray-200">
          Experience
        </Button>
        <p className="text-gray-600 body-2 ">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex w-full flex-col gap-5  mt-10 items-center ">
        {experiences.map(({ id, platformLogo, role, from, to, tasks }) => {
          return (
            <div
              key={id}
              className="bg-gray-100 drop-shadow-2xl rounded-[12px] grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-2  px-[20px] md:px-[32px] pt-10 pb-5 w-full lg:w-[896px] h-[288px] max-h-full gap-4"
            >
              <Image
                src={platformLogo}
                width={102}
                height={28}
                alt="platform lgoo"
                loading="eager"
                priority
              />
              <div className="flex flex-col gap-2 col-span-full lg:col-span-1 order-3 lg:order-2">
                <h2 className="heading-3 text-gray-900 ">{role}</h2>
                <div className="flex flex-col items-start gap-3 text-gray-600 body-2">
                  {tasks.map((task, index) => {
                    return (
                      <div
                        key={index}
                        className="flex gap-2 items-center w-fit"
                      >
                        <span className="h-1 w-1 rounded-full bg-gray-900"></span>
                        <span className="line-clamp-2">{task}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex  gap-2 text-gray-700 body-2 order-2 lg:order-3 w-full">
                <span>{from}</span>
                <span>-</span>
                <span>{to}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
