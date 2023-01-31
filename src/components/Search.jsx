import React from "react";
import FeedData from "../data/data";
import { useState } from "react";
import Card from "./shared/Card";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div className="">
        <div style={{ textAlign: "center" }}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search Items Here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
        <div>
          {FeedData.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <Card key={val.id}>
                <div style={{ textAlign: "center" }}>
                  Name : {val.name}
                  <br />
                  The Price is £{val.price}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
