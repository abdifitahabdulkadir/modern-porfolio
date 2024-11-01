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
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-2">
      <Button className="rounded-[12px] bg-gray-200 text-gray-600 transition-colors duration-300  hover:bg-gray-600 hover:text-gray-200">
        {buttonText}
      </Button>
      {desc && <p className="body-2 mt-3 text-center text-gray-600">{desc}</p>}
    </div>
  );
}
