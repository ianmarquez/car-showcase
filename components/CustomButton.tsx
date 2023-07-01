"use client";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  disabled = false,
  title,
  containerStyles,
  handleClick,
  btnType,
}) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={clsx("custom-btn", containerStyles)}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
