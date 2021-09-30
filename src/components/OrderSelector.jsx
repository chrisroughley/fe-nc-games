import { useEffect } from "react";

const OrderSelector = ({ setQuery, category }) => {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    setQuery("");
  }, [category, setQuery]);
  return (
    <div className="order-container">
      <select
        onChange={(event) => {
          handleChange(event);
        }}
        className="order-selector"
      >
        <option value="">Sort By</option>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comments</option>
      </select>
    </div>
  );
};

export default OrderSelector;
