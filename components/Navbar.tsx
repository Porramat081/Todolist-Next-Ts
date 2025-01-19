"use client";

import Link from "next/link";
import ToggleModeSwitch from "./toggleModeSwitch";
import { useUserStore } from "@/stores/store";

export default function Navbar() {
  const { user } = useUserStore();
  return (
    <div className="p-4 flex justify-between mx-auto sticky border-b-[1px] border-foreground">
      <Link
        href={"/"}
        className="font-[800] text-[2rem] tracking-wide text-gray-700"
      >
        Todolist
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <Link href={""}>{user.username}</Link>
        ) : (
          <Link
            className="text-[1.1rem] font-semibold hover:text-gray-500"
            href={"/pages/auth"}
          >
            guest
          </Link>
        )}

        <ToggleModeSwitch />
      </div>
    </div>
  );
}
