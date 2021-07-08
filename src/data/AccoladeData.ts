import { IconType } from "react-icons/lib";
import { FiTwitter } from "react-icons/fi"
import { HiOutlineLightBulb } from "react-icons/hi"
import { BiPaint } from "react-icons/bi"
import { GiSpectacles } from "react-icons/gi"

interface AccoladeDatainterface {
    name: string;
    role: string;
    icon: IconType;
}

const AccoladeData: AccoladeDatainterface[] = [
    {
        name: "MARKETING EXCELLENCE AWARDS 2017",
        role: "Excellence in Social Media Marketing",
        icon: FiTwitter
    }, {
        name: "THE \"BIG IDEA\" COMPETITION 2017",
        role: "Top 3 Team",
        icon: HiOutlineLightBulb
    }, {
        name: "WATER SEVEN ART DIRECTORS CLUB AWARDS 2016",
        role: "Finalist - Design",
        icon: BiPaint
    }, {
        name: "YOUNG GUNS AWARD 2015",
        role: "Finalist - Print \n Ad Finalist - Digital Campaign",
        icon: GiSpectacles
    }
];

export { AccoladeData };
