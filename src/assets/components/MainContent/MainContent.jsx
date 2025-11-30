import React, { useState } from "react";
import "./MainContent.css";
import { Posts } from "./Posts";
import Filter from "./Filter";
import AddNews from "./AddNews";

function MainContent() {
  const postArray = Object.values(Posts);
  const [filter, setFilter] = useState("ALL");

  // filter
  const filteredPosts =
    filter === "ALL"
      ? postArray
      : postArray.filter(post => post.tag === filter);

  // Pagination
  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // chuyển page 1
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <menu className="blog-container">
        <div className="newsboard">
          
          {/* Truyền xuống */}
          <Filter filter={filter} setFilter={handleFilterChange} />

          <ul className="newsboard__list">
            {currentPosts.map((item, index) => (
              <li className="newsboard__item" key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="newsboard__img"
                />

                <div className="newsboard__content">
                  <h3 className="newsboard__title">{item.title}</h3>
                  <p className="newsboard__desc">{item.desc}</p>

                  <div className="newsboard__meta">
                    <span className={`newsboard__tag newsboard__tag--${item.tag.toLowerCase()}`}>
                      {item.tag}
                    </span>
                    <span className="newsboard__date">{item.date}</span>
                  </div>

                  <button className="newsboard__more">#read more</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="newsboard__footer">
            <button className="newsboard__button" onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>
              ◀ previous page
            </button>

            <span style={{ margin: "0 10px" }}>
              Page {currentPage} / {totalPages}
            </span>

            <button className="newsboard__button" onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages}>
              next page ▶
            </button>
          </div>
        </div>
        <AddNews/>
      </menu>
    </>
  );
}

export default MainContent;
