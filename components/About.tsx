import Image from "next/image";

import HeaderGenerator from "./HeaderGenerator";

export default function About() {
  return (
    <section
      id="about"
      className="mt-20 flex size-full flex-col items-center justify-between bg-gray-50 px-[80px] py-10"
    >
      <HeaderGenerator buttonText="About me" desc="" />
      <div className=" mt-20 flex w-full flex-col-reverse items-center justify-between gap-y-3 lg:flex-row">
        <div className="w-full">
          <div className=" size-full xl:bg-gray-200  lg:relative  lg:w-[400px] xl:h-[480px] ">
            <Image
              src={"/icons/man2.svg"}
              width={100}
              height={100}
              alt="devloper image"
              className="size-full xl:absolute xl:right-[-30px] xl:top-[-30px]"
              loading="eager"
              priority
            />
          </div>
        </div>
        <div className="body-2 flex w-full flex-col gap-2 text-gray-600">
          <h1 className="heading-2 text-gray-900">
            Curious about me? Here you have it:
          </h1>
          <p>
            I&rsquo;m a passionate, self-proclaimed designer who specializes in
            full stack development (React.js & Node.js). I am very enthusiastic
            about bringing the technical and visual aspects of digital products
            to life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p>
            I began my journey as a web developer in 2015, and since then,
            I&rsquo;ve continued to grow and evolve as a developer, taking on
            new challenges and learning the latest technologies along the way.
            Now, in my early thirties, 7 years after starting my web development
            journey, I&rsquo;m building cutting-edge web applications using
            modern technologies such as Next.js, TypeScript, Nestjs,
            Tailwindcss, Supabase and much more.
          </p>
          <p>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p>
            When I&rsquo;m not in full-on developer mode, you can find me
            hovering around on twitter or on indie hacker, witnessing the
            journey of early startups or enjoying some free time. You can follow
            me on Twitter where I share tech-related bites and build in public,
            or you can follow me on GitHub.
          </p>

          <p>Finally, some quick bits about me.</p>
          <ul className="grid w-full grid-cols-2 gap-2 ">
            <li className="flex w-full items-center gap-1">
              <span className="size-1 rounded-full bg-gray-900"></span>
              Computer Engineering
            </li>
            <li className="flex w-full items-center gap-1">
              <span className="size-1 rounded-full bg-gray-900"></span>
              Avid learner
            </li>
            <li className="flex w-full items-center gap-1">
              <span className="size-1 rounded-full bg-gray-900"></span>
              Full time freelancer
            </li>
            <li className="flex w-full items-center gap-1">
              <span className="size-1 rounded-full bg-gray-900"></span>
              Aspiring indie hacker
            </li>
          </ul>
          <p>
            One last thing, I&rsquo;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&rsquo;t bite 😉
          </p>
        </div>
      </div>
    </section>
  );
}
