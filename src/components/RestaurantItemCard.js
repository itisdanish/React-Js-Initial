import { CDN_URL2 } from "../utils/constants"

const RestaurantItemCard = (props) =>{
    const {resMenu} = props
    // console.log(resMenu.card.info.id)
    return(
        <div>
            
            <div className="menu-card">
        <div className="menu-card-details">
            <h3>{resMenu.card.info.name}</h3>
            <p className="price">₹ {resMenu.card.info.price/100 || resMenu.card.info.defaultPrice/100}</p>
            <p>{resMenu.card.info.description}</p>
        </div>
        <div className="menu-card-image">
            <img src={CDN_URL2 + resMenu.card.info.imageId} alt="Melts 3 Course Meal for 1 Non-Veg" />
        </div>
    </div>
        </div>
    )
}
export default RestaurantItemCard