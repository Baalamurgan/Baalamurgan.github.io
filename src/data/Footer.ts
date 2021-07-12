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
        link: "https://en-gb.facebook.com/baalamurgan.k.a"
    }, {
        icon: FiTwitter,
        link: "https://twitter.com/baalamurgan"
    }, {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/baalamurgan/"
    }, {
        icon: FiInstagram,
        link: "https://www.instagram.com/baalamurgan"
    }
];

export { FooterData }