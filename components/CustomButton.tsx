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
  textStyles,
  rightIcon,
}) => {
  return (
    <button
      disabled={disabled}
      type={btnType || "button"}
      className={clsx("custom-btn", containerStyles)}
      onClick={handleClick}
    >
      <span className={clsx("flex-1", textStyles)}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
