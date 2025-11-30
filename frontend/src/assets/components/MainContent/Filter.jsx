import React from "react";
import "./MainContent.css";

function Filter({ filter, setFilter }) {
  return (
    <div className="newsboard__tabs">
      <button
        onClick={() => setFilter("ALL")}
        className={`newsboard__tab${filter === "ALL" ? "--active" : ""}`}
      >
        All
      </button>

      <button
        onClick={() => setFilter("NOTICES")}
        className={`newsboard__tab${filter === "NOTICES" ? "--active" : ""}`}
      >
        Notices
      </button>

      <button
        onClick={() => setFilter("NEWS")}
        className={`newsboard__tab${filter === "NEWS" ? "--active" : ""}`}
      >
        News
      </button>

      <button
        onClick={() => setFilter("EVENTS")}
        className={`newsboard__tab${filter === "EVENTS" ? "--active" : ""}`}
      >
        Events
      </button>
    </div>
  );
}

export default Filter;
