import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Tabnext,
} from "./carousel";
import { cn } from "@/lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-3 tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const Tabs = ({ handlenav }) => {
  const [activeTab, setActiveTab] = React.useState("Leads");
  const list = ["Leads", "Web", "Outreach", "Design", "Event", "Marketing"];
  return (
    <>
      <div className="md:hidden flex w-full p-6 items-center justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent className="-ml-2">
            {list.map((item, index) => (
              <CarouselItem
                key={index}
                className={`basis-1/3 pr-20 ${item == "Design" ? "pl-8" : ""} ${
                  item == "Leads" ? "pl-8" : ""
                } `}
              >
                <Tabnext
                  item={item}
                  handlenav={handlenav}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden md:flex mb-12 w-1/4 self-start md:self-center md:items-center md:w-1/3">
        <div className="block cursor-pointer">
          <nav className="flex gap-1 md:gap-6 " aria-label="Tabs">
            {list.map((item, index) => (
              <button
                key={index}
                onClick={(e) => {
                  handlenav(item);
                  setActiveTab(item);
                }}
                className={`shrink-0 font-lato font-bold md:text-xl rounded-lg p-1  hover:bg-[#C89E6D] ${
                  activeTab == item
                    ? "bg-[#C89E6D] text-gray-800"
                    : "text-white"
                }  transition duration-200 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-gray-200`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  Tabs,
};
