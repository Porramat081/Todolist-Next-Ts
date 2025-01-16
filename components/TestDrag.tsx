import { useRef, useState } from "react";

const DragDrop = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const [isOutside, setIsOutside] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle drag start
  const handleDragStart = (index: any) => {
    setDraggedItemIndex(index);
    setIsOutside(false);
    document.querySelectorAll(".drag-item")[index].classList.add("opacity-50");
  };

  // Handle drag over (allows dropping)
  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (index: any) => {
    if (draggedItemIndex === null || draggedItemIndex === index) return;

    const updatedItems = [...items];
    const [removedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, removedItem);

    setItems(updatedItems);
    setDraggedItemIndex(null);
    setIsOutside(false);
  };

  const handleDragEnd = (e: any) => {
    document
      .querySelectorAll(".drag-item")
      .forEach((item) => item.classList.remove("opacity-50"));

    if (containerRef.current) {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const isOutside =
        e.clientX < containerRect.left ||
        e.clientX > containerRect.right ||
        e.clientY < containerRect.top ||
        e.clientY > containerRect.bottom;

      setIsOutside(isOutside);
    }

    setDraggedItemIndex(null);
  };

  return (
    <div
      className="drag-container flex flex-col space-y-2 p-4 border rounded bg-gray-100"
      ref={containerRef}
    >
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          className="drag-item bg-white border p-2 rounded shadow cursor-pointer"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragDrop;
