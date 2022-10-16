import React, { useEffect, useState } from "react";
import { useGlobalhook } from "../context";

export const List = () => {
  const style = {
    width: "50rem",
    margin: "auto",
  };
  //loading part using usesate hook
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  //fetching part
  // goes to context.js

  const { hits, isLoading, removepost } = useGlobalhook();

  //update isLoading here with use state
  if (isLoading) {
    return (
      <>
        <h3 className="text-center">Loading...</h3>
      </>
    );
  }
  return (
    <>
      {hits.map((item) => (
        <div className="container my-3" key={item.objectID}>
          <div className="card bg-light" style={style}>
            <div className="card-body bg-light">
              <h5 className="card-title bg-light">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted bg-light">
                By:{item.author}|{item.num_comments} comments
              </h6>
              <p className="card-text bg-light"></p>
              <a href={item.url} className="card-link mx-3 bg-light">
                Read More
              </a>
              <a
                href="#"
                className="card-link bg-light "
                onClick={() => {
                  removepost(item.objectID);
                }}
              >
                Remove
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
