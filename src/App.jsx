function App() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center justify-center font-verdana  ">
        <div className="p-8  max-w-md text-center rounded-xl backdrop-blur-xl backdrop-saturate-180 bg-glass-bg border border-glass-border bg-no-repeat bg-cover font-extralight ">
          <h2 className="text-2xl text-white">Todo Glassmorphism</h2>
          <div>
            <input
              type="text"
              placeholder="Enter your task"
              className="mt-5 text-gray placeholder:text-slate-400  border border-slate-300 rounded-md py-2 pl-2  pr-3 shadow-sm focus:outline-none focus:border-green color-gray sm:text-sm block "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
