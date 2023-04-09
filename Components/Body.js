import { useState } from "react";
import * as zomatoData from "../zomato.json";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
const Body = () => {
  const [restaurants, setRestaurants] = useState(zomatoData);
  console.log("Called when state changes and BODY component is re - rendered");
  return (
    <>
      <Search key="search" allData={zomatoData} updateRestaurantOnFiltered={setRestaurants} />
      <div className="cards">
        {restaurants.SECTION_SEARCH_RESULT.map((restaurant) => {
          return (
            <RestaurantCard
              imageURL={restaurant.info?.image?.url}
              name={restaurant.info.name}
              cuisines={restaurant.info.cuisine}
              deliveryTime={restaurant.order.deliveryTime}
              key={restaurant.info.resId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
