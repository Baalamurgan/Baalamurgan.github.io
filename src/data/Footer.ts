import { IconType } from "react-icons/lib";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi"
import { ImPinterest2 } from "react-icons/im"
import { FaLinkedin } from "react-icons/fa"
import { BiBasketball } from "react-icons/bi"

interface FooterDataInterface {
    icon: IconType
    hoverstyle: string
    link: string
}

const FooterData: FooterDataInterface[] = [
    {
        icon: FiFacebook,
        hoverstyle: "backblue",
        link: "https://en-gb.facebook.com/baalamurgan.k.a"
    }, {
        icon: FiTwitter,
        hoverstyle: "aqua",
        link: "https://twitter.com/baalamurgan"
    }, {
        icon: FaLinkedin,
        hoverstyle: "darkblue",
        link: "https://www.linkedin.com/in/baalamurgan/"
    }, {
        icon: FiInstagram,
        hoverstyle: "background",
        link: "https://www.instagram.com/baalamurgan"
    }
];

export { FooterData }