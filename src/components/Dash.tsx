import React from "react";
import { twMerge } from "tailwind-merge";

const Dash = ({bg}:{bg?:string}) => {
  return <div className={twMerge('h-[5px] w-[70px] mt-10', bg? bg : 'bg-accent')} />;
};

export default Dash;
