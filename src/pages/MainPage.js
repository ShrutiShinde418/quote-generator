import React, { Fragment, useEffect, useState } from "react";
import Author from "../components/Author";
import Quote from "../components/Quote";

const MainPage = () => {
  const [quote, setQuote] = useState("");
  const randomQuoteHandler = async () => {
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
  return (
    <Fragment>
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
        <div className="xl:w-2/4 mx-auto flex flex-col gap-28 justify-center justify-self-end self-center min-h-screen">
          <Quote quote={quote.quoteText} />
          <Author author={quote.quoteAuthor} genre={quote.quoteGenre} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
