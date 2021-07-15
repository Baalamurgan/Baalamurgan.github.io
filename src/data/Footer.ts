import { IconType } from "react-icons/lib";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"

interface FooterDataInterface {
    icon: IconType
    hoverstyle: string
    link: string
}

const FooterData: FooterDataInterface[] = [
    {
        icon: FaFacebookSquare,
        hoverstyle: "#4267B2",
        link: "https://en-gb.facebook.com/baalamurgan.k.a"
    }, {
        icon: FaTwitter,
        hoverstyle: "#1DA1F2",
        link: "https://twitter.com/baalamurgan"
    }, {
        icon: FaLinkedin,
        hoverstyle: "#2867B2",
        link: "https://www.linkedin.com/in/baalamurgan/"
    }, {
        icon: AiFillInstagram,
        hoverstyle: "#d6249f",
        link: "https://www.instagram.com/baalamurgan"
    }
];

export { FooterData }