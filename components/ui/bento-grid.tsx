import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const isCentered = className?.includes("text-center-custom");
  return (
    <div
      className={cn(
        "row-span-1 rounded-sm group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4  dark:border-white/[0.2] bg-[#262626] border border-transparent justify-between flex flex-col space-y-4",
        className,
        "box-border h-full w-full border-solid border border-gray-700 hover:border-gray-500"
      )}
    >
      {header}
      <div
        className={`group-hover/bento:translate-x-2 transition duration-200 ${
          isCentered ? "flex flex-col justify-center h-full" : ""
        }`}
      >
        {icon}
        <div
          className={`font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 ${
            isCentered ? "" : "text-left"
          }`}
        >
          {title}
        </div>
        <div
          className={`font-sans font-normal text-neutral-600 text-base dark:text-neutral-300 ${
            isCentered ? "" : "text-left"
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
