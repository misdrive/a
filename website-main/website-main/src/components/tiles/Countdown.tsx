"use client";

import { useEffect, useState } from "react";
import { DateTime } from "luxon";

const BIRTH_MONTH = 2 as const;
const BIRTH_DAY = 2 as const;
const BIRTH_YEAR = 2008 as const;

export default function Countdown() {
  const [days, setDays] = useState<number>();

  useEffect(() => {
    const now = DateTime.now().startOf("day");

    const countdownPassed =
      now.month > BIRTH_MONTH || (now.month === BIRTH_MONTH && now.day >= BIRTH_DAY);
    const countdown = DateTime.fromObject({
      year: countdownPassed ? now.year + 1 : now.year,
      month: BIRTH_MONTH,
      day: BIRTH_DAY,
    });

    setDays(countdown.diff(now, "days").days);
  }, []);

  return (
    <div className="group col-span-2 row-span-1 rounded-2xl bg-zinc-800 p-4 text-center shadow md:col-span-1">
      <h2 className="mb-0.5 bg-gradient-to-tl from-white to-gray-400 bg-clip-text text-xl font-medium text-transparent md:mb-2">
        {days ? (days === 365 ? "Today" : `${days} day${days !== 1 ? "s" : ""}`) : "--"}
      </h2>
      {days === 366 ? (
        <p className="text-xs">It&apos;s my birthday! 🥳🎂</p>
      ) : (
        <>
          <p className="text-xs group-hover:hidden">until Birthday</p>
          <p className="hidden text-xs group-hover:block">
            until <strong>2 February</strong>
          </p>
        </>
      )}
    </div>
  );
}
