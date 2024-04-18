/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn";
import React, { ComponentProps, ComponentPropsWithoutRef } from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] mt-20">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => <div></div>;

const Code = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-gray-600 font-mono border border-accent p-0.5 rounded",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

const items = [
  {
    title: <div className="text-[#A3A3A3]">Bonjour 👋 !</div>,
    description: (
      <p className="text-[#F5F5F5]">
        Je suis Ratana, avec 20 ans d'expérience dans l'IT et une passion
        récente pour le développement web après avoir réussi avec succès une
        formation de 6 mois auprès d'{" "}
        <Code>
          <img
            className="size-4 inline"
            src="/assets/images/Logo_OpenClassrooms.png"
            alt="logo openclassrooms"
          />{" "}
          OpenClassrooms
        </Code>
        . Aujourd'hui, je me concentre sur le développement front-end, utilisant
        principalement{" "}
        <Code>
          <img
            className="size-4 inline"
            src="/assets/svg/react.svg"
            alt="logo de React"
          />{" "}
          React
        </Code>{" "}
        <Code>
          <img
            className="size-4 inline"
            src="/assets/svg/javascript.svg"
            alt="logo de Javascript"
          />{" "}
          JS
        </Code>
        . Mon parcours diversifié dans l'IT enrichit ma compréhension des enjeux
        technologiques, me permettant d'aborder chaque projet web avec
        innovation et perspective.
      </p>
    ),
    header: <Skeleton />,
    className: "md:col-span-2 text-center-custom",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: <div className="text-[#A3A3A3]">Ratana Mey</div>,
    description: (
      <div className="text-[#F5F5F5] italic">Développeur Font-End React JS</div>
    ),
    header: (
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/assets/images/profil.png"
          alt="Ratana Mey"
          width={200}
          height={200}
          className="border-white border-4 rounded-full"
        />
      </div>
    ),
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: (
      <div className="text-[#A3A3A3]">
        <IconSignature className="h-4 w-4 text-neutral-500 mb-1" />
        LinkeDIn | Github
      </div>
    ),

    header: <Skeleton />,
    className: "md:col-span-1",
    icon: (
      <div className="flex space-x-10 justify-center items-center mb-14">
        <a
          href="https://www.linkedin.com/in/ratana-mey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/svg/linkedin-icon.svg"
            alt="LinkedIn"
            className="h-12 w-12 hover:opacity-50"
          />
        </a>
        <a
          href="https://github.com/RatanaSenpai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/images/Github.png"
            alt="GitHub"
            className="h-12 w-12 hover:opacity-50 rounded-sm"
          />
        </a>
      </div>
    ),
  },
  {
    title: (
      <div className="text-[#A3A3A3]">
        <IconTableColumn className="h-4 w-4 text-neutral-500 mb-2" /> Skills
      </div>
    ),

    header: <Skeleton />,
    className: "md:col-span-2",
    icon: (
      <div className="flex space-x-10 justify-center items-center mb-14">
        <img
          src="/assets/svg/react.svg"
          alt="LinkedIn"
          className="h-12 w-12 hover:opacity-50"
        />
        <img
          src="/assets/svg/javascript.svg"
          alt="GitHub"
          className="h-12 w-12 hover:opacity-50 rounded-sm"
        />
        <img
          src="/assets/svg/git-icon.svg"
          alt="GitHub"
          className="h-12 w-12 hover:opacity-50 rounded-sm"
        />
      </div>
    ),
  },
];
