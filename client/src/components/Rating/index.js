import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

const Rating = ({ value, numReviews }) => {
  return (
    <div className='rating'>
      <div className='rating-stars'>
        <span>
          {value >= 1 ? <BsStarFill color='F5D547' /> : value >= 0.5 ? <BsStarHalf color='F5D547'/> : <BsStar color='F5D547' />}
        </span>
        <span>
        {value >= 2 ? <BsStarFill color='F5D547'/> : value >= 1.5 ? <BsStarHalf color='F5D547'/> : <BsStar color='F5D547'/>}
        </span>
        <span>
        {value >= 3 ? <BsStarFill color='F5D547'/> : value >= 2.5 ? <BsStarHalf color='F5D547'/> : <BsStar color='F5D547'/>}
        </span>
        <span>
        {value >= 4 ? <BsStarFill color='F5D547'/> : value >= 3.5 ? <BsStarHalf color='F5D547'/> : <BsStar color='F5D547'/>}
        </span>
        <span>
        {value >= 5 ? <BsStarFill color='F5D547'/> : value >= 4.5 ? <BsStarHalf color='F5D547'/> : <BsStar color='F5D547'/>}
        </span>
      </div>
      <span className='rating-text'>{numReviews} vélemény alapján</span>
    </div>
  )
}

export default Rating