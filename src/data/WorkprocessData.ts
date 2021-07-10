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
        name: "Process-1",
        icon: RiLightbulbFlashFill
    }, {
        name: "Process-2",
        icon: FaPencilAlt
    }, {
        name: "Process-3",
        icon: HiOutlineDesktopComputer
    }, {
        name: "Process-4",
        icon: FaHtml5
    }, {
        name: "Process-5",
        icon: IoBugOutline
    }, {
        name: "Process-6",
        icon: RiRocket2Line
    }
];

export { WorkprocessData };
