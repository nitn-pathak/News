import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../Features/newsSlicee";
export const Card = () => {
  
   const dispatch = useDispatch();

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const { loading, news } = useSelector((state) => {
    return state.newss;
  });

  useEffect(() => {
    dispatch(fetchNews());
  },[]);

  useEffect(() => {
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  function onlineHandler() {
    setIsOnline(true);
  }

  function offlineHandler() {
    setIsOnline(false);
  }


  if (loading) {
    return (
      <h1 className="text-center font-bold text-2xl mt-10 "> Loading... </h1>
    );
  }

  return (
    <section
      aria-label=" news card"
      className="w-100 flex flex-col justify-center items-center  gap-5 pt-10 pb-10  "
    >
      {isOnline ? (
        <div className=" font-bold text-lg bg-green-400 p-2 rounded-sm ">
          You are online.
        </div>
      ) : (
        <p className=" font-bold text-lg bg-red-400 p-2 rounded-sm ">
          You are offline.
        </p>
      )}

      {news.articles.map((data, index) => {
        return (
          <section
            aria-label=" backgroundImage of article news card "
            className="bg-black  h-80 w-[90%] text-white rounded-md flex flex-col p-1 gap-2 bg-no-repeat  object-cover  "
            key={index}
            >
            <h2
             
              
              className="lg:text-2xl   font-extrabold"
            >
              {data.title}
            </h2>

            <article  className=" text-lg ">
              {data.description}
            </article>

            <p
              
            
              className=" lg:text-base mt-4"
            >
              Author: {data.author}
            </p>

            <a
            
              href={data.url}
              target="articlelink"
            >
              <p  className=" lg:text-lg mt-4">
                Read Article
              </p>
            </a>
          </section>
        );
      })}
    </section>
  );
};
