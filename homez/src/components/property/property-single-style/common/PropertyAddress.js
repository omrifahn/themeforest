import React from "react";

const PropertyAddress = ({
  addresses = [
    {
      address: "Stralauer 14, Berlin",
      district: "Friedrichshain",
    },
  ],
}) => {
  return (
    <>
      {addresses.map((address, index) => (
        <div
          key={index}
          className={`col-md-6 col-xl-4 ${index === 1 ? "offset-xl-2" : ""}`}
        >
          <div className="d-flex justify-content-between">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">Address</p>
              <p className="fw600 mb10 ff-heading dark-color">District</p>
            </div>
            <div className="pd-list">
              <p className="text mb10">{address.address}</p>
              <p className="text mb10">{address.district}</p>
            </div>
          </div>
        </div>
      ))}
      {/* End col */}
      {addresses.length > 0 && (
        <div className="col-md-12">
          <iframe
            className="position-relative bdrs12 mt30 h250"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${addresses[0].address}, ${addresses[0].district}&t=m&z=14&output=embed&iwloc=near`}
            title={addresses[0].address}
            aria-label={addresses[0].address}
          />
        </div>
      )}
      {/* End col */}
    </>
  );
};

export default PropertyAddress;
