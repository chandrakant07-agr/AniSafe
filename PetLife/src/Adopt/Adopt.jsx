import NavBar from "../BoilerPlate/navbar/navbar"
import Footer from "../BoilerPlate/Footer/Footer"
import AdoptCard from "./AdoptCard/AdoptCard"
import AdoptHeader from "./AdoptHeader/AdoptHeader"

export default function Adopt(){
    return(
        <>
            < NavBar />
            <AdoptHeader />
            < AdoptCard />
            < Footer />
        </>
    )
}