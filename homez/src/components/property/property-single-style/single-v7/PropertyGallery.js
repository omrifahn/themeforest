"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import listings from "@/data/listings";
import Image from "next/image";

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const image_url_vertical = "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/384332643_10162138598689009_8283510746015147210_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=9uUwjOHIX1MAX_Utf_s&_nc_ht=scontent-lhr8-1.xx&edm=AFuVL-cEAAAA&oh=00_AfALACjVgzC9GeXGoX8GZcu25G0V1quB2bwrmQY6Wyunbw&oe=6518A117";
  const image_url_horizontal = "https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/382023735_10230959425712111_4804304675932362328_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&ccb=1-7&_nc_sid=4c1e7d&_nc_ohc=FDgoD35v3KkAX_p0YNj&_nc_ht=scontent-lhr8-2.xx&edm=AFuVL-cEAAAA&oh=00_AfDGpPe9Fg-X-0eV99jatLQFNaNEG8vPUsDcJ_mH-aVD8Q&oe=6517004C";
  const image_url = image_url_vertical;

  return (
    <>
      <Gallery>
        <div className="col-12">
          <div className="sp-img-content mb15-md">
            <div className="popup-img preview-img-1 sp-img">
              <Item
                original={image_url}
                thumbnail={image_url}
              >
                {({ ref, open }) => (
                <Image
                  src={image_url}
                  width={1220}
                  height={558}
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
