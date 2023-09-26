// "use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyHeader from "@/components/property/property-single-style/single-v7/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import PropertyGallery from "@/components/property/property-single-style/single-v7/PropertyGallery";
import React from "react";
import OverView from "@/components/property/property-single-style/single-v7/OverView";

export const metadata = {
  title: "Property Single V7 || Homez - Real Estate NextJS Template",
};

// TODO - 1. based on the param.id, fetch the property data from the json file
const SingleV7 = ({ params }) => {
  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* <!-- Start Property Singe Top --> */}
      <section className="pt60 pb0 bgc-dark">
        <div className="container">
          <div className="row">
          <PropertyHeader
              // TODO - fill values
            // id={someId}
            // title={someTitle}
            // location={someLocation}
            // status={someStatus}
            // timeAgo={someTimeAgo}
            // viewCount={someViewCount}
            // price={somePrice}
            // sqft={someSqft}
          />
          </div>
          {/* End .row */}

          <div className="row  mt30">
          <PropertyGallery
              // TODO - fill values
            // id={123}
            // imageUrl={""}
            // imageWidth={1220}
            // imageHeight={520}
          />
          </div>
          {/* End .row */}

          <div className="row mt30">
          <OverView
              // TODO - fill values
            // bed={someBedData}
            // bath={someBathData}
            // yearBuilding={someYearBuildingData}
            // garage={someGarageData}
            // sqft={someSqftData}
            // propertyType={somePropertyTypeData}
          />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* <!-- End Property Singe Top --> */}

      {/* Property All Single V7 */}
      <section className="pt60 pb90 bgc-white">
        <div className="container">
          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Property Description</h4>
                <ProperytyDescriptions
              // TODO - fill values
                />
                {/* End property description */}

                <h4 className="title fz17 mb30 mt50">Property Details</h4>
                <div className="row">
                  <PropertyDetails
              // TODO - fill values
                  />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30 mt30">Address</h4>
                <div className="row">
                  <PropertyAddress
              // TODO - fill values
                  />
                </div>
              </div>
              {/* End .ps-widget */}

            </div>
            {/* End .col-8 */}

          </div>
          {/* End .row */}

        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V7  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV7;
