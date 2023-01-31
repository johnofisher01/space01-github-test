import React from "react";
import FeedCard from "../components/FeedCard";


const FeedContainer = ({ dataspace }) => {
  return (
    <div>
      {dataspace.map((item) => (
        <FeedCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedContainer;
