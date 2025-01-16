"use client";

import ToggleModeSwitch from "./toggleModeSwitch";

export default function Navbar() {
  return (
    <div className="p-4 flex justify-between mx-auto sticky border-b-[1px] border-foreground">
      <div className="font-[800] text-[2rem] tracking-wide text-gray-700">
        Todolist
      </div>
      <div className="flex items-center">
        <ToggleModeSwitch />
      </div>
    </div>
  );
}
