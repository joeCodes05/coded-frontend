import { IconType } from "react-icons";

export interface ButtonPropsType {
  text: string;
  onClick: () => void;
}

export interface CollaborationType {
  title: string;
  content: string;
  Icon: IconType;
}
