import React from "react";

const OverView = ({
                    bed = 123,
                    bath = 123,
                    yearBuilding = 1234,
                    garage = 123,
                    sqft = 123,
                    propertyType = "type",
}) => {
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "Bedroom",
      value: bed,
    },
    {
      icon: "flaticon-shower",
      label: "Bath",
      value: bath,
    },
    {
      icon: "flaticon-event",
      label: "Year Built",
      value: yearBuilding,
    },
    {
      icon: "flaticon-garage",
      label: "Garage",
      value: garage,
    },
    {
      icon: "flaticon-expand",
      label: "Sqft",
      value: sqft,
    },
    {
      icon: "flaticon-home-1",
      label: "Property Type",
      value: propertyType,
    },
  ];
  return (
    <>
      {overviewData.map((item, index) => (
        <div key={index} className="col-sm-6 col-md-4 col-xl-2">
          <div className="overview-element dark-version mb25 d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15">
              <h6 className="mb-0 text-white">{item.label}</h6>
              <p className="text mb-0 fz15 text-white">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
