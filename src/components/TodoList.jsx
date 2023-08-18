import TodoItem from "./TodoItem";
import {Droppable, Draggable } from "@hello-pangea/dnd";

const title = "Complite Online JavaScript course in bluuweb"
const TodoList = ({todos, removeTodo, updateTodo, ...props}) => {
    return (
        <Droppable droppableId= "todos">
            {
                (dropableProvided) => (
                    <div ref={dropableProvided.innerRef}
                    {...dropableProvided.droppableProps}
                    className="bg-white rounded-t-md mt-8 px-4 dark:bg-slate-800 transition-all duration-1000">
                    {todos.map((todo, index) => (
                        <Draggable key={todo.id}  index={index} draggableId={`${todo.id}`}>
                            {(draggableProvided) => (
                            <TodoItem todo={todo} 
                                      removeTodo={removeTodo} 
                                      updateTodo={updateTodo}
                                      ref={draggableProvided.innerRef}
                                      {...draggableProvided.draggableProps}
                                      {...draggableProvided.dragHandleProps}
                                      />
                            )}
                        </Draggable>
                    ))}
                    {dropableProvided.placeholder}
                </div>
                )
            }
        </Droppable>
    )
}
export default TodoList;