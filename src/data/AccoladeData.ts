import { IconType } from "react-icons/lib";
import { FiTwitter } from "react-icons/fi"
import { HiOutlineLightBulb } from "react-icons/hi"
import { BiPaint } from "react-icons/bi"
import { GiSpectacles } from "react-icons/gi"

interface AccoladeDatainterface {
    name: string;
    title: string;
    icon: IconType;
}

const AccoladeData: AccoladeDatainterface[] = [
    {
        name: "Accolade-1",
        title: "Accolade-1 title",
        icon: FiTwitter
    }, {
        name: "Accolade-2",
        title: "Accolade-2 title",
        icon: HiOutlineLightBulb
    }, {
        name: "Accolade-3",
        title: "Accolade-3 title",
        icon: BiPaint
    }, {
        name: "Accolade-4",
        title: "Accolade-4 title",
        icon: GiSpectacles
    }
];

export { AccoladeData };
