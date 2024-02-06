import React, { useState, useEffect } from 'react';

import "./CompaniesCarousel.css"

import Billabong from "../../assets/images/empresas/billabong.png"
import CeroEsTres from "../../assets/images/empresas/cero-es-tres.png"
import Farmacity from "../../assets/images/empresas/farmacity.png"
import GrupoAlas from "../../assets/images/empresas/grupo-alas.png"
import Newsan from "../../assets/images/empresas/newsan.png"
import MercadoPago from "../../assets/images/empresas/mercado-pago.jpg"

const CompaniesCarousel = () => {
  const [images, setImages] = useState([Billabong, CeroEsTres, Farmacity, GrupoAlas, Newsan, MercadoPago]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [numImagesToShow, setNumImagesToShow] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [currentImageIndex, images.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setNumImagesToShow(3);
      } else if (window.innerWidth <= 991) {
        setNumImagesToShow(4);
      }else{
        setNumImagesToShow(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='container-empresas'>
      <h2>Empresas que confían en <span>Clinch</span></h2>
      <div className='carrousel-empresas'>
        {[...images, ...images].slice(currentImageIndex, currentImageIndex + numImagesToShow).map((image, index) => (
          <img key={index} src={image} alt="" className='img-empresa'/>
        ))}
      </div>
    </section>
  );
};

export default CompaniesCarousel
