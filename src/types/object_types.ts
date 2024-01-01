import { IconType } from "react-icons";

export interface CollaborationType {
  title: string;
  content: string;
  Icon: IconType;
}

export interface SkillsObjectStructure {
  title: string;
  percentageValue: number;
}

export interface BlogObjectStructure {
  title: string;
  content: string;
  postImag: string;
  postAuthor: string;
  postDate: string;
  postCategory: string;
}
