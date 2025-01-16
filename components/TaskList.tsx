import { useEffect, useMemo, useRef, useState } from "react";
import TaskItem from "./TaskItem";
import { createSwapy, utils } from "swapy";

const mockList = [
  { title: "task title 1", detail: "gejgioaiajrogjreiogjae;rogj" },
  { title: "task title 1", detail: "gejgioaiajrogjreiogjae;rogj" },
  { title: "task title 1", detail: "gejgioaiajrogjreiogjae;rogj" },
];

export default function TaskList() {
  return (
    <div className="flex flex-col w-[300px] rounded-xl bg-gray-400 p-2 gap-2 min-h-[350px]">
      {mockList.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </div>
  );
}
