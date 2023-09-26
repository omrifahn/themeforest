// PropertyGallery.js

"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const PropertyGallery = ({
                           id = 123,
                           imageUrl = "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/384332643_10162138598689009_8283510746015147210_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=9uUwjOHIX1MAX_Utf_s&_nc_ht=scontent-lhr8-1.xx&edm=AFuVL-cEAAAA&oh=00_AfALACjVgzC9GeXGoX8GZcu25G0V1quB2bwrmQY6Wyunbw&oe=6518A117",
                           imageWidth = 1200,
                           imageHeight = 500
}) => {

  return (
    <>
      <Gallery>
        <div className="col-12">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={imageUrl}
                thumbnail={imageUrl}
              >
                {({ ref, open }) => (
                <Image
                  src={imageUrl}
                  width={imageWidth}
                  height={imageHeight}
                  ref={ref}
                  onClick={open}
                  alt="image"
                  role="button"
                  className="w-100 h-100 cover"
                  style={{borderRadius: '15px'}}
                />
                )}
              </Item>
            </div>
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
