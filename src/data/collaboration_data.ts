import { IconType } from "react-icons";
import { TfiThought } from "react-icons/tfi";
import { BsFlag, BsClock } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";

interface CollaborationType {
  title: string;
  content: string;
  Icon: IconType;
}

export const collaborationData: CollaborationType[] = [
  {
    title: "Thinking big",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: TfiThought,
  },

  {
    title: "Starting small",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: BsFlag,
  },

  {
    title: "Creating fast",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: BsClock,
  },

  {
    title: "Innovating scale",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    Icon: GoLightBulb,
  },
];
