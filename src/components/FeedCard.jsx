import React from "react";
import Card from "./shared/Card";

function FeedCard({ item }) {
  // const handleClick = (item) => {
  //   console.log(item)
  // }

  return (
    <Card>
      <div style={{ textAlign: "center" }}>
        Name : {item.name}
        <br />
        The Price is £{item.price}
      </div>
    </Card>
  );
}

export default FeedCard;
