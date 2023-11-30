import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import QuotesPage from "./pages/QuotesPage";
import { Context } from "./context/Context";

function App() {
  const [quote, setQuote] = useState("");
  const [showMoreQuotes, setShowMoreQuotes] = useState(false);
  const moreQuotesHandler = () => {
    setShowMoreQuotes(true);
  };
  const randomQuoteHandler = () => {
    if (showMoreQuotes) {
      setShowMoreQuotes(false);
    }
    getRandomQuote();
  };
  const getRandomQuote = async () => {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random").then(
      (data) =>
        data
          .json()
          .then((decodedData) => setQuote(decodedData.data[0]))
          .catch((err) => alert(err))
    );
  };
  useEffect(() => {
    getRandomQuote();
  }, []);
  console.log("rendered");
  return (
    <Context.Provider
      value={{
        showMoreQuotes: showMoreQuotes,
        showMoreQuotesHandler: moreQuotesHandler,
      }}
    >
      <div className="xl:container mx-auto min-h-screen flex flex-col font-raleway">
        <header className="self-end justify-items-end	mt-5">
          <button
            className="flex items-center text-lg gap-2 text-black1"
            onClick={randomQuoteHandler}
          >
            random
            <span className="material-symbols-outlined">sync</span>
          </button>
        </header>
        {showMoreQuotes ? (
          <QuotesPage author={quote.quoteAuthor} />
        ) : (
          <MainPage
            text={quote.quoteText}
            genre={quote.quoteGenre}
            author={quote.quoteAuthor}
          />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
