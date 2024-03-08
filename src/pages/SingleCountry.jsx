import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleCountry();
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);

  return (
    <>
      <section className="p-8 md:py-0 container">
        {country.map((item) => (
          <div
            key={item.population}
            className="row gap-8 md:place-items-center md:h-screen"
          >
            <article className="col-md-6">
              <img src={item.flags.svg} alt={item.name.common} className="img-fluid" />
            </article>

            <article className="col-md-6">
              <h1 className="mb-8 font-bold text-gray-900 text-4xl lg:text-6xl">
                {item.name.official}
              </h1>

              <ul className="my-4 flex flex-column items-start gap-2 text-slate-700 list-unstyled">
                <li>Capital: {item.capital[0]}</li>
                <li>Population: {item.population.toLocaleString()}</li>
                <li>Region: {item.region}</li>
                <li>Subregion: {item.subregion}</li>
              </ul>

              {item.borders && (
                <>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">Borders:</h3>
                  <ul className="d-flex flex-wrap items-start gap-2 list-unstyled">
                    {item.borders.map((border, index) => (
                      <li
                        key={index}
                        className="bg-white p-2 rounded text-xs tracking-wide shadow-sm"
                      >
                        {border}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Link
                to="/"
                className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200"
              >
                &larr; Back
              </Link>
            </article>
          </div>
        ))}
      </section>
    </>
  );
}
