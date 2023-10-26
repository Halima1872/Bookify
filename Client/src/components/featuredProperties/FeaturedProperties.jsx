import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading } = useFetch("/api/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
                </div>}
              <span className="fpPrice">Starting from <b>₹{item.cheapestPrice}</b></span>
              
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;

