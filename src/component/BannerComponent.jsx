import React, { useEffect, useState } from 'react';

const BannerComponent = () => {
  const [bannerData, setBannerData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/bannerData.json'); // Adjust the path as per your project structure
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBannerData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="position-relative">
        <img src={bannerData.image} className="img-fluid w-100 rounded" alt="" />
        <div className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
          <h3 className="text-secondary fw-bold">{bannerData.text}</h3>
        </div>
      </div>
    </div>
  );
}

export default BannerComponent;
