import { Draggable } from 'react-beautiful-dnd';
import './card.scss';
import { Student } from '../models/students';

export function Card(props: { students: Student[]; section: string }) {
  return (
    <>
      {props.students.map((student, index) => (
        <Draggable key={student.name} draggableId={student.name} index={index}>
          {(provided) => (
            <li
              key={student.name}
              className={props.section}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <img src={student.img} alt={student.name} />
              <h2>{student.name}</h2>
            </li>
          )}
        </Draggable>
      ))}
    </>
  );
}
