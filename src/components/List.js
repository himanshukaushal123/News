import React, { useEffect, useState } from "react";

export const List = () => {
  const style = {
    width: "18rem",
    margin: "auto",
  };
  //loading part using usesate hook
  const [isLoading, setIsLoading] = useState(true);
  const [data,setData]=useState([]);
  const [url,setUrl]=useState([]);

  //fetching part
  const API = "https://hn.algolia.com/api/v1/search?query=HTML";
  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data.hits[0].title);
      setUrl(data.hits[0].url);
      console.log(data.hits[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //page load on 1st time
  useEffect(()=>{
    fetchApiData(API);
  },[])

  //update isLoading here with use state
  if(isLoading){
    return(
      <>
        <h3 className="text-center">Loading...</h3>
      </>
    )
  }
  
  return (
    <div className="container my-3 ">
      <div className="card bg-light" style={style}>
        <div className="card-body bg-light">
          <h5 className="card-title bg-light">HTML</h5>
          <p className="card-text bg-light">
          {data}
          </p>
          <a href={url} className="card-link mx-3 bg-light">
            Read More
          </a>
          <a href="#" className="card-link bg-light">
            Remove
          </a>
        </div>
      </div>
    </div>
  );
};
