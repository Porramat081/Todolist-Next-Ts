"use client";

import { useState } from "react";
import DropAreaVertical from "./DropAreaVertical";

const fetchListTags = [
  {
    title: "Tag1",
    orderTag: 1,
    tasks: [{ title: "Task 1 1" }, { title: "Task 1 2" }],
  },
  {
    title: "Tag2",
    orderTag: 1,
    tasks: [{ title: "Task 2 1" }, { title: "Task 2 2" }],
  },
  {
    title: "Tag3",
    orderTag: 1,
    tasks: [{ title: "Task 3 1" }, { title: "Task 3 2" }],
  },
];

export default function TaskBoard() {
  const [listTags, setListTags] = useState([...fetchListTags]);
  const [activeCard, setActivateCard] = useState<number | null>(null);

  const onDrop = (tagTitle: string, tagIndex: number) => {
    if (activeCard === null || activeCard === undefined) return;

    const tagToMove = listTags[activeCard];
    const updatedTasks = listTags.filter((tag, index) => index !== activeCard);

    updatedTasks.splice(tagIndex, 0, {
      ...tagToMove,
      orderTag: tagIndex,
    });

    setListTags(updatedTasks);
  };

  return (
    <div className="grid grid-cols-3 gap-x-4 justify-items-center bg-gray-400">
      {listTags.map((item, index) => (
        <div
          className="bg-gray-600 w-full h-[300px] text-center relative"
          key={index}
          draggable
          onDragStart={() => setActivateCard(index)}
          onDragEnd={() => setActivateCard(null)}
        >
          <DropAreaVertical
            onDrop={() => {
              if (
                activeCard !== null &&
                (activeCard + 1 === index || activeCard === index)
              ) {
                return;
              } else {
                onDrop(
                  item.title,
                  index - 1 === 0
                    ? 1
                    : index === listTags.length - 1
                    ? index - 1
                    : index
                );
              }
            }}
          />
          {index === listTags.length - 1 && (
            <DropAreaVertical
              isLast={true}
              onDrop={() => onDrop(item.title, index)}
            />
          )}
          {item.title}
        </div>
      ))}
    </div>
  );
}
