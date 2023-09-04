import { useState } from 'react';
import { restaurantList } from '../config';
import RestaurantCard from './RestaurantCard';

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <>
      <div className='search-container'>
        <input
          type='text'
          className='search-input'
          placeholder='Search'
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className='search-btn'
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, restaurants);
            //update the state - restaurants variable
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className='restaurant-list'>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
