"use client";

import TaskList from "@/components/TaskList";
import DragDrop from "@/components/TestDrag";
import ToggleModeSwitch from "@/components/toggleModeSwitch";

export default function Home() {
  return (
    <div className="">
      {/* <TaskList /> */}
      <DragDrop />
      <DragDrop />
    </div>
  );
}
