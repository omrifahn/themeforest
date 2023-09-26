import React from "react";

const PropertyDetails = ({ columns = [
  [
    {
      label: "Property ID",
      value: "Default ID",
    },
    {
      label: "Price",
      value: "Default Price",
    },
  ],
  [
    {
      label: "Property ID2",
      value: "Default ID2",
    },
    {
      label: "Price2",
      value: "Default Price2",
    },
  ],
] }) => {
  return (
    <div className="row">
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className={`col-md-6 col-xl-4${
            columnIndex === 1 ? " offset-xl-2" : ""
          }`}
        >
          {column.map((detail, index) => (
            <div key={index} className="d-flex justify-content-between">
              <div className="pd-list">
                <p className="fw600 mb10 ff-heading dark-color">
                  {detail.label}
                </p>
              </div>
              <div className="pd-list">
                <p className="text mb10">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PropertyDetails;
