import {
  MoonIcon,
  PlusIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoText, setTodoText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      setTodoList(JSON.parse(savedTodos));
    }
    console.log("render");
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    setTodoList((prevTodos) => {
      const todo = { id: Date.now(), todoText };
      return [...prevTodos, todo];
    });
    setTodoText("");
  };

  const handleDelete = (selectedTodoId) => {
    setTodoList(
      todoList.filter((eachTodo) => {
        return eachTodo.id !== selectedTodoId;
      })
    );
  };

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div
        className={`bg-hero-pattern bg-no-repeat  bg-cover font-verdana relative transition-colors duration-500 `}
      >
        {/* overlay */}
        <div
          className={`relative bg-opacity-90 min-h-screen transition-colors duration-1000  ${
            darkMode ? "bg-dark-bg" : ""
          }  `}
        >
          {/* toggle bar */}
          <div
            className={` ${
              darkMode ? "bg-dark-glass-bg" : "bg-glass-bg"
            } p-1 absolute top-10 right-16 backdrop-blur-xl backdrop-saturate-180 border border-glass-border rounded-full min-w-16 min-h-8`}
            onClick={handleToggle}
          >
            {/* circle with icon */}
            <div
              className={`flex absolute transition-transform duration-500 ${
                darkMode ? "translate-x-[30px]" : "translate-x-0"
              }`}
            >
              {/* <div className="flex gap-3 absolute right-[3px] top-[3px]"> */}
              {darkMode ? (
                <MoonIcon className="p-1 h-6 w-6 text-yellow bg-gray-dark rounded-full" />
              ) : (
                <SunIcon className="p-1 h-6 w-6 text-white bg-gray-dark rounded-full" />
              )}
            </div>
          </div>
          {/* box */}
          <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 ">
            <div
              className={` ${
                darkMode ? "bg-dark-glass-bg" : "bg-glass-bg"
              }  p-8 max-w-md rounded-xl backdrop-blur-xl backdrop-saturate-180 border border-glass-border bg-no-repeat bg-cover font-extralight `}
            >
              <h2
                className={` ${
                  darkMode ? "text-dark-text" : "text-white"
                } text-2xl`}
              >
                Todo Glassmorphism
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mt-5 flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="Enter your task"
                    onChange={handleChange}
                    value={todoText}
                    className=" text-gray placeholder:text-slate-400  border border-slate-300 rounded-md py-2 pl-2  pr-3 shadow-sm focus:outline-none focus:border-green color-gray sm:text-sm block "
                  />
                  <button
                    type="submit"
                    className="p-1 rounded-md bg-btn-bg-gray border-b-2 border-btn-border-gray bg-btn-gradient-gray 
             hover:bg-btn-bg-green hover:border-btn-border-green hover:bg-btn-gradient-green transition-all duration-300"
                  >
                    <PlusIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
              </form>
              <ul className="mt-4 flex flex-col gap-2">
                {!todoText && todoList.length === 0 ? (
                  <h3 className="text-white">No task added, Add some</h3>
                ) : (
                  todoList.map((eachTodo) => {
                    return (
                      <li
                        className="p-2 rounded-md bg-glass-bg flex justify-between items-center"
                        key={eachTodo.id}
                      >
                        <h3 className="text-white">{eachTodo.todoText}</h3>
                        <button className=" rounded-md bg-btn-bg-red border-b-2 border-btn-border-red bg-btn-gradient-gray ">
                          <XMarkIcon
                            className="h-6 w-6 text-white cursor-pointer transition-transform duration-300 hover:rotate-180"
                            onClick={() => {
                              handleDelete(eachTodo.id);
                            }}
                          />
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
