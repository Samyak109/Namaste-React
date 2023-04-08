import * as zomatoData from "../zomato.json";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
const Body = () => {
  return (
    <>
      <Search key="search"/>
      <div className="cards">
        {zomatoData.SECTION_SEARCH_RESULT.map((restaurant) => {
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
