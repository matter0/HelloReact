import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
 
  const { resdata } = props;
  const { name, avgRating, deliveryTime, costForTwo ,cuisines} = resdata?.data;
  return (
    <div className="m-4 p-4 w-[250px] h-[300x] bg-gray-300 rounded-lg hover:bg-orange-300">
      <img
        className="rounded-lg"
        src={
          CDN_URL +
          resdata.data.cloudinaryImageId
        }
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo / 100} for two </h4>
      <h4>{deliveryTime} Minutes </h4>
    </div>
  );
};

export const withPromoted =(RestroCard) =>{
  return (props) =>{ return(
    <div>
      <label className="absolute bg-black text-white">Promoted</label>
      <RestroCard {...props}/>
    </div>
  );
  };
}

export default RestroCard;
