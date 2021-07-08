import { IconType } from "react-icons/lib";
import { GiChessRook } from "react-icons/gi"
import { SiMaterialdesignicons } from "react-icons/si"
import { IoLeafOutline } from "react-icons/io5"
import { FiMessageSquare } from "react-icons/fi"
import { MdDevices } from "react-icons/md"
import { RiKakaoTalkLine } from "react-icons/ri"

interface ServicesDatainterface {
    name: string;
    description: string;
    icon: IconType;
}

const ServicesData: ServicesDatainterface[] = [
    {
        name: "STRATEGY",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: GiChessRook,
    }, {
        name: "BRANDING",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: IoLeafOutline,
    }, {
        name: "WEB DESIGN",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: SiMaterialdesignicons,
    }, {
        name: "SOCIAL MEDIA",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: FiMessageSquare,
    }, {
        name: "DEVELOPMENT",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: MdDevices,
    }, {
        name: "CONSULTING",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi harum nisi nobis deleniti debitis enim earum quam nesciunt excepturi architecto.",
        icon: RiKakaoTalkLine,
    }
];

export { ServicesData };
