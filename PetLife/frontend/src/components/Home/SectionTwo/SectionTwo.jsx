import './SectionTwo.css'
import petHelp from '../../../assets/images/pet-help.webp';

function SectionTwo(){
    return(
        <>
            <div className="sectiontwo-container1">
                <div className="sectiontwo-heading">
                Make a Difference: Your Donation Brings Hope!
                </div>
            <div className="sectiontwo-container2">
                <div className="seactiontwo-img">
                    <img src={petHelp} alt="pet-adoption" />
                </div> 
                <div className="sectiontwo-text">
                Your generosity can change lives! <br /> Donating is not just about giving money; it’s about giving hope and making a difference. <br /> 💖 Why Donate? <br /> ✔️ Support those in need <br /> ✔️ Fund vital causes and research <br /> ✔️ Create a lasting impact in the community <br /> Thousands of lives can be touched with your kindness. <br /> Open your heart and donate today! 🙏💖 <br /> 👉 Join the Movement of Giving! 💕 <br />
                        <a href="/Donate">Donate Me!!!</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default SectionTwo