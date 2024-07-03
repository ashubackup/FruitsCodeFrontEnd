import React, { useState, useEffect } from 'react';

const ProductDetails = () => {
  const [description, setDescription] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/productDetails.json'); // Adjust the path as per your project structure
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDescription(data.description);
        setDetails(data.details);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tab-pane active" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <div className="px-2">
        <div className="row g-4">
          <div className="col-6">
            {details.map((detail, index) => (
              <div
                key={index}
                className={`row ${index % 2 === 0 ? 'bg-light' : ''} align-items-center text-center justify-content-center py-2`}
              >
                <div className="col-6">
                  <p className="mb-0">{detail.label}</p>
                </div>
                <div className="col-6">
                  <p className="mb-0">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
