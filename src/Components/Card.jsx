import React, { useEffect, useState } from "react";

export const Card = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [data, setdata] = useState();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let url =
      "https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json";

    fetch(url)
      .then((response) => {
        response.json().then((result) => {
         
          setloading(false);
          setdata(result.articles);

          localStorage.setItem("news", JSON.stringify(result));
        });
      })
      .catch((err) => {

        setloading(true);
        let collection = localStorage.getItem("news");
        const news = JSON.parse(collection);
        setloading(false);
        setdata(news.articles);
      });
  }, []);

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
      <div>
        {isOnline ? (
          <p>You are online.</p>
        ) : (
          <p>You are offline. fix your internet to load latest news .</p>
        )}
      </div>

      {data.map((value, index) => {
        return (
          <section
            aria-label=" backgroundImage of article news card "
            className="bg-black  h-80 w-[90%] text-white rounded-md flex flex-col p-1 gap-2 bg-no-repeat  object-cover  "
            key={index}
          >
            <h2 className="lg:text-2xl   font-extrabold">{value.title}</h2>

            <article className=" text-lg ">{value.description}</article>

            <p className=" lg:text-base mt-4">Author: {value.author}</p>

            <a href={value.url} target="articlelink">
              <p className=" lg:text-lg mt-4">Read Article</p>
            </a>
          </section>
        );
      })}
    </section>
  );
};
