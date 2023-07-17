import { Droppable } from "react-beautiful-dnd";
import { Card } from "../card/card";
import "./cards.scss";
import { useStudents } from "../hook/useStudents";

export function Cards() {
  const { students, half } = useStudents();

  return (
    <div className="classroom">
      <Droppable droppableId="students-left" type="Student">
        {(provided) => (
          <ul
            className="container1"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Card
              students={students.slice(0, half)}
              section="left-container"
            ></Card>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <Droppable droppableId="students-right" type="Student">
        {(provided) => (
          <ul
            className="container2"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <Card
              students={students.slice(half)}
              section="right-container"
            ></Card>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
