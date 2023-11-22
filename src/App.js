import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  const [quote, setQuote] = useState("");
  const [showMoreQuotes, setShowMoreQuotes] = useState(false);
  const randomQuoteHandler = () => {
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
  );
}

export default App;
