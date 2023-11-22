import React, { useEffect, useState, Fragment, useCallback } from "react";
import Quote from "../components/Quote";

const QuotesPage = (props) => {
  const getAuthorQuotes = useCallback(async () => {
    fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?author=${props.author}&limit=3`
    )
      .then((jsonData) => jsonData.json())
      .then((decodedData) => setAuthorQuotes(decodedData.data))
      .catch((err) => alert(err));
  }, [props.author]);

  useEffect(() => {
    getAuthorQuotes();
  }, [getAuthorQuotes]);
  const [authorQuotes, setAuthorQuotes] = useState([]);
  console.log(authorQuotes);
  console.log("rendered");
  return (
    <Fragment>
      <div className="flex flex-col font-raleway gap-20 xl:container mx-auto min-h-screen xl:w-2/4 mt-5 mb-14">
        <h4 className="pl-[4.5rem] text-4xl text-black2 font-bold">
          {props.author}
        </h4>
        {authorQuotes.map((item, index) => {
          return <Quote quote={item.quoteText} key={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default QuotesPage;
