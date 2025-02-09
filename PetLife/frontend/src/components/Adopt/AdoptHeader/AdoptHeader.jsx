import img1 from '../../../assets/images/adopt-catimg.jpeg'
import img2 from '../../../assets/images/adopt-chikenimg.jpeg'
import img3 from '../../../assets/images/adopt-rabbitimg.jpeg'
import img4 from '../../../assets/images/adopt-cowimg.jpeg'
import img5 from '../../../assets/images/adopt-mouseimg.jpeg'
import img6 from '../../../assets/images/adopt-dogimg.jpeg'
import './AdoptHeader.css'

import { useState, useEffect } from 'react'

export default function AdoptHeader() {
    const imgArray = [img1, img2, img3, img4, img5, img6];
    const [change, setChange] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setChange((prev) => (prev + 1) % imgArray.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        <div className="adoptheader">
            <div className="adopt-head">
            <img src={imgArray[change]} alt="Adoptable Animal" />
        </div>
        <h1>Meet Our Loving, Yet Lonely Pets Waiting for a Home...💕</h1>
        <div className="category">
            <div className="category1 imgcategory">
                <img src={img1} alt="" />
                <p>Cat</p>
            </div>
            <div className="category2 imgcategory">
                <img src={img2} alt="" />
                <p>Chiken</p>
            </div>
            <div className="category3 imgcategory">
                <img src={img3} alt="" />
                <p>Rabbit</p>
            </div>
            <div className="category4 imgcategory">
                <img src={img4} alt="" />
                <p>Cow</p>
            </div>
            <div className="category5 imgcategory">
                <img src={img5} alt="" />
                <p>Mouse</p>
            </div>
            <div className="category6 imgcategory">
                <img src={img6} alt="" />
                <p>Dog</p>
            </div>
        </div>
        </div>
        </>

    );
}
