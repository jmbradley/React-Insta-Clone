import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import Camera from '../../assets/camera-logo.svg';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="camera logo" src={Camera} className="camera-image" />
        <div className="vl"></div>
        <img alt="instagram logo" src={IGLogo} className="logo-image" />
      </div>
      <div className ="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
