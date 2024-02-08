import React, { useState } from 'react';
import new_collection from '../Assets/new_collections';
import Item from './Item';
import './newcollection.css';

function Newcollection() {
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = new_collection.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(new_collection.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='new_collection'>
      <h1>NEW COLLECTIONS </h1>
      <hr />
      <div className='new_collection-item'>
        {currentItems.map((item, index) => (
          <Item key={index} product={item} />
        ))}
      </div>
      <div className="pagination" >
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)} className={currentPage === page ? 'active' : ''}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Newcollection;
