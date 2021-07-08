import { IconType } from "react-icons/lib";
import { RiLightbulbFlashFill, RiRocket2Line } from "react-icons/ri"
import { FaPencilAlt, FaHtml5 } from "react-icons/fa"
import { HiOutlineDesktopComputer } from "react-icons/hi"
import { IoBugOutline } from "react-icons/io5"

interface WorkprocessDatainterface {
    name: string;
    icon: IconType;
}

const WorkprocessData: WorkprocessDatainterface[] = [
    {
        name: "IDEA",
        icon: RiLightbulbFlashFill
    }, {
        name: "SKETCH",
        icon: FaPencilAlt
    }, {
        name: "DESIGN",
        icon: HiOutlineDesktopComputer
    }, {
        name: "DEVOLOP",
        icon: FaHtml5
    }, {
        name: "TEST",
        icon: IoBugOutline
    }, {
        name: "LAUNCH",
        icon: RiRocket2Line
    }
];

export { WorkprocessData };
