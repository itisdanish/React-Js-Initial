import Shimmer from './Shimmer';
import RestaurantItemCard from './RestaurantItemCard';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className='itemCard'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')}- {costForTwoMessage}
      </p>
      <h3>loading..</h3>
      <h2>Menu</h2>

      <ul></ul>
      <div className=''>
        {itemCards.map((res) => (
          <RestaurantItemCard key={res.card.info.id} resMenu={res} />
        ))}
        {/* {res.card.info.name} at Rs {res.card.info.defaultPrice/100} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
