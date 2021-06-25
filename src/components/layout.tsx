import * as React from "react"
import { GlobalStyles } from "twin.macro"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <main>{children}</main>
      <Navbar />
      <Footer />
    </div>
  )
}

export default Layout
