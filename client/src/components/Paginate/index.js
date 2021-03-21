import React from 'react'
import { Link } from 'react-router-dom'

const Paginate = ({pages, page, keyword}) => {
  const { city, profession } = keyword
    return (
        <ul className='pagination'>
            <li>Előző</li>
            {[...Array(pages).keys()].map((number) => (
              <Link key={number} to={(city && profession) ? `/providers/search/${profession}/${city}/page/${number + 1}`
                : (!city && profession) ? `/providers/search/${profession}/page/${number + 1}` : `/providers/page/${number + 1}`}>
                <li
                  className={`${page === number && "active"}`}
                >
                  {number + 1}
                </li>
                </Link>
              ))}
            <li>Következő</li>
        </ul>
    )
}

export default Paginate