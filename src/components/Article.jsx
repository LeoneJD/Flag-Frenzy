import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  flags,
  name,
  population,
  region,
  subregion,
}) {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className="bg-white hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-200 rounded-lg shadow overflow-hidden" style={{ height: "520px", display: "flex", flexDirection: "column" }}>
          <div style={{ height: "310px", marginBottom: "30px" }}>
            <img
              src={flags.svg}
              alt=""
              className="img-fluid article-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-2 overflow-hidden overflow-ellipsis">
              {name.common}
            </h2>
            <ul className="list-unstyled mb-0">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
}
