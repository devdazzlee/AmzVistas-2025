import { Button } from "@/components/ui/button";
import React from "react";
import "../../Banner-Card/Banner-Card.css";

interface ServiceCardProps {
  heading: string;
  isPara?: boolean;
  paraText?: string;
  isButton?: boolean;
  buttonText?: string;
  isBlueBg?: boolean;
}

const ServiceCard = ({
  heading,
  isPara,
  paraText,
  isButton,
  buttonText,
  isBlueBg = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`w-full md:w-4/5 mx-auto flex flex-col justify-center items-center text-center p-4  md:my-2 my-6  h-auto md:h-56  ${
        isBlueBg ? "bg-gray-200 rounded" : ""
      }`}
    >
      <h1 className="gradient-text text-xl md:text-4xl font-bold">{heading}</h1>
      {isPara && <p className="text-sm mt-3 w-4/5">{paraText}</p>}
      {isButton && (
        <Button className="bg-blue-600 hover:bg-blue-700 mt-4">
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;
