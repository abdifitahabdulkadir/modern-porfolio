import { Button } from "./ui/button";

interface HeaderGeneratorPros {
  buttonText: string;
  desc?: string;
}
export default function HeaderGenerator({
  buttonText,
  desc,
}: HeaderGeneratorPros) {
  return (
    <div className="w-full gap-2 items-center flex-col justify-center flex mt-20">
      <Button className="rounded-[12px] bg-gray-200 text-gray-600 transition-colors duration-300  hover:bg-gray-600 hover:text-gray-200">
        {buttonText}
      </Button>
      {desc && <p className="text-gray-600 body-2 text-center">{desc}</p>}
    </div>
  );
}
