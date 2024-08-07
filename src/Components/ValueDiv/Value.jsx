import React from 'react';
import image1 from '../../Assets/images/cover.jpg';
import image2 from '../../Assets/images/cover.jpg';
import image3 from '../../Assets/images/cover.jpg';
import './Value.css';

const FunAtWork = () => {
  return (
    <div className="fun-at-work-container">
    
      <div className="images-container">
        <div className="image-wrapper image1">
          <img src={image1} alt="Employee 1" className="image" />
        </div>
        <div className="image-wrapper image2">
          <img src={image2} alt="Employees working" className="image" />
        </div>
        <div className="image-wrapper image3">
          <img src={image3} alt="Employee 2" className="image" />
        </div>
      </div>
      <div className="text-container">
        <h1 className="title">WORK IS FUN HERE!</h1>
        <p className="description">
          Ready to love your job again? Succedo is more than just a company; it's a vibrant community of talented individuals who share a passion for success.
          We believe in work-life balance, innovation, and having a blast while achieving great things. Join us and discover why our employees say it's the best job they've ever had.
        </p>
      </div>
    </div>
  );
}

export default FunAtWork;
