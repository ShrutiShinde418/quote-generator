import React from "react";

const Quote = (props) => {
  return (
    <h1 className="font-medium sm:text-3xl text-[1.65rem] leading-tight text-black border-l-yellow border-l-[6px] sm:pl-[4.5rem] pl-10">
      &ldquo;{props.quote}&rdquo;
    </h1>
  );
};

export default Quote;
