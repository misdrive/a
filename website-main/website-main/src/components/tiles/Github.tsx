import { FaSteam } from "react-icons/fa";
import Link from "next/link";

export default function Steam() {
  return (
    <>
      <Link
        href="https://steamcommunity.com/id/eifz/"
        className="group col-span-1 row-span-2 cursor-pointer rounded-2xl bg-zinc-800 p-6 shadow transition-all duration-500 hover:scale-95 md:p-8"
      >
        <div className="flex h-full items-center justify-center">
          <FaSteam className="h-12 w-12 transition-all duration-500 ease-out group-hover:h-16 group-hover:w-16 group-hover:animate-pulse" />
        </div>
      </Link>
    </>
  );
}
