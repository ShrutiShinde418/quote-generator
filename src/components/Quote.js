import React from "react";

const Quote = (props) => {
  return (
    <h1 className="font-medium text-3xl leading-tight text-black border-l-yellow border-l-[6px] pl-[4.5rem]">
      &ldquo;{props.quote}&rdquo;
    </h1>
  );
};

export default Quote;
