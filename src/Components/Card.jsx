import React from "react";
import { useSelector } from "react-redux";

export const Card = () => {
  const user = useSelector((state) => {
    return state.news;
  });

  return (
    <section
      aria-label=" news card"
      className="w-100 flex flex-col justify-center items-center  gap-5 pt-10 pb-10  "
    >
      {user.news.map((data, index) => {
        return (
          <section
            aria-label=" backgroundImage of article news card "
            className="bg-black h-80 w-[90%] text-white rounded-md flex flex-col p-1 gap-2 bg-no-repeat  object-cover  "
            style={{ backgroundImage: `url(${data.urlToImage})` }}
            key={index}
          >
            <h2
              aria-label="title of news"
              role="listitem"
              className="lg:text-2xl   font-extrabold"
            >
             
              {data.title}
            </h2>

            <article aria-label=" article description " className=" text-lg ">
          
              {data.description}
            </article>

            <p
              aria-label=" author of article"
              role="listitem"
              className=" lg:text-base mt-4"
            >
              
              Author: {data.author}
            </p>

            <a
              aria-label="click on this link to read complete article"
              href={data.url}
              target="articlelink"
            >
              <p role="link" className=" lg:text-lg mt-4">
              
                Read Article
              </p>
            </a>
          </section>
        );
      })}
    </section>
  );
};
