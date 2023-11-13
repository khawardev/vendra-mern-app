import "../../assets/styles/Carousel.scss";
import { useRef } from "react";
// import CategoriesData from "../../data/CategoriesData";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Axios from "axios";
// import file from '..//Vendra-React-App-Backend/uploads';
import CategoriesNested from './HomeNestedContainer/CategoriesNestedSection';
const CategoriesSection = () => {
  // const Image_path= "/uploads/${category.image}";

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
        console.log("Fetched categories:", response.data); // Log the data received from the server
        setCategories(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="my-7 w-11/12  m-auto ">
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
          {categories?.reverse().map((category) => {
            return (
              <CategoriesNested key={category._id} category={category} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
