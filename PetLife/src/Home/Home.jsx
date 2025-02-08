import NavBar from "../BoilerPlate/navbar/navbar"
import Header from "./header/Header"
import Footer from "../BoilerPlate/Footer/Footer"
import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import SectionThree from "./SectionThree/SectionThree"
export default function Home(){
    return(
        <>
            <NavBar />
              <Header />
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <Footer />
        </>
    )
}