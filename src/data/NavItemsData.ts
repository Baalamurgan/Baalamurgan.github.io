import { IconType } from "react-icons/lib";
import { RiContactsBook2Line } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { AiOutlineTeam, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdTimeline } from "react-icons/md"
import { SiSkillshare } from "react-icons/si"

interface NavItemsDatainterface {
  name: string;
  link: string;
  icon: IconType;
}

const NavItemsData: NavItemsDatainterface[] = [
  {
    name: "HOME",
    link: "home" || "",
    icon: TiHomeOutline,
  }, {
    name: "ABOUT",
    link: "about",
    icon: AiOutlineTeam,
  }, {
    name: "PROJECTS",
    link: "project",
    icon: AiOutlineFundProjectionScreen,
  }, {
    name: "TIMELINE",
    link: "timeline",
    icon: MdTimeline,
  }, {
    name: "SKILLS",
    link: "skills",
    icon: SiSkillshare,
  }, {
    name: "CONTACT",
    link: "contact",
    icon: RiContactsBook2Line,
  },
];

export { NavItemsData };
