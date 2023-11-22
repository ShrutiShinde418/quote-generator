import React from "react";
import "./Author.css";

const Author = (props) => {
  return (
    <button className="author__box flex justify-between items-center hover:bg-black2 px-6 py-10">
      <div className="flex flex-col gap-1 items-start">
        <h2 className="text-2xl font-bold text-black1">{props.author}</h2>
        <h3 className="text-sm font-medium text-gray1">{props.genre}</h3>
      </div>
      <div>
        <span className="material-symbols-outlined text-white">
          arrow_right_alt
        </span>
      </div>
    </button>
  );
};

export default Author;
