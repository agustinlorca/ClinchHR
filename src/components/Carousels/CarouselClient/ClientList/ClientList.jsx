import React from "react";
import { useState , useEffect} from "react";
import "./clientList.css";
import Client from "../Client/Client";
const ClientList = ({ clients }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [numImagesToShow, setNumImagesToShow] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % clients.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImageIndex, clients.length]);

  useEffect(() => {
    const handleResize = () => {
      let screenRes = window.innerWidth;
      if(screenRes > 1430){
        setNumImagesToShow(5);
      }else if(screenRes <= 1430 && screenRes >= 768){
        setNumImagesToShow(4);
      }else if (screenRes < 768 && screenRes > 300) {
        setNumImagesToShow(3);
      }else{
        setNumImagesToShow(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="list-clients">
      {[...clients, ...clients]
        .slice(currentImageIndex, currentImageIndex + numImagesToShow)
        .map((image, index) => (
            <Client key={index} image={image} />
        ))}
    </div>
  );
};

export default ClientList;
