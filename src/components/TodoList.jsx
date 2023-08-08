import TodoItem from "./TodoItem";
const title = "Complite Online JavaScript course in bluuweb"
const TodoList = ({todos, removeTodo, updateTodo}) => {
    return (
        <div className="bg-white rounded-t-md mt-8 px-4 dark:bg-slate-800 transition-all duration-1000">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            ))}
         </div>
    );
    
};

export default TodoList;