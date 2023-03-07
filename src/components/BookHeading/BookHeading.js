import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVE_FEATURE, generateAction } from "../../redux/actions/actions";

const BookHeading = () => {
  const feature = useSelector((state) => state.route);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">
        {!feature ? "Book List" : "Feature books"}
      </h4>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => dispatch(generateAction(ACTIVE_FEATURE, false))}
          className={`filter-btn ${!feature && "active-filter"}`}
          id="lws-filterAll"
        >
          All
        </button>
        <button
          onClick={() => dispatch(generateAction(ACTIVE_FEATURE, true))}
          className={`filter-btn ${feature && "active-filter"}`}
          id="lws-filterFeatured"
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookHeading;
