import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full items-center justify-center bg-gray-50 py-10">
      <div className="flex w-full items-center justify-center gap-2">
        <Image
          src={"/icons/copyright.svg"}
          alt="copyright icon"
          width={30}
          height={30}
          priority
          loading="eager"
          className="invert-colors"
        />
        <p>2024 |Coded by Abdifitah Abdulkadir💗</p>
      </div>
    </div>
  );
}
