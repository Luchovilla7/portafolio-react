import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://user-images.githubusercontent.com/90526551/199587293-8a0a8e8e-31be-4e08-868a-e01333a62db2.png",
    alt: "Project 1",
    desc: "Financial Consulting",
    href: "https://luchovilla7.github.io/consultoria-financiera-MD/",
  },
  {
    src:
      "https://user-images.githubusercontent.com/90526551/199588077-3eaeb28c-2cac-4c85-8c4c-d34e861d6b4c.png",
    alt: "Project 2",
    desc: "Market Mision Agency",
    href: "https://luchovilla7.github.io/proyecto-final-coder-dw/",
  },
  {
    src:
      "https://user-images.githubusercontent.com/90526551/199591385-f400b5ce-28ac-472d-ad5b-9a0d27032d26.png",
    alt: "Project 5",
    desc: "Agency Template",
    href: "https://luchovilla7.github.io/agencia-digital/",
  },
  {
    src:
      "https://user-images.githubusercontent.com/90526551/199590517-cad86d9d-7e23-46bf-9587-c953a1d01d07.png",
    alt: "Project 3",
    desc: "Kame House Shop",
    href: "https://luchovilla7.github.io/js-coder/",
  },
  {
    src:
      "https://user-images.githubusercontent.com/90526551/199591876-820aa458-a450-4407-8938-95c626e7ab4e.png",
    alt: "Project 4",
    desc: "Panchy Shop",
    href: "https://luchovilla7.github.io/curso-frontend-developer-practico-javascript/",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.href} target="_blank"><img src={slide.src} alt={slide.alt} /></a>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;