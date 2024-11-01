import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function SocailMedia({
  otherClasses,
}: {
  otherClasses?: string;
}) {
  return (
    <div className={cn("mt-5 flex items-center  gap-2", otherClasses)}>
      <Link href="/github" className="flex items-center gap-2">
        <Image
          src={"/icons/github.svg"}
          alt="github icon"
          width={25}
          height={25}
          loading="eager"
          priority
          className="invert-colors"
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
          className="invert-colors"
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
          className="invert-colors"
        />
      </Link>
    </div>
  );
}
