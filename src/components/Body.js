import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
const Body = ()=>{
    const [listOfRest, setResList] = useState([])
    const [searchText, setSearchText] = useState ("")
    const [filteredRes, setFilteredRes] = useState([])
    const [press,setPress]=useState()

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json)
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    }

    if (listOfRest.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className='container'>
            
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        onKeyDown={()=>{
                          const filterRes = listOfRest.filter((res) => 
                              res.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
                          );
                          setFilteredRes(filterRes);
                          // console.log(filteredRes)
                      }}
                    />
                    <button className="search-btn"
                        onClick={()=>{
                            const filterRes = listOfRest.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.trim().toLowerCase())
                            );
                            setFilteredRes(filterRes);
                            console.log(filteredRes)
                        }}
                    >
                        Search
                    </button>
                </div>
                {/* Filter BTN */}
                <button className="filter-btn"
                    onClick={()=>{
                        const filteredList = listOfRest.filter((res)=>
                            res.info.avgRating > 4.5
                        )
                        setResList(filteredList)
                    }}>
                    4+ Star Rated ★
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRes.map((list) => (
                       <Link className='res-card' to={"restaurants/"+list.info.id} key={list.info.id}><RestaurantCard resData={list} /></Link>
                    ))
                }
            </div>
        </div>
        
        </div>
    )
}

export default Body
