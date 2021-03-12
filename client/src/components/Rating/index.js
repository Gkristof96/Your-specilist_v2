import React from 'react'
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
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
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating