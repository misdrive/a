import { SiGithub, SiSteam } from "react-icons/si";
import { IoIosStats } from "react-icons/io";
import { FaXTwitter, FaLastfm, FaCode } from "react-icons/fa6";
import Social from "../Social";

export default function Sites() {
  return (
    <div className="col-span-2 row-span-2 rounded-2xl bg-zinc-950 p-6 shadow md:p-8">
      <h2 className="mb-3 bg-gradient-to-tl from-zinc-500 to-zinc-300 bg-clip-text text-xl font-semibold text-transparent md:text-2xl">
        Sites
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Social name="Steam" link="/github" icon={<SiGithub className="h-5 w-5" />} />
        <Social name="TikTok" link="/api" icon={<FaCode className="h-5 w-5" />} />
        <Social name="Stats.fm" link="/stats" icon={<IoIosStats className="h-5 w-5" />} />
        <Social name="Twitter" link="/x" icon={<FaXTwitter className="h-5 w-5" />} />
        <Social name="Last.fm" link="/lf" icon={<FaLastfm className="h-5 w-5" />} />
        <Social name="Steam" link="/steam" icon={<SiSteam className="h-5 w-5" />} />
      </div>
    </div>
  );
}
