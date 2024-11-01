import Image from "next/image";

import { experiences } from "@/constants";

import HeaderGenerator from "./HeaderGenerator";

export default function Experience() {
  return (
    <section
      id="expreience"
      className="mt-10 flex w-full flex-col bg-gray-50 px-[80px] pb-20 "
    >
      <HeaderGenerator
        buttonText="Experience"
        desc="Here is a quick summary of my most recent experiences:"
      />
      <div className="mt-10 flex w-full flex-col  items-center gap-5 ">
        {experiences.map(({ id, platformLogo, role, from, to, tasks }) => {
          return (
            <div
              key={id}
              className="grid size-full max-h-full grid-cols-1 gap-4  rounded-[12px] bg-gray-100  px-[20px] pb-5 pt-10 drop-shadow-2xl sm:grid-cols-2 md:px-[32px] lg:h-[288px] lg:w-[896px] lg:grid-cols-[1fr_2fr_1fr]"
            >
              <Image
                src={platformLogo}
                width={102}
                height={28}
                alt="platform lgoo"
                loading="eager"
                priority
              />
              <div className="order-3 col-span-full flex flex-col gap-2 lg:order-2 lg:col-span-1">
                <h2 className="heading-3 text-gray-900 ">{role}</h2>
                <div className="body-2 flex flex-col items-start gap-3 text-gray-600">
                  {tasks.map((task, index) => {
                    return (
                      <div
                        key={index}
                        className="flex w-full items-center gap-2"
                      >
                        <div className="size-1 rounded-full bg-gray-900"></div>
                        <p className="line-clamp-2">{task}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" body-3 md:body-2 order-2 w-full text-gray-700 lg:order-3">
                <span className="">{`${from} - ${to}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
