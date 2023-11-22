import React, { useEffect, useState } from "react";
import Quote from "../components/Quote";

const QuotesPage = () => {
  const getAuthorQuotes = async () => {
    fetch(
      "https://quote-garden.onrender.com/api/v3/quotes?author=Bill%20Gates&limit=3"
    )
      .then((jsonData) => jsonData.json())
      .then((decodedData) => setAuthorQuotes(decodedData.data))
      .catch((err) => alert(err));
  };
  useEffect(() => {
    getAuthorQuotes();
  }, []);
  const [authorQuotes, setAuthorQuotes] = useState([]);

  return (
    <div className="flex flex-col font-raleway gap-20 xl:container mx-auto min-h-screen xl:w-2/4">
      {authorQuotes.map((item) => {
        return <Quote quote={item.quoteText} />;
      })}
    </div>
  );
};

export default QuotesPage;
