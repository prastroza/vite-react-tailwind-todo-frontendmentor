export const TodoComputed = ({computedItemLeft, clearCompleted}) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-slate-800 transition-all duration-1000">
            <span className="text-gray-400 dark:text-gray-400">{computedItemLeft} Items Left</span>
            <button className="text-gray-400 dark:text-gray-400"
                    onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
    
};

export default TodoComputed;
