import { ReactElement } from "react";
import { RxDashboard } from "react-icons/rx";
import { BsClipboardCheck } from "react-icons/bs";
import { GoReport } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import {
  IoPieChartOutline,
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
    path: "/",
  },
  {
    title: "Progress",
    icon: <IoPieChartOutline />,
    path: "/",
  },
  {
    title: "Calendar",
    icon: <IoCalendarClearOutline />,
    path: "/",
  },
  {
    title: "Reports",
    icon: <GoReport />,
    path: "/",
  },
  {
    title: "Messages",
    icon: <IoChatbubbleOutline />,
    path: "/",
  },
  {
    title: "Settings",
    icon: <IoSettingsOutline />,
    path: "/",
  },
  {
    title: "Trash",
    icon: <LuTrash />,
    path: "/",
  },
  {
    title: "Profile",
    icon: <FiUser />,
    path: "/",
  },
];
