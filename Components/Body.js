import * as zomatoData from "../zomato.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="cards">
      {zomatoData.SECTION_SEARCH_RESULT.map((restaurant) => {
        return (
          <RestaurantCard
            imageURL={restaurant.info?.image?.url}
            name={restaurant.info.name}
            cuisines={restaurant.info.cuisine}
            deliveryTime={restaurant.order.deliveryTime}
          />
        );
      })}
    </div>
  );
};

export default Body;
