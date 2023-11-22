import React, { Fragment } from "react";
import Author from "../components/Author";
import Quote from "../components/Quote";

const MainPage = (props) => {
  return (
    <Fragment>
      <div className="xl:container mx-auto min-h-screen flex flex-col font-raleway">
        <div className="xl:w-2/4 mx-auto flex flex-col gap-28 justify-center justify-self-end self-center min-h-screen">
          <Quote quote={props.text} />
          <Author author={props.author} genre={props.genre} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
