import { useState, useRef } from "react";

const DragDropTwoContainers = () => {
  const [container1, setContainer1] = useState(["Item 1", "Item 2", "Item 3"]);
  const [container2, setContainer2] = useState(["Item 4", "Item 5"]);
  const draggedItemRef = useRef(null);

  // Handle drag start
  const handleDragStart = (e, item, sourceContainer) => {
    draggedItemRef.current = { item, sourceContainer };
    e.dataTransfer.effectAllowed = "move";
  };

  // Handle drag over (allow dropping)
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle drop
  const handleDrop = (e, targetContainer) => {
    e.preventDefault();
    const { item, sourceContainer } = draggedItemRef.current;

    // Prevent dropping into the same container without a move
    if (sourceContainer === targetContainer) return;

    // Remove the item from the source container
    const updateSourceContainer =
      sourceContainer === "container1" ? setContainer1 : setContainer2;
    const sourceItems =
      sourceContainer === "container1" ? container1 : container2;

    const updatedSourceItems = sourceItems.filter((i) => i !== item);
    updateSourceContainer(updatedSourceItems);

    // Add the item to the target container
    const updateTargetContainer =
      targetContainer === "container1" ? setContainer1 : setContainer2;
    const targetItems =
      targetContainer === "container1" ? container1 : container2;

    const updatedTargetItems = [...targetItems, item];
    updateTargetContainer(updatedTargetItems);

    // Clear the reference
    draggedItemRef.current = null;
  };

  return (
    <div className="flex space-x-4">
      {/* Drag Container 1 */}
      <div
        className="drag-container flex-1 p-4 border rounded bg-gray-100"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "container1")}
      >
        <h3 className="font-bold mb-2">Container 1</h3>
        {container1.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item, "container1")}
            className="drag-item bg-white border p-2 rounded shadow cursor-move mb-2"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Drag Container 2 */}
      <div
        className="drag-container flex-1 p-4 border rounded bg-gray-100"
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(e, "container2")}
      >
        <h3 className="font-bold mb-2">Container 2</h3>
        {container2.map((item, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, item, "container2")}
            className="drag-item bg-white border p-2 rounded shadow cursor-move mb-2"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropTwoContainers;
