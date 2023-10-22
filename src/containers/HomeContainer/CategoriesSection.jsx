import "../../assets/styles/Carousel.scss";
import { useRef } from "react";
import CategoriesData from "../../data/CategoriesData";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Axios from "axios";

//import CategoriesNested from '../../nestedContainer/HomeNestedContainer/CategoriesNestedSection';
const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left" ? container.scrollLeft - 286 : container.scrollLeft + 286;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Fetch categories from the backend when the component mounts
    Axios.get("http://localhost:5000/api/categories") // Update the URL to match your backend route
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="my-7 w-8/12 m-auto">
      <div className=" carousel relative flex justify-center items-center">
        <BsChevronCompactLeft
          className="carouselLeftNav arrow "
          onClick={() => navigation("left")}
        />
        <BsChevronCompactRight
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        <div className="carouselItems  " ref={carouselContainer}>
          {categories.map((category) => (
            <div key={category._id} className="category">
              <img src="https://res.cloudinary.com/denajbnh4/image/upload/v1694863601/category-1_w0bkdb.jpg" alt="" />
              {/* <img src={`/uploads/${category.image}`} alt={category.name} /> */}
              <h3 class="content-center">{category.name}</h3>
            </div>
          ))}
          {/*- {CategoriesData?.map((Categories, index) => {
                        return (
                            <CategoriesNested key={index} category={Categories} />
                        );
                    })} */}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
