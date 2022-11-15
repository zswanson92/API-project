import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { NavLink, Route, useParams } from 'react-router-dom';
import  { useDispatch } from 'react-redux';
import { getAllSpots } from '../../store/spots';
// import { loadAllSpots } from '../../store/spots';
import { Link } from 'react-router-dom';
import './Spots.css'

const Spots = () => {
    const dispatch = useDispatch()

    const aSpot = useSelector(state => {
        return state.spots
    })

    useEffect(() => {
        dispatch(getAllSpots())
      }, [dispatch])


    if(!aSpot.length){
        return null
    }

    return (
        <div>
             <h2>{aSpot.map((obj) => {
                return(
                <div>
                <Link style={{textDecoration: 'none'}} to={`/spots/${obj.id}`}>
                <img
                    className="item-image"
                    alt={obj.previewImage}
                    src={`${obj.previewImage}`}/>
                <p>{obj.name}</p>
                <p>{obj.avgRating}</p>
                <p>${obj.price} / night</p>
                </Link>
                </div>
                )
            })}</h2>
        </div>
    )
}

export default Spots
