import { IconType } from "react-icons/lib";
import { GiCoffeeCup } from "react-icons/gi"
import { IoAlarmOutline } from "react-icons/io5"
import { FaHtml5 } from "react-icons/fa"
import { FaUserCheck } from "react-icons/fa"

interface MilestoneDatainterface {
    name: string;
    value: number;
    icon: IconType;
}

const MilestoneData: MilestoneDatainterface[] = [
    {
        name: "CUPS OF COFFEE",
        value: 5012,
        icon: GiCoffeeCup
    }, {
        name: "HOURS WORKED",
        value: 4210,
        icon: IoAlarmOutline
    }, {
        name: "SUCCESSFULL PROJECTS",
        value: 505,
        icon: FaHtml5
    }, {
        name: "HAPPY CLIENTS",
        value: 253,
        icon: FaUserCheck
    }
];

export { MilestoneData };
