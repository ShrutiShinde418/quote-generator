import React, { useState, useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import QuotesPage from "./pages/QuotesPage";
import { Context } from "./context/Context";
import { Oval } from "react-loader-spinner";

function App() {
  const [quote, setQuote] = useState("");
  const [showMoreQuotes, setShowMoreQuotes] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
      .then((data) =>
        data.json().then((decodedData) => {
          setQuote(decodedData.data[0]);
          setLoading(false);
        })
      )
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <Context.Provider
      value={{
        showMoreQuotes: showMoreQuotes,
        showMoreQuotesHandler: moreQuotesHandler,
      }}
    >
      <div className="xl:container mx-auto min-h-screen flex flex-col font-raleway">
        <header className="self-end justify-items-end	sm:mt-5 my-10 mx-8">
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
        ) : loading ? (
          <Oval
            height={80}
            width={80}
            color="#4f4f4f"
            wrapperClass="self-center justify-self-center mt-44"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#828282"
            strokeWidth={3}
            strokeWidthSecondary={3}
          />
        ) : (
          <MainPage
            loading={loading}
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
