import { ReactElement } from "react";
import * as GoIcons from "react-icons/go";

interface SidebarInterface {
  title: string;
  icon: ReactElement;
  path: string;
}

export const sidebarData: SidebarInterface[] = [
  {
    title: "Home",
    icon: <GoIcons.GoHome />,
    path: "/",
  },
  {
    title: "Explore",
    icon: <GoIcons.GoSearch />,
    path: "/explore",
  },
  {
    title: "Bookmarks",
    icon: <GoIcons.GoBookmark />,
    path: "/projects",
  },
  {
    title: "Community",
    icon: <GoIcons.GoPeople />,
    path: "/community",
  },
  {
    title: "Reels",
    icon: <GoIcons.GoVersions />,
    path: "/reels",
  },
  {
    title: "Messages",
    icon: <GoIcons.GoComment />,
    path: "/messages",
  },
  {
    title: "Settings",
    icon: <GoIcons.GoGear />,
    path: "/settings",
  },
  {
    title: "Report a problem",
    icon: <GoIcons.GoAlert />,
    path: "/report-problem",
  },
  {
    title: "Profile",
    icon: <GoIcons.GoPerson />,
    path: "/profile",
  },
];
