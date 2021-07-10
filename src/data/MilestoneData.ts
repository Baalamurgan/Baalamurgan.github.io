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
        name: "Milestone-1",
        value: 111,
        icon: GiCoffeeCup
    }, {
        name: "Milestone-2",
        value: 222,
        icon: IoAlarmOutline
    }, {
        name: "Milestone-3",
        value: 333,
        icon: FaHtml5
    }, {
        name: "Milestone-4",
        value: 444,
        icon: FaUserCheck
    }
];

export { MilestoneData };
