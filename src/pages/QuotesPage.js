import React, { useEffect, useState, Fragment, useCallback } from "react";
import Quote from "../components/Quote";
import { Oval } from "react-loader-spinner";

const QuotesPage = (props) => {
  const [authorQuotes, setAuthorQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAuthorQuotes = useCallback(async () => {
    setLoading(true);
    fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?author=${props.author}&limit=3`
    )
      .then((jsonData) => jsonData.json())
      .then((decodedData) => {
        setLoading(false);
        setAuthorQuotes(decodedData.data);
      })
      .catch((err) => alert(err));
  }, [props.author]);
  useEffect(() => {
    getAuthorQuotes();
  }, [getAuthorQuotes]);
  return (
    <Fragment>
      <div className="flex flex-col font-raleway sm:gap-20 gap-14 xl:container mx-auto min-h-screen xl:w-2/4 sm:w-2/3 w-10/12 mt-5 mb-14">
        <h4 className="sm:pl-[4.5rem] sm:text-4xl text-3xl text-black2 font-bold">
          {props.author}
        </h4>
        {loading && (
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
        )}
        {authorQuotes.map((item, index) => {
          return <Quote quote={item.quoteText} key={index} />;
        })}
      </div>
    </Fragment>
  );
};

export default QuotesPage;
