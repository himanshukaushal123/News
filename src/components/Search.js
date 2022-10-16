import React from "react";
import { useGlobalhook } from "../context";
export const Search = () => {
  const { query, searchpost } = useGlobalhook();
  return (
    <div className="container py-3">
      <h3 className="text-center">Tech news on the Go</h3>
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Search"
            value={query}
            onChange={(e) => searchpost(e.target.value)}
          />
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>
      {/* </form> */}
    </div>
  );
};
