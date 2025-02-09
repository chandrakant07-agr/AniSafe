import './SectionThree.css'
import petCare from '../../../assets/images/pet-care.webp';

function SectionThree() {
    return (
        <>
            <div className="sectionthree-container1">
                <div className="sectionthree-heading">Help a Street Dog in Need – Every Little Gesture Matters!</div>
                <div className="sectionthree-container2">
                    <div className="sectionthree-text">
                        Sometimes, street dogs face unimaginable challenges without anyone to help them. You can make a difference by showing compassion and kindness. Whether it’s offering a meal or finding them a safe place, your small act can save a life. <br />
                        🐾 How Can You Help? <br />
                        ✔️ Help by providing food and water to street dogs <br />
                        ✔️ Call us if you see a dog in need of medical attention or emergency care <br />
                        ✔️ Support adoption initiatives, bringing them into loving homes <br />
                        Your actions could change their world. A simple gesture, like placing a roti for a hungry dog, can go a long way. Join us in making a difference today! 🐶💖 <br />
                        👉 Act Now, Be a Hero for a Street Dog 💕 <br />
                        <a href="/Help">Help a Street Dog Now!!!</a>
                    </div>
                    <div className="sectionthree-img">
                        <img src={petCare} alt="pet-care" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionThree