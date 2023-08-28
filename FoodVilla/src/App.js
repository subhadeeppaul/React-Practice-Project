import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';

import Body from './components/Body';

import Footer from './components/Footer';
import { IMG_CDN_URL } from './config';

/**
         Header
            - Logo (Title)
            - Nav items (rightSide)
            - Cart
         Body
            -SearchBar
            - RestaurantList
                -RestaurantCard (many cards)
                    -Image
                    - Name
                    - Rating
                    - Cuisines
         Footer
            -Links
            - Copyright
        
        */

//Config Driven UI - Mock Data from API

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className='card'>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt='Restaurant image' />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
