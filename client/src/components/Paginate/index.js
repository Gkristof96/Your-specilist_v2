import React from 'react'
import { Link } from 'react-router-dom'

const Paginate = ({pages, page}) => {
    return (
        <ul className='pagination'>
            <li>Előző</li>
            {[...Array(pages).keys()].map((number) => (
              <Link key={number} to={`/providers/page/${number+1}`}>
                <li
                  className={`${page === number && "active"}`}
                >
                  {number +1}
                </li>
                </Link>
              ))}
            <li>Következő</li>
        </ul>
    )
}

export default Paginate