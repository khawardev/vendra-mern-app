/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function LightBox({ filteredProduct, zoomedImageSrc }) {
    const [open, setOpen] = React.useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);

    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setOpen(true);
    };
    return (
        <>
            {zoomedImageSrc ? <img
                className="mix-blend-multiply flex justify-center items-center  cursor-pointer"
                src={`https://ucarecdn.com/${zoomedImageSrc}/`}
                onClick={() => handleImageClick(0)}
            /> : <img
                className="mix-blend-multiply flex justify-center items-center  cursor-pointer"
                src={`https://ucarecdn.com/${filteredProduct?.image?.[0]}/`}
                onClick={() => handleImageClick(0)}
            /> }
           

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[ Fullscreen, Zoom]}
                counter={{ container: { style: { bottom: "unset", top: 0 } } }}
                slides={filteredProduct?.image.map((imageUUID) => ({
                    src: `https://ucarecdn.com/${imageUUID}/`,
                }))}
                currentIndex={selectedImageIndex}
                onChange={(index) => setSelectedImageIndex(index)}
            />
        </>
    );
}
