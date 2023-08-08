import { useState } from "react";

const TodoCreate = ({createTodo}) => {

    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            return setTitle("");
        };
        createTodo(title);
        setTitle("");
    };

    return (
         <form onSubmit = {handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center  px-4 dark:bg-slate-800 transition-all duration-1000">
            <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
            <input
                className="w-full text-gray-400 outline-none dark:bg-slate-800 transition-all duration-1000"
                type="text"
                placeholder="Crate a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
