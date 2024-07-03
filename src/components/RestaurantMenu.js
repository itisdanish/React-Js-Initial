import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
import RestaurantItemCard from "./RestaurantItemCard"
import { useParams } from "react-router-dom"
import { MENU_URL } from "../utils/constants"



const RestaurantMenu = ()=>{

    const [resInfo, setResInfo]= useState(null)
    const { resId } = useParams()
    console.log(resId)

    useEffect(()=>{
         fetchMenu()
    },[])
    const fetchMenu = async () => {
        const data = await fetch( MENU_URL+resId );
        const json = await data.json()
        // console.log(json.data)
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)
        setResInfo(json.data)
    }

    if (resInfo == null ) return <Shimmer/>
    const { name,
            cuisines,
            costForTwoMessage
          } = resInfo?.cards[2]?.card?.card?.info
            // console.log(resInfo?.cards[2]?.card?.card?.info)

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    // console.log(itemCards)
    
    // const resMenu = itemCards.map(res => res.card.info.name)
    // console.log(resMenu)
    
    
return (
        <div className="itemCard">
        <h1>{name}</h1>
            <p>{cuisines.join(', ')}- {costForTwoMessage}</p>
            <h3>loading..</h3>
            <h2>Menu</h2>
            
            <ul>
                
                
            </ul>
            <div  className="">
                {
                itemCards.map(res => < RestaurantItemCard key={res.card.info.id} resMenu = {res}/>                 
            )
                }
                {/* {res.card.info.name} at Rs {res.card.info.defaultPrice/100} */}
            </div>
        </div>
    )
}

export default RestaurantMenu