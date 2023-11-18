import "./App.css";
import Author from "./components/Author";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="xl:container mx-auto min-h-screen flex flex-col font-raleway">
      <header className="self-end justify-items-end	mt-5">
        <button className="flex items-center text-lg gap-2 text-black1">
          random
          <span className="material-symbols-outlined">sync</span>
        </button>
      </header>
      <div className="w-2/4 mx-auto flex flex-col gap-28 justify-center justify-self-end self-center min-h-screen">
        <Quote quote="The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency. The second is that automation applied to an inefficient operation will magnify the inefficiency." />
        <Author author="Bill Gates" genre="business" />
      </div>
    </div>
  );
}

export default App;
