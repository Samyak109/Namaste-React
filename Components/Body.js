import { useEffect, useState } from "react";
import * as zomatoData from "../zomato.json";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
const Body = () => {
  const [restaurants, setRestaurants] = useState(zomatoData);

  useEffect(() => {
    console.log("Called from useeffect");
    (async () => {
      const result = await getDataFromAPI(setAllData);
      const restaurants = result?.page_data?.sections;
      setFilteredRestaurants(restaurants);
      setAllData(restaurants);
    })();
  }, []);

  return (
    <>
      <Search
        key="search"
        allData={zomatoData}
        updateRestaurantOnFiltered={setRestaurants}
      />
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

const getDataFromAPI = async (setRestaurants) => {
  try {
    console.log("Fetching data");
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "PHPSESSID=45b45584301a625c3b1835e8a7940e11; ak_bmsc=933390DDD2FA7E3431664F7E086B09E0~000000000000000000000000000000~YAAQZ5YRYIdUZFeHAQAAU1JyehPFiUJl2tC/ZjNYjwSGFEg1mYeIQvqn5wzNr5KgYUscp+3c5gimQDlnJ/rXTBB+xeRjtwZXWvsrmjSRnEjYx/ZuUwY4EhUuqs/BpkLMiIYKlpbfIeZZenSF/tEw2JcSDBAqxruWCl6AdWh3LznoJFYGteM/jf70EwnDR0LPWwZmubMBdbXZS56SXhcZdAVeOIuMQruz75OElUgxqwdxPB9uzljzthcUK87QIkucIdeQRZqWk/MAyi316T1XeW8fJJSYFUlqXAN0U2SPgNX88Fei6nz1PahLqKxt2q8Ux9BkZt3nS0rnF1QmFxpcBqCLSjGVjIOpHVs2dr6Q0KdxFjKuYMLTKAGp/uQ=; csrf=e8d92d9f9850fd1bdebbb668ffd47e7c; fbcity=3; fbtrack=b1b58734ee78a5f17571ab2c17bed914; fre=0; rd=1380000; zl=en; AWSALBTG=wbecEQGNUtWBlg/DY9YV8VktAprCUc84wWZhR8CJQs/bGZHmjf9jaQmvYbQbc+BBdN4LUX0nnPUEkPjFwuxNP5R/o+38E5Gaua/JY6CakvYK+2p5wENlK5yJkFCbFKGcHansqp73EsEKgQArVWe6ctyOp/ottd7bKGv+SGe6nmrf; AWSALBTGCORS=wbecEQGNUtWBlg/DY9YV8VktAprCUc84wWZhR8CJQs/bGZHmjf9jaQmvYbQbc+BBdN4LUX0nnPUEkPjFwuxNP5R/o+38E5Gaua/JY6CakvYK+2p5wENlK5yJkFCbFKGcHansqp73EsEKgQArVWe6ctyOp/ottd7bKGv+SGe6nmrf; locus=%7B%22addressId%22%3A0%2C%22lat%22%3A19.017656%2C%22lng%22%3A72.856178%2C%22cityId%22%3A3%2C%22ltv%22%3A3%2C%22lty%22%3A%22city%22%2C%22fetchFromGoogle%22%3Afalse%2C%22dszId%22%3A77482%2C%22fen%22%3A%22Mumbai%22%7D; ltv=3; lty=3"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const res = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/mumbai/restaurants?place_name=Mumbai&dishv2_id=68987&location=&isMobile=0",
      requestOptions
    );

    const result = await res.json();
    setRestaurants(result.page_data.sections);
  } catch (error) {
    console.log(error);
  }
};
export default Body;
