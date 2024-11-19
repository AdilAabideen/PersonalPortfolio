"use client"
import Link from "next/link";
import { cn } from "../lib/utils";
import Image from "next/image";
export const BentoGrid = ({
  className,
  children,
  link
}) => {
  return (
    (<div
      className={cn(
        "grid lg:auto-rows-[25rem] grid-cols-1 lg:grid-cols-3 gap-4 w-full mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  technologies,
  icon,
  item,
  image,
  link
}) => {
  return (
    (<div
        className={cn(
            "row-span-1 lg:p-2 xl:p-4 rounded-lg group/bento hover:shadow-xl transition duration-200 shadow-input  p-4 dark:bg-black bg-opacity-70 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
            className
          )}>
      <div className=" group-hover/bento:translate-x-2 flex flex-col items-center justify-center p-8 gap-6 transition-transform duration-500 ease-in-out">
        <div className="flex flex-row items-start justify-between w-full">
            <h1 className="text-white font-gotham-bold text-2xl lg:text-2xl xl:text-4xl w-full">{title}</h1>
            <a href={link} target="_blank"  className="text-xl lg:text-2xl mt-3 cursor-pointer
            ">{icon}</a>
        </div>
        <p className="text-neutral-400 font-gotham-medium text-base lg:text-base xl:text-xl w-full">{description}</p>
        <div className="flex flex-row items-center justify-start gap-4 w-full">
        {
            technologies.map((technology, index) => {
                return (
                    <p key={index} className="text-[#80D7D0] font-gotham-narrow text-base lg:text-base xl:text-xl" >{technology}</p>
                )
            })
        }
        </div>
      </div>
    </div>)
  );
};

