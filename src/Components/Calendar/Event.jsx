import React from "react";

const Event = (props) => {
  return (
    <div className="flex w-[90vw] h-auto mx-auto">
      <div className="flex flex-col">
        <span className="text-xl">{props.name}</span>
        <span>
          {props.date.day} - {props.date.value}th {props.date.month}{" "}
          {props.date.year}
        </span>
      </div>
      <div className="w-[12px">
        <span>{props.date.value}</span>
      </div>
    </div>
  );
};

export default Event;
