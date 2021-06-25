import { RiContactsBook2Line } from "react-icons/ri";
import { TiHomeOutline, TiContacts } from "react-icons/ti";
import { AiOutlineTeam } from "react-icons/ai";
import { IconType } from "react-icons/lib";

interface NavItemsDatainterface {
  name: string;
  HashLink: string;
  link: string;
  icon: IconType;
}

const NavItemsData: NavItemsDatainterface[] = [
  {
    name: "HOME",
    HashLink: "home",
    link: "/",
    icon: TiHomeOutline,
  }, {
    name: "PROFILE",
    HashLink: "profile",
    link: "#profile",
    icon: AiOutlineTeam,
  }, {
    name: "PORTFOLIO",
    HashLink: "portfolio",
    link: "#portfolio",
    icon: TiHomeOutline,
  }, {
    name: "SERVICES",
    HashLink: "services",
    link: "#services ",
    icon: TiHomeOutline,
  }, {
    name: "RESUME",
    HashLink: "resume",
    link: "#resume",
    icon: TiHomeOutline,
  }, {
    name: "REFERENCES",
    HashLink: "references",
    link: "#references",
    icon: TiContacts,
  }, {
    name: "SKILLS",
    HashLink: "skills",
    link: "#skills",
    icon: TiHomeOutline,
  }, {
    name: "CONTACT",
    HashLink: "contact",
    link: "#contact",
    icon: RiContactsBook2Line,
  },
];

export { NavItemsData };
