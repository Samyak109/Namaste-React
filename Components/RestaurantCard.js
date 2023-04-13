const RestaurantCard = ({ imageURL, name, cuisines, deliveryTime }) => {
  return (
    <div className="card">
      <img src={imageURL} alt="restaurant" />
      <h2>{name}</h2>
      <h3 className="cuisine">
        {cuisines.map((cuisine) => cuisine.name).join(",")}
      </h3>
      <h3>{deliveryTime}</h3>
    </div>
  );
};

export default RestaurantCard;
