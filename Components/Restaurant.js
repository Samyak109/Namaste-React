import { useEffect, useState } from "react";
import Menu from "./Menu";
import { useParams, useSearchParams } from "react-router-dom";

const Restaurant = () => {
  const [restaurantDetails, setRestaurantDetails] = useState();
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    (async () => {
      const result = await getRestaurantDetailsFromAPI(searchParams.get("url"));
      const resInfo = result?.page_data;
      setRestaurantDetails(resInfo);
    })();
  }, []);
  return (
    <>
      <img
        src={restaurantDetails?.sections?.SECTION_BASIC_INFO.res_thumb}
        alt="No image"
      />
      <h1>{restaurantDetails?.sections?.SECTION_BASIC_INFO.name}</h1>
      <h3>{restaurantDetails?.sections?.SECTION_BASIC_INFO.cuisine_string}</h3>
      <h3>
        {
          restaurantDetails?.sections?.SECTION_BASIC_INFO.rating_new?.ratings
            ?.DELIVERY?.rating
        }{" "}
        -{" "}
        {
          restaurantDetails?.sections?.SECTION_BASIC_INFO.rating_new?.ratings
            ?.DELIVERY?.subtext
        }
      </h3>
      <h3>{restaurantDetails?.orderDetails?.deliveryTime}</h3>
      <div className="menu">
        {restaurantDetails?.order?.menuList?.menus.map((menuObj) => {
          return menuObj?.menu?.categories[0].category.items.map((categoryItem) => {
            const item = categoryItem.item;
            return (
              <Menu
                key={item.id}
                name={item.name}
                price={item.display_price}
                img={item.item_image_thumb_url}
              />
            );
          });
        })}
      </div>
      <Menu />
    </>
  );
};

const getRestaurantDetailsFromAPI = async (param) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "PHPSESSID=c041f4a9bf81757621ffd165f7106067; ak_bmsc=9F340A64885E8FF5538F3A663F2FC193~000000000000000000000000000000~YAAQhJYRYKS7T3mHAQAAbN0piBOooPKdDEfmmgIshQ54xRsY5DBnpynq4oL4A0GjBSnOw2z0lL5U1K2UhIycJLLcYfQgeYhPNMirwrxX6VKV6/QhplvhkWH97zOWvB2+h+aSzVqDXWSA+LSiEE+42K4/AR33/Vy4ABs5R/ZCJ9CHHZhlALVBTrb+d2XfPeJQYuNDeh5CbBg+fporfeG0ArLWt6btAt4rfF1i3oVWibeco08eOsyrjWEhA5EXQRzmdyp5ITLxTOrS8sxxyTrtrVC7AQR/Bxutcp6/o85L0rEGwT4eIYnx5IE7KbZnRDpLNSO59pOmOr0kxwGfYgZRBQbnedxt5SU3pT3CGzMRa2mifmzZi3F+1Qs/Xlt+; csrf=2428c7a76bac90dd6564adafa4e2094a; fbcity=13; fbtrack=b1b58734ee78a5f17571ab2c17bed914; fre=0; rd=1380000; zl=en; AWSALBTG=6UeXL3bzBW2Gdt3WeHJhTJ7VbRnXk7MR2lCIHEHDIsgkqIgEhEXn3TjEPiyzDDOnJXhY9VGru4fBaywD4dHg3XE4puzvuUoFSR7EWFtObyVj3sJRhVGejvJLzvO+P4lxEP/YaGnJHdE4vmy50SenuJtzvHeRi5bHgs5vpte5ATzk; AWSALBTGCORS=6UeXL3bzBW2Gdt3WeHJhTJ7VbRnXk7MR2lCIHEHDIsgkqIgEhEXn3TjEPiyzDDOnJXhY9VGru4fBaywD4dHg3XE4puzvuUoFSR7EWFtObyVj3sJRhVGejvJLzvO+P4lxEP/YaGnJHdE4vmy50SenuJtzvHeRi5bHgs5vpte5ATzk; locus=%7B%22addressId%22%3A0%2C%22lat%22%3A15.4989%2C%22lng%22%3A73.8278%2C%22cityId%22%3A13%2C%22ltv%22%3A13%2C%22lty%22%3A%22city%22%2C%22fetchFromGoogle%22%3Afalse%2C%22dszId%22%3A53046%2C%22fen%22%3A%22Goa%22%7D; ltv=13; lty=13"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch(
      `https://www.zomato.com/webroutes/getPage?location=&isMobile=0&page_url=${param}`,
      requestOptions
    );

    console.log("Fetching data");

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default Restaurant;
