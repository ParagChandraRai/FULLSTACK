import React, { useState } from 'react';
import muffinImage from './img2.jpg'; // Import the image file
import cookieImage from './img1.jpg'; // Import the image file

const Store = () => { 
  const [muffinsCount, setMuffinsCount] = useState(10);
  const [cookiesCount, setCookiesCount] = useState(15);
  const [totalSold, setTotalSold] = useState(0);

  const handleBuyMuffinClick = () => {
    if (muffinsCount > 0) {
      setMuffinsCount(muffinsCount - 1);
      setTotalSold(totalSold + 1);
    }
  };

  const handleBuyCookieClick = () => {
    if (cookiesCount > 0) {
      setCookiesCount(cookiesCount - 1);
      setTotalSold(totalSold + 1);
    }
  };

  return (
    <div>
      <h2>Salem Café</h2>

      <div>
        <h3>Muffins</h3>
        <img src={muffinImage} alt="Muffin" width="200" height="100" />
        <p>Available: {muffinsCount}</p>
        <button onClick={handleBuyMuffinClick} disabled={muffinsCount === 0}>
          Buy Muffin
        </button>
      </div>

      <div>
        <h3>Chocolate Chip Cookies</h3>
        <img src={cookieImage} alt="Cookie" width="200" height="100" />
        <p>Available: {cookiesCount}</p>
        <button onClick={handleBuyCookieClick} disabled={cookiesCount === 0}>
          Buy Cookie
        </button>
      </div>

      <p>Total Items Sold: {totalSold}</p>
    </div>
  );
};

export default Store;
