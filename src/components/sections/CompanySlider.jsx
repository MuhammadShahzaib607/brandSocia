import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CompanySlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };

  const companies = [
    {
      id: 1,
      image: '/companies/companies-removebg-preview.png',
      alt: 'Company Logo 1'
    },
    {
      id: 2,
      image: '/companies/companies-removebg-preview.png',
      alt: 'Company Logo 2'
    }
  ];

  return (
    <div className="section2 py-12 bg-transparent">
      <div className="container mx-auto px-4">
        <Slider {...sliderSettings} className="vertical-slider">
          {companies.map((company) => (
            <div key={company.id} className="outline-none">
              <div className="flex justify-center">
                <div className="w-full max-w" >   
                  <Image 
                    src={company.image} 
                    alt={company.alt}
                    width={690}
                    height={108}
                    className="w-full h-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanySlider;