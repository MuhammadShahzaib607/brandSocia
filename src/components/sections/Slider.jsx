'use client';

import { useRouter } from "next/navigation";
import Slider from "react-slick";
import { FaArrowRightLong, FaPhoneVolume } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const slides = [
    {
      title: "BrandSocia - The Way to Future",
      heading: (
        <>
          Elevate Your Brand <br className="hidden md:inline" /> Presence with{" "}
          <br className="hidden md:inline" />{" "}
          <span className="text-orange-500">Creative Websites</span>
        </>
      ),
      text: (
        <>
          We streamline your website for the results you want to achieve for a
          better <span>future. Let&apos;s get digital!</span>
        </>
      ),
      link: "/services/web-development",
      image:
        "/portfolio/WhatsApp_Image_2025-10-01_at_15.10.33_4b4e192e-removebg-preview.png",
    },
    {
      title: "BrandSocia - The Way to Future",
      heading: (
        <>
          Go Digital <br className="hidden md:inline" /> With Leading <br className="hidden md:inline" />{" "}
          <span className="text-orange-500">Branding Agency</span>
        </>
      ),
      text: (
        <>
          Branding is a phenomenon that increases brand recognition, helps
          attract <span>newer prospects, and improves customer loyalty.</span>
        </>
      ),
      link: "/services/brand-identity",
      image: "/portfolio/Fizzora_can_page-0001-removebg-preview.png",
    },
    {
      title: "BrandSocia - The Way to Future",
      heading: (
        <>
          Go Digital <br className="hidden md:inline" /> With Leading <br className="hidden md:inline" />{" "}
          <span className="text-orange-500">Ecommerce Agency</span>
        </>
      ),
      text: (
        <>
          An ideal way to innovate your brand from a traditional{" "}
          <span>store to an online store is via Ecommerce.</span>
        </>
      ),
      link: "/services/ecommerce-solutions",
      image:
        "/portfolio/WhatsApp_Image_2025-10-01_at_15.10.33_d1581e25-removebg-preview.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: "url('/SL-043021-42650-20.jpg')" }}
      ></div>

      {/* Slider Content */}
      <div className="relative z-10">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="!flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-10 md:py-20 gap-6 md:gap-10"
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 text-center md:text-left text-white order-2 md:order-1">
                <h4 className="text-sm md:text-lg font-semibold mb-2 text-gray-200">
                  {slide.title}
                </h4>
                <h1 className="text-2xl md:text-5xl font-bold leading-tight md:leading-snug mb-3 md:mb-4">
                  {slide.heading}
                </h1>
                <p className="mb-4 md:mb-6 text-gray-100 text-sm md:text-base">
                  {slide.text}
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                  {/* ✅ Navigation with handleNavigation */}
                  <button
                    onClick={() => handleNavigation(slide.link)}
                    className="bg-orange-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-700 transition text-sm md:text-base"
                  >
                    Explore More <FaArrowRightLong />
                  </button>

                  <a
                    href="tel:+923283389247"
                    className="bg-white/20 backdrop-blur-sm text-white px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center justify-center gap-2 hover:bg-white/30 transition text-sm md:text-base"
                  >
                    <FaPhoneVolume /> +92 328 3389247
                  </a>
                </div>
              </div>

              {/* Image Section */}
              {slide.image && (
                <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-3/4 md:w-5/6 max-w-xs md:max-w-md h-auto rounded-lg transform transition-transform duration-700 ease-in-out hover:scale-110 drop-shadow-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
