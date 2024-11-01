import { experiences } from "@/constants";
import Image from "next/image";
import HeaderGenerator from "./HeaderGenerator";

export default function Experience() {
  return (
    <section
      id="expreience"
      className="bg-gray-50 mt-10 pb-20 w-full px-[80px] flex flex-col "
    >
      <HeaderGenerator
        buttonText="Experience"
        desc="Here is a quick summary of my most recent experiences:"
      />
      <div className="flex w-full flex-col gap-5  mt-10 items-center ">
        {experiences.map(({ id, platformLogo, role, from, to, tasks }) => {
          return (
            <div
              key={id}
              className="bg-gray-100 drop-shadow-2xl rounded-[12px] grid lg:grid-cols-[1fr_2fr_1fr]  grid-cols-1 sm:grid-cols-2  px-[20px] md:px-[32px] pt-10 pb-5 w-full lg:w-[896px] h-full lg:h-[288px] max-h-full gap-4"
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
                        className="flex gap-2 items-center w-full"
                      >
                        <div className="h-1 w-1 rounded-full bg-gray-900"></div>
                        <p className="line-clamp-2">{task}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" text-gray-700 body-3 md:body-2 order-2 lg:order-3 w-full">
                <span className="">{`${from} - ${to}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
