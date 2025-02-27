import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    setTodoList((prevTexts) => {
      return [...prevTexts, todoText];
    });
    setTodoText("");
  };

  const handleDelete = (itemIndex) => {
    setTodoList(
      todoList.filter((eachTodo) => {
        return todoList.indexOf(eachTodo) !== itemIndex;
      })
    );
  };

  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center font-verdana  ">
        <div className="p-8  max-w-md rounded-xl backdrop-blur-xl backdrop-saturate-180 bg-glass-bg border border-glass-border bg-no-repeat bg-cover font-extralight ">
          <h2 className="text-2xl text-white">Todo Glassmorphism</h2>
          <form onSubmit={handleSubmit}>
            <div className="mt-5 flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter your task"
                onChange={handleChange}
                value={todoText}
                className=" text-gray placeholder:text-slate-400  border border-slate-300 rounded-md py-2 pl-2  pr-3 shadow-sm focus:outline-none focus:border-green color-gray sm:text-sm block "
              />
              <button type="submit">
                <PlusIcon className="h-6 w-6 text-green cursor-pointer" />
              </button>
            </div>
          </form>
          <ul className="mt-4 flex flex-col gap-2">
            {todoList.length === 0 ? (
              <h3 className="text-white">No task added, Add some</h3>
            ) : (
              todoList.map((eachText, index) => {
                return (
                  <li
                    className="p-2 rounded-md bg-glass-bg flex justify-between items-center"
                    key={index}
                  >
                    <h3 className="text-white">{eachText}</h3>
                    <XMarkIcon
                      className="h-6 w-6 text-pink cursor-pointer "
                      onClick={() => {
                        handleDelete(index);
                      }}
                    />
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
