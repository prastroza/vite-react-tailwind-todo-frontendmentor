import CrossIcon from "./components/icons/IconCross";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";


const initialStateTodos = [
    { id: 1, title: "Complete On Line JavaScript bluuweb Curse", completed: true },
    { id: 2, title: "Go to the Gym", completed: false },
    { id: 3, title: "10 Minutes meditation", completed: true },
    { id: 4, title: "Pick Up Groceries", completed: false },
    { id: 5, title: "Complete todo app on FrontEnd Mentor", completed: false },
];

const App = () => {
    const fill = "#FFF"

    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        }

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo,completed:!todo.completed} : todo));
    };

    const computedItemLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed ));
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {

        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }



    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-slate-900
                        dark:bg-[url(./assets/images/bg-mobile-dark.jpg)]  transition-all duration-1000
        ">
            <Header />
            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo}/>
                <TodoList todos={filterTodos()}
                         removeTodo={removeTodo}
                         updateTodo={updateTodo}/>
                <TodoComputed computedItemLeft={computedItemLeft} clearCompleted={clearCompleted}/>
                <TodoFilter changeFilter={changeFilter} filter={filter}/>
            </main>

            <p className="text-center mt-8 dark:text-gray-400">Drag and Drop to reorder list</p>
        </div>
    );
};

export default App;
