import "../../assets/styles/Carousel.scss";
import { useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CategoriesNested from './HomeNestedContainer/CategoriesNestedSection';
import { useSelector } from 'react-redux';
import { selectCategories } from '../../toolkit/Slices/CategoriesSlice'
const CategoriesSection = () => {
  const categories = useSelector(selectCategories);

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
          {(Array.isArray(categories) ? categories.slice().reverse().map((category) => (
            <CategoriesNested key={category._id} category={category} />
          )) : [])}

        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
