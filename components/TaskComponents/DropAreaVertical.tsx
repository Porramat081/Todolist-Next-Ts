"use client";

import { useState } from "react";

export default function DropAreaVertical(props: any) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      className={`${
        showDrop ? "opacity-50" : "opacity-0"
      } bg-gray-600 w-[40%] h-full z-10 absolute blur-md ${
        props.isLast ? "right-[-5%]" : "left-[-5%]"
      } transition-all`}
      onDragOver={(e: any) => e.preventDefault()}
      onDragLeave={() => setShowDrop(false)}
      onDragEnter={() => setShowDrop(true)}
      onDrop={() => {
        props.onDrop();
        setShowDrop(false);
      }}
    ></section>
  );
}
