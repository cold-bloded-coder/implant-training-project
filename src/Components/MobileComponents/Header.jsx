import React from "react";
import { Icon } from "@iconify/react";

const Header = (props) => {
  return (
    <div className="h-12 w-full bg-gradient-to-r from-[#3C58BC] to-[#768FEA] flex items-center">
      <div className="w-2/3">
        <span className="text-white text-lg font-medium pl-8">{props.title}</span>
      </div>
      <div className="pr-8 w-1/3 flex justify-end">
        <Icon
          icon="charm:menu-hamburger"
          color="white"
          width="29"
          height="34"
        />
      </div>
    </div>
  );
};

export default Header;
