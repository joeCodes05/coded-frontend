import { ReactElement } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsClipboardCheck } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";
import {
  IoChatbubbleOutline,
  IoCalendarClearOutline,
  IoSettingsOutline,
} from "react-icons/io5";

interface SidebarInterface {
  title: string;
  icon: ReactElement;
  path: string;
}

export const sidebarData: SidebarInterface[] = [
  {
    title: "Dashboard",
    icon: <RxDashboard />,
    path: "/",
  },
  {
    title: "Task Tracker",
    icon: <BsClipboardCheck />,
    path: "/task-tracker",
  },
  {
    title: "Projects",
    icon: <GoProjectSymlink />,
    path: "/projects",
  },
  {
    title: "Calendar",
    icon: <IoCalendarClearOutline />,
    path: "/calendar",
  },
  {
    title: "Reports",
    icon: <GoReport />,
    path: "/reports",
  },
  {
    title: "Messages",
    icon: <IoChatbubbleOutline />,
    path: "/messages",
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline />,
    path: "/settings",
  },
  {
    title: "Trash",
    icon: <LuTrash />,
    path: "/trash",
  },
  {
    title: "Profile",
    icon: <FiUser />,
    path: "/profile",
  },
];
