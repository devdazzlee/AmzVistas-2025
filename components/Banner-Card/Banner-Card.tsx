import React from "react";
import { Button } from "../ui/button";
import "./Banner-Card.css"; 

interface BannerCardProps {
  heading: string;
  ishead2?: boolean;
  paragraph?: string;
  heading2?: string;
  btnTxt?: string;
}

const BannerCard = ({
  heading,
  ishead2,
  paragraph,
  heading2,
  btnTxt,
}: BannerCardProps) => {
  return (
    <div className="w-full md:w-4/12 mx-auto flex flex-col justify-center items-center text-center p-6  shadow-2xl rounded-lg bg-white h-56 my-6 md:my-6">
      <h1 className="gradient-text  text-xl md:text-2xl font-bold mb-4">{heading}</h1>
      {!ishead2 && <p className="text-sm">{paragraph}</p>}
      {ishead2 && (
        <h2 className="gradient-text text-xl font-semibold mb-2">{heading2}</h2>
      )}
      {ishead2 && <Button className="bg-blue-600 hover:bg-blue-700 mt-4">{btnTxt}</Button>}
    </div>
  );
};

export default BannerCard;
