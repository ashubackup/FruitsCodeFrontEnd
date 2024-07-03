import React from "react";

const SinglePage = ({ name }) => {
    const pageName = name || 'Shop';

  return (
    <>
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{pageName}</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item active text-white">{pageName}</li>
        </ol>
      </div>
    </>
  );
};

export default SinglePage;
