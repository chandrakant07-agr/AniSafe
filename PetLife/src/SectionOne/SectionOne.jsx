import './SectionOne.css';
import petImage from '../assets/pet-adoption.jpg';

function SectionOne() {
    return (
        <>
            <div className="sectionone-container1">
                <div className="sectionone-heading">Give a Loving Home to a Pet in Need! 🐾❤️</div>
                <div className="sectionone-container2">
                    <div className="seactionone-text">
                        Every pet deserves a family, and you can be the reason for their happiness! <br />
                        Adopting a pet not only saves a life but also brings unconditional love into your home. <br />
                        🐶 Why Adopt? <br />
                        ✔️ Provide a safe and loving home <br />
                        ✔️ Save a homeless pet’s life <br />
                        ✔️ Experience lifelong companionship <br />
                        Thousands of adorable pets are waiting for someone like you. <br />
                        Open your heart and adopt today! 🏡💕 <br />
                        👉 Start Your Adoption Journey Now 💕 <br />
                        <a href="">Adopt a Pet!!!</a>
                    </div>
                    <div className="seactionone-img">
                        <img src={petImage} alt="pet-adoption" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionOne;
