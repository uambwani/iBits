import React from "react";
import { motion } from "framer-motion";
import "./GalleryElements.css";

import Slider from "infinite-react-carousel";

import img1 from "../../images/1.svg";
import img2 from "../../images/41.png";
import img3 from "../../images/29.png";
import img4 from "../../images/3.png";
import img5 from "../../images/16.png";
import img6 from "../../images/26.png";

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  // const [width, setWidth] = useState(0);
  // const carousel = useRef();

  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  const settings = {
    centerPadding: 10,
    dots: true,
    overScan: 5,
    slidesPerRow: 3,
    virtualList: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    // swipe: true,
  };

  return (
    <div className='carousel' id='gallery'>
      <div>
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <motion.div
                className='item'
                key={image}
                whileHover={{ scale: 1.1 }}
              >
                <img src={image} alt='' />
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
