import React from "react";

const PropertyDescriptions = ({ mainDescription = "This is a default description for the property." }) => {
  return (
    <>
      <p className="text mb10">
        {mainDescription}
      </p>
    </>
  );
};

export default PropertyDescriptions;
