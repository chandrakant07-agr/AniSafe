import NavBar from "../BoilerPlate/navbar/navbar"
import Footer from "../BoilerPlate/Footer/Footer"
import HelpHead from "./HelpHead/HelpHead"
import HelpSelect from "./HelpSelect/HelpSelect"
export default function Help(){
    return(
        <>
        < NavBar />
        <HelpHead />
        <HelpSelect />
        < Footer />
        </>
    )
}