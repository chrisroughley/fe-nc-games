import { useEffect, useState } from 'react';

const OrderSelector = ({ setQuery, category }) => {
  const [selected, setSelected] = useState('');
  const handleChange = (event) => {
    setQuery(event.target.value);
    setSelected(event.target.value);
  };
  useEffect(() => {
    setSelected('');
    setQuery('');
  }, [category]);
  return (
    <select
      onChange={(event) => {
        handleChange(event);
      }}
      value={selected}
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
