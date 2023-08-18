import React from "react";
import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";


export const TodoItem = React.forwardRef(({todo, removeTodo, updateTodo,...props}, ref) => {
    const {id, title, completed} = todo;
    return (
        <article {...props} ref = {ref} className="flex gap-4 py-4 border-b border-b-gray-400">
            <button className={`h-5 w-5 flex-none rounded-full border-2
                                ${completed ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                                            : "inline-block"}`}
                    onClick= {() => updateTodo(id)}>
    
                { completed && <IconCheck />}
     
                
            </button>            
            <p className={`text-gray-600 dark:text-gray-400 grow ${completed && "line-through" }`}>
            {title}</p>
            <button className="flex-none"
                    onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    );
}
)

export default TodoItem;
