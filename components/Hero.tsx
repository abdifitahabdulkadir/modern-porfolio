import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-20 flex w-full flex-col-reverse justify-between px-[80px] lg:flex-row"
    >
      <div className="flex  w-full flex-col gap-2 lg:max-w-[776px]">
        <h1 className="heading-1 text-gray-900 ">Hi, I&rsquo;m Sagar 👋</h1>
        <p className="body-2 w-4/5  text-gray-600">
          I&rsquo;m a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
        <div className="body-2 mt-5 flex flex-col gap-2 text-gray-600">
          <div className="flex items-center gap-1">
            <Image
              src={"/icons/location.svg"}
              alt="location icon"
              height={20}
              width={20}
              className="invert-0 dark:invert"
            />
            <span>Ahmedabd, India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary-500"></span>
            <span>Avaliable for new Projects</span>
          </div>
        </div>
        <div className="flex items-center mt-5  gap-2">
          <Link href="/github" className="flex items-center gap-2">
            <Image
              src={"/icons/github.svg"}
              alt="github icon"
              width={25}
              height={25}
              loading="eager"
              priority
              className="invert-0 dark:invert"
            />
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/icons/twitter.svg"}
              alt="twitter icon"
              width={25}
              height={25}
              loading="eager"
              priority
              className="invert-0 dark:invert"
            />
          </Link>
          <Link href="/github" className="flex items-center gap-2">
            <Image
              src={"/icons/figma.svg"}
              alt="figma icon"
              width={25}
              height={25}
              loading="eager"
              priority
              className="invert-0 dark:invert"
            />
          </Link>
        </div>
      </div>
      <div className="relative   h-[320px]  w-[280px] border  border-gray-200 bg-gray-200 ">
        <Image
          src={"/icons/man.svg"}
          alt="developer image"
          width={100}
          height={100}
          loading="eager"
          priority
          className="absolute size-full xl:left-[-30px] xl:top-[-30px]"
        />
      </div>
    </section>
  );
}
