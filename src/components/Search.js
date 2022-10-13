import React from "react";

export const Search = () => {
  return (
    <div className="container py-3">
    <h3 className="text-center">Tech news on the Go</h3>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
    </div>
  );
};
