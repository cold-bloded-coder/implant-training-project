import React from "react";
import { Icon } from "@iconify/react";

const Head = (props) => {
  return (
    <div className="w-full h-5 bg-gradient-to-r from-[#3C58BC] to-[#768FEA]">
      <div className="mx-auto py-3 rounded-full w-[90vw] h-auto bg-white drop-shadow-lg  flex justify-around">
        <div>
          <Icon
            icon="akar-icons:chevron-left"
            color="black"
            width="23"
            height="18"
          />
        </div>
        <div>
          <span className="font-semibold text-sm ">
            {props.date.month} - {props.date.year}
          </span>
        </div>
        <div>
          <Icon
            icon="akar-icons:chevron-left"
            color="black"
            width="23"
            height="18"
            rotate={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
