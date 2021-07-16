import { useEffect, useState } from 'react';

const OrderSelector = ({ setQuery, category }) => {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    setQuery('');
  }, [category]);
  return (
    <select
      onChange={(event) => {
        handleChange(event);
      }}
      className='test'
    >
      <option value=''>Sort By</option>
      <option value='created_at'>Date</option>
      <option value='votes'>Votes</option>
      <option value='comment_count'>Comments</option>
    </select>
  );
};

export default OrderSelector;
