"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

interface ServiceDetailProps {
  imageSrc?: string;
  listArray: string[];
  reverse?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05 },
};

const ServiceDetail = ({
  imageSrc,
  listArray,
  reverse = false,
}: ServiceDetailProps) => {
  return (
    <motion.div
      className={`w-full md:w-9/12 mx-auto md:flex justify-center items-center text-center my-3  mb-4 ${
        reverse ? "flex-row-reverse" : ""
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Image Section */}
      <motion.div
        className="w-full md:w-2/4 p-4"
        variants={imageVariants}
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={imageSrc || "/images/Services/amazon-fba.jpg"}
          alt="Service Image"
          className="rounded-xl h-auto"
          width={440}
          height={300}
        />
      </motion.div>

      {/* Text/List Section */}
      <motion.div className="w-full md:w-2/4 p-4" variants={contentVariants}>
        <ul className="line-clamp-3 text-left">
          {listArray.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 mb-2"
              variants={listItemVariants}
              whileHover="hover"
            >
              <Check className="text-[#FF8818]" /> {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetail;
