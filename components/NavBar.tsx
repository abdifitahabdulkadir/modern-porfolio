import { navLinks } from "@/constants";

import DownloadCV from "./DownloadCV";
import MobileNavigation from "./MobileNavigation";
import NavBarItem from "./NavBarItem";
import { ThemeToggle } from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className=" flex min-h-[68px] min-w-full items-center justify-between border-b-[.6px] border-gray-100   px-[80px] pb-2 text-white ">
      <h3 className="font-inter text-[30px] font-bold text-gray-900">
        {"<SS />"}
      </h3>
      <ul className=" hidden items-center gap-6 md:flex">
        {navLinks.map(({ _id, title, moveTo }) => {
          return <NavBarItem key={_id} title={title} moveTo={moveTo} />;
        })}
        <ThemeToggle />
        <DownloadCV />
      </ul>
      <MobileNavigation />
    </nav>
  );
}
