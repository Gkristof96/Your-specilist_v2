import React from 'react'
import { NavLink } from 'react-router-dom'

const Paginate = ({pages, page, keyword}) => {
  const { city, profession } = keyword
    return (
        <ul className='pagination'>
            {[...Array(pages).keys()].map((number) => (
              <NavLink
                activeClassName='active'
                exact={true} 
                key={number} 
                to={(city && profession) ? `/providers/search/${profession}/${city}/page/${number + 1}`
                : (!city && profession) ? `/providers/search/${profession}/page/${number + 1}` 
                : `/providers/page/${number + 1}`}
              >
                <li>
                  {number + 1}
                </li>
                </NavLink>
              ))}
        </ul>
    )
}

export default Paginate