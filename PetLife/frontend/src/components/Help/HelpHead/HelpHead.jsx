import React, { useState, useEffect } from 'react';
import helppet1 from '../../../assets/images/helppet1.jpg';
import helppet2 from '../../../assets/images/helppet2.avif';
import helppet3 from '../../../assets/images/helppet3.jpg';
import './HelpHead.css'

function HelpHead() {
  const imgArray = [helppet1, helppet2, helppet3];
  const [change, setChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prev) => (prev + 1) % imgArray.length);
    }, 1000); // Change image every 1 second
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
    <div className="help">
    <img src={imgArray[change]} alt="Helping pets" style={{ width: '90%', height: '80vh' }} />
    </div>
    </>
  );
}

export default HelpHead;
