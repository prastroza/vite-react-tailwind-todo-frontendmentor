import CrossIcon from "./components/CrossIcon";
import MoonIcon from "./components/MoonIcon";


const App = () => {
    const fill = "#FFF"
    return (
        <div className="bg-[url(./assets/images/bg-mobile-light.jpg)] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
            <header className="container mx-auto px-4 mt-8">
                <div className="flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button><MoonIcon fill= {fill} /></button>
                </div>
                <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center  px-4 mt-8">
                    <span className="rounded-full border-2 h-5 w-5 inline-block"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Crate a new todo..."
                    />
                </form>
            </header>

            <main className="container mx-auto px-4 mt-8">
                <div className="bg-white rounded-md">
                    <article className="flex gap-4 py-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">Complite Online JavaScript course in bluuweb</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">Complite Online JavaScript course in bluuweb</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 py-4 border-b border-b-gray-400">
                        <button className="rounded-full border-2 h-5 w-5 inline-block flex-none"></button>
                        <p className="text-gray-600 grow">Complite Online JavaScript course in bluuweb</p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">Clear Completed</button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white p-4 rounded-md flex justify-center gap-4">
                    <button className=" hover:text-blue-600">All</button>
                    <button className=" hover:text-blue-600">Active</button>
                    <button className=" hover:text-blue-600">Completed</button>                    
                </div>
            </section>
            <p className="text-center mt-8">Drag and Drop to reorder list</p>
        </div>
    );
};

export default App;
