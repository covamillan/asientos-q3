import { useState } from "react";
import { Students } from "../list";

export function useStudents() {
  const studentsList = Students.sort((a, b) => 0.5 - Math.random());

  let [students, setStudents] = useState(studentsList);

  const half = Math.ceil(studentsList.length / 2);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    // if (result.destination.droppableId === result.source.droppableId) {
    //   console.log(23);
    //   result.source = {
    //     droppableId: result.destination.droppableId,
    //     index: result.destination.index,
    //   };
    // }

    const items = students;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setStudents(items);
  };

  return {
    students,
    half,
    handleOnDragEnd,
  };
}
