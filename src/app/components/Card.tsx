import React from "react";
import { CardProps } from "../types";

const Card: React.FC<CardProps> = ({title, children}) => {
  return (
    <div className="w-52 rounded overflow-hidden shadow-lg bg-purple-300">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
    </div>
  );
}

export default Card;
