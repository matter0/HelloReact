import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
 
  const { resdata } = props;
  const { name, avgRating, deliveryTime, costForTwo } = resdata?.data;
  return (
    <div className="resCard">
      <img
        className="res-logo"
        src={
          CDN_URL +
          resdata.data.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100} for two </h4>
      <h4>{deliveryTime} </h4>
    </div>
  );
};

export default RestroCard;
