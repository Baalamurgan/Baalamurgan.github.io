import { IconType } from "react-icons/lib";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi"
import { ImPinterest2 } from "react-icons/im"
import { FaLinkedin } from "react-icons/fa"
import { BiBasketball } from "react-icons/bi"

interface FooterDataInterface {
    icon: IconType
    link: string
}

const FooterData: FooterDataInterface[] = [
    {
        icon: FiFacebook,
        link: "Link to Facebook"
    }, {
        icon: FiTwitter,
        link: "Link to Twitter"
    }, {
        icon: FaLinkedin,
        link: "Link to LinkedIn"
    }, {
        icon: BiBasketball,
        link: "Link to Dribbble"
    }, {
        icon: FiInstagram,
        link: "Link to Instagram"
    }, {
        icon: ImPinterest2,
        link: "Link to Pinterest"
    }
];

export { FooterData }