import React from "react";
import { useGlobalhook } from "../context";

export const Page = () => {
  const { page, inc, dec, nbPages } = useGlobalhook();
  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-dark mx-3"
        onClick={() => dec(page - 1)}
      >
        Prev
      </button>
      {page + 1} of {nbPages}
      <button
        type="button"
        className="btn btn-dark mx-3"
        onClick={() => inc(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
