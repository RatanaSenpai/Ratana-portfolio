"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ThreeDCardDemoProps = {
  title: string;
  description: string;
  imgSrc: string;
  linkHref: string;
  stack?: string;
};

export function ThreeDCardDemo({
  title,
  description,
  imgSrc,
  linkHref,
  stack,
}: ThreeDCardDemoProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={cn(
          "bg-[#262626] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[27rem] h-auto rounded-sm p-6 border ",
          "box-border h-full w-full border-solid border border-gray-700 hover:border-gray-500"
        )}
      >
        <CardItem
          translateZ="50"
          className="text-base font-bold text-[#A3A3A3]"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-[#F5F5F5]"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imgSrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-sm group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={linkHref}
            target="__blank"
            className="px-4 py-2 rounded-xl font-normal text-base"
          >
            Lien →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-sm bg-black text-[#F5F5F5] dark:text-black text-xs font-sans"
          >
            {stack}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
