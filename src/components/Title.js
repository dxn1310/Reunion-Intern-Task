import React from 'react';

export default function Title() {
  return (
    <div className='Title-outer'>
        <div className='title-name'><p>Search properties to rent</p></div>
        <div>
            <div>
                <input className="Search-bar" type="search" placeholder="Search with search bar"></input>
            </div>
        </div>
    </div>
  )
}
