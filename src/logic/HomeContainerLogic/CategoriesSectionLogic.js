import { useRef } from "react";

const carouselContainer = useRef();
const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount = dir === "left" ? container.scrollLeft - (286) : container.scrollLeft + (286);

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    });
};